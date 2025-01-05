/*global require*/
(() => {
  const { linter, lintGutter } = require("@codemirror/lint");
  let options = {};
  class LintError extends Error {
    constructor(...msg) {
      let message = msg.join("");
      super(message);
      Object.defineProperty(this, "name", { value: "LintError" });
      let vme = this.stack.split("\n");
      vme.splice(1, 1);
      this.stack = vme.join("\n");
    }
  }

  const linters = linter((view) => {
    let diagnostics = [];
    for (let lntr of linters.lntr) {
      //first run arguments so we dont unnecesarily run a linter when its not needed
      let lintargs = [];
      //we cannot use foreach due to it forcing a scope on the internal function
      for (let largs of lntr.args) {
        lintargs.push(largs(view));
      }
      //check if ALL conditions are true
      if (
        lintargs.filter((x) => {
          if (x) return x;
        }).length == lintargs.length
      ) {
        try {
          let argms = [];
          argms = lntr.Pargs.split(",");
          argms[argms.indexOf("I")] = view.getvalue();
          argms[argms.indexOf("O")] = options[lntr.name];
          let rtn = lntr.lintFunc(...argms);
          
          if (lntr.lintFunc.errors) rtn = lntr.lintFunc.errors;
          
          //pass rtn
          diagnostics = diagnostics.concat(lntr.Wprocessor(view, linters, rtn));
          
          //once that is done run the post processor for things that the user wants to do while they have the fresh result after the linting
          lntr.postProcessor();
        } catch (e) {
          console.warn(`LintWarning \n ${e.message}\n\n${e.stack}`);
        }
      }
    }
    //sort all errors/warnings by line
    diagnostics.sort((a,b)=>{
      return a.from - b.from;
    });
    return diagnostics;
  });
  linters.lntr = [];
  let Hint = [lintGutter(), linters];
  Hint.registerLinter = (myinp) => {
    if (myinp == undefined) throw LintError("argument is required");
    if (typeof myinp !== typeof {})
      throw Error(`Argument requires object, got ${typeof myinp}`);
    let rvar = [
      [!myinp.hasOwnProperty("name"), "name property required"],
      [
        typeof myinp.name !== "string",
        `linter Name requires a String, got ${typeof myinp.name}`,
      ],
      [!myinp.hasOwnProperty("lintFunc"), "Linter function is required"],
      [
        typeof myinp.lintFunc !== "function",
        `lintFunc requires a function, instead got ${typeof myinp.lintfunc}`,
      ],
      [!myinp.hasOwnProperty("Pargs"),"Pargs is required"],
      [typeof myinp.Pargs !== "string","Pargs must be string"],
      [!myinp.hasOwnProperty("args"), "args are required"],
      [
        !myinp.args.hasOwnProperty("length"),
        `Args requires an Array, instead saw ${typeof myinp.args}`,
      ],
      [!myinp.hasOwnProperty("Wprocessor"), "Warning processor is needed"],
      [
        typeof myinp.Wprocessor !== "function",
        `Wprocessor requires a function, instead got ${typeof myinp.Wprocessor}`,
      ],
      [
        myinp.hasOwnProperty("postProcessor") &&
          typeof myinp.postProcessor !== "function",
        `postProcessor requires a function, instead got ${typeof myinp.PostProcessor}`,
      ],
      [
        myinp.hasOwnProperty("defopt") && typeof myinp.defopt !== "object",
        `defopt requires object, instead got ${typeof myinp.defopt}`,
      ],
    ];
    for (let i = 0; i < rvar.length; i++) {
      if (rvar[i][0]) throw new LintError(rvar[i][1]);
    }
    /*expected input:
    {
       name:"JSHINT", //or other name
       lintFunc:JSHINT, //variable referencing the linter 
       args:[
       func 1 (view) ==> true/false
       ]// functions that return a boolean that will justify when the linter needs to be run when the editor is at that state
       Wprocessor: func (errors) = > {return diagnostics} // function that will process the errors when linter is done running
       postProcessor: func (view,name,errors) => {} //any other processes that need to be run after warnings/errors are done processing
       defopt:
    }
    */
    linters.lntr.push(myinp);
    options[myinp.name] = myinp.defopt || {};
  };
  Hint.config = function (name, opts) {
    if (!name) throw new LintError("Unable to set Options due to no name");
    if (!(name in options))
      throw new LintError(
        "Linter Name does not exist, please use existing linters that you've registered"
      );
    if (!opts) return null;
    options[name] = opts;
    return options;
  };
  require.addMod("@Fe2/hintr", {
    F2Hint: Hint,
  });
})();
