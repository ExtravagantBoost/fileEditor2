//@Fe2/hintr
(() => {
    /*globals JSHINT*/
    // USING IMPORT CALL ON JSHINT WILL NOT WORK
    const { linter, lintGutter } = require("@codemirror/lint");
    var options = {
        jshint: {
            unused: true,
            undef: true,
        },
    };
 
    function elt(tagname, cls /*, ...elts*/) {
        var e = document.createElement(tagname);
        if (cls) e.className = cls;  
        for (var i = 2; i < arguments.length; ++i) {
            var elt = arguments[i];
            if (typeof elt == "string") elt = document.createTextNode(elt);
            e.appendChild(elt);
        }
        return e;
    }
    function optExists(opt, default$) {
        function checkdef() {
            if (typeof default$ == "string") return default$;
            if (typeof default$ == "function") return default$();
            if (typeof default$ == "object") return default$;
        }

        if (!options[opt]) return checkdef();
        if (typeof options[opt] == "function") {
            return options[opt]();
        }
        if (typeof options[opt] == "string") {
            return document.createTextNode(options[opt]);
        }
        if (typeof(options[opt]) == typeof({})) return options[opt];
        return checkdef();
    }

    const jsHint = linter((view) => {

        let diagnostics = [];
        let mode = null;
        if (view.modename) {
            //since this module will partially rely on langchanger.js why not check if editorview has the property 'mode'
            mode = view.modename.toLowerCase();
            //console.log(mode)
            if (mode == 'javascript'|| mode =='css') {

            } else {
                return [];
            }//return nothing because the mode is not javascript and the hinting function is only made for JS
        }
        
        JSHINT(
            view.state.doc.toString(),
            optExists("jshint", { unused: true, undef: true })
        );
        let errors = JSHINT.errors;
        let source = "JSHINT";
        let renderMessage = function () {
            try {
                let d = this;
                let icon = "bi bi-exclamation-octagon-fill";
                if (d.severity == "warning")
                    icon = "bi bi-exclamation-triangle-fill";
                if (d.severity == "info") icon = "bi bi-info-circle-fill";
                let icn = elt("i", `${icon} me-3`);
                icn.style.color = `var(--bs-${
                    d.severity == "error" ? "danger" : d.severity
                })`;
                var msg = elt("span", "bsfont", icn, d.message);
                //let msg = document.createElement("div")
                return msg;
            } catch (e) {
                console.log(e);
                return document.createTextNode(this.message);
            }
        };

        function Pos(line, char) {
            let capture = view.state.doc.line(line);
            return capture.from + char;
        }
        Fe2.files.update(Fe2.files.current,Fe2.files.get(Fe2.files.current).content,errors.length);
        errors.forEach(function (err) {
            if (err) {
                if (err.line <= 0) {
                    if (window.console)
                        window.console.warn(
                            window.console.warn(
                                "Cannot display JSHint error (invalid line " +
                                    err.line +
                                    ")",
                                err
                            )
                        );
                    //continue;
                } else {
                  let start,end,from,to;
                  try {
                    start = Pos(err.line,err.character-1);
                    let vm = 1;
                    if (typeof (err.a) == typeof("")) vm = err.a.length;
                    else if (err.code == "W033") vm = 0;
                    else vm = err.evidence.replace(/^\s+/gm,"").length;
                    end = start + vm;
                    if (err.code == "E041") end = view.state.doc.length-1;
                    
                    from = start;
                    to = end;
                  } catch (e) {console.log(e);}
                    let message = err.reason;

                    let severity = "error";
                    if (err.code.startsWith("W", 0)) {
                        severity = "warning";
                    } else if (err.code == "E001") {
                        severity = "info";
                    }
                    if (err.evidence) {
                        let index = err.evidence.substring(start).search(/.\b/);
                        if (index > -1) {
                            end += index;
                        }
                    }
                    
                    let hint = {
                        message,
                        severity,
                        source,
                        renderMessage,
                        from,
                        to,
                    };
                    //console.log(hin
                    diagnostics.push(hint);
                }
            }
          
        });
        return diagnostics;
    }, {});
    //var lint2 = linter(JSHINT)
    //console.log(linter)
    var Hint = [lintGutter(), jsHint];
    Hint.config = function (opts) {
        if (!opts) return null;
        options = opts;
        return options;
    };

    require.addMod("@Fe2/hintr", { F2Hint:Hint });
})();
