/*global l,bootstrap,JSHINT,stylelint,langd,bs,commonmark,require,Terser,prettier*/

/*
    .########.####.##       ########.########.########..####.########..#######..########...#######.
    .##........##..##       ##.......##.......##.....##..##.....##....##.....##.##.....##.##.....##
    .##........##..##       ##       ##.......##.....##..##.....##....##.....##.##.....##........##
    .######....##..##       ######   ######   ##     ##..##.....##....##.....##.########...#######.
    .##........##..##       ##.......##.......##.....##..##.....##....##.....##.##...##...##.......
    .##........##..##       ##.......##.......##.....##..##.....##....##.....##.##....##..##.......
    .##.......####.########.########.########.########..####....##.....#######..##.....##.#########   

  
   
    .##.....##....###....########..########....########..##....##....########.##.....##.########.########.....###....##.....##....###.....######......###....##....##.########.########...#######...#######...######..########
    .###...###...##.##...##.....##.##..........##.....##..##..##.....##........##...##.....##....##.....##...##.##...##.....##...##.##...##....##....##.##...###...##....##....##.....##.##.....##.##.....##.##....##....##...
    .####.####..##...##..##.....##.##..........##.....##...####......##.........##.##......##....##.....##..##...##..##.....##..##...##..##.........##...##..####..##....##....##.....##.##.....##.##.....##.##..........##...
    .##.###.##.##.....##.##.....##.######......########.....##.......######......###.......##....########..##.....##.##.....##.##.....##.##...####.##.....##.##.##.##....##....########..##.....##.##.....##..######.....##...
    .##.....##.#########.##.....##.##..........##.....##....##.......##.........##.##......##....##...##...#########..##...##..#########.##....##..#########.##..####....##....##.....##.##.....##.##.....##.......##....##...
    .##.....##.##.....##.##.....##.##..........##.....##....##.......##........##...##.....##....##....##..##.....##...##.##...##.....##.##....##..##.....##.##...###....##....##.....##.##.....##.##.....##.##....##....##...
    .##.....##.##.....##.########..########....########.....##.......########.##.....##....##....##.....##.##.....##....###....##.....##..######...##.....##.##....##....##....########...#######...#######...######.....##...
    (Github:https://github.com/extravagantboost) (replit: https://replit.com/@ExtravagantBoost) 
*/
let main = l("body");
let presetelements = {
  dropdown: (btn1, actions) => {
    let ret = l.CE("div");
    let v = null;
    ret.setattr({
      class: ["btn-group", "col", "col-auto", "me-1", "ms-1"],
      style: {
        display: "inline-block",
        "user-select": "none",
      },
      on: {
        "show.bs.dropdown": () => {
          ret.setStyle({
            position: "static",
          });
          let b = ret.getBoundingClientRect();
          let menu = ret.l(".dropdown-menu");
          menu.setStyle({
            top: b.top + b.height + "px",
            left: b.left + "px",
          });
          setTimeout(() => {
            v = setInterval(() => {
              let b = ret.getBoundingClientRect();
              let menu = ret.l(".dropdown-menu");
              menu.setStyle({
                top: b.top + b.height + "px",
                left: b.left + "px",
              });
            }, -1);
          }, 5);
        },
        "hide.bs.dropdown": () => {
          clearInterval(v);
        },
      },
    });
    ret.apCh(
      {
        button: [btn1 || "placeholder"],
        type: "button",
        class: ["btn", "btn-outline-file", "border-end-0"],

        "data-bs-toggle": "tooltip",
        "data-bs-title": "switch to " + btn1,
        on: {
          click: (event) => {
            try {
              let fi = ret.l("button").childNodes[1].wholeText;
              //console.log(fi);
              if (Fe2.files.current !== fi) {
                Fe2.files.current = fi;
              } else {
                //console.log('already selected ')
              }
            } catch (e) {
              //console.log(e);
            }
          },
        },
      },
      {
        button: [
          {
            i: [],
            class: "bi bi-three-dots-vertical",
            style: {
              "margin-left": "-3px",
              "margin-right": "-3px",
            },
          },
        ],
        type: "button",
        class: "btn btn-outline-file border-start-0",
        "data-bs-toggle": "dropdown",
        "aria-expanded": false,
        style: {
          "padding-left": "0.5625rem",
          "padding-right": "0.5625rem",
          "border-top-right-radius": "0.5rem",
          "border-bottom-right-radius": "0.5rem",
        },
      },
      {
        ul: actions || [] /*as html object*/,
        class: ["dropdown-menu", "dropdown-menu-dark"],
      }
    );
    Object.defineProperty(ret, "tooltip", {
      value: new bootstrap.Tooltip(ret.l(".border-end-0"), {
        delay: {
          show: 500,
          hide: 100,
        },
        container: "body",
      }),
    });
    setTimeout(() => {
      //size buttons when added to HTMLdoc
      let btngrup = ret.getBoundingClientRect();
      let button = ret.l("button.border-start-0");
      //console.log(button.getBoundingClientRect());
      let fbutton = ret.l("button.border-end-0").getBoundingClientRect();
      button.style.height = fbutton.height + "px";
    }, 1);
    ret.addEventListener("contextmenu", (event) => {
      var e = event || window.event;
      //jshint -W030
      e.preventDefault && e.preventDefault();
      e.stopPropagation && e.stopPropagation();
      e.cancelBubble = true;
      e.returnValue = false;
      ret.l("button.border-start-0").click();
    });
    return ret;
  },
};
main.setattr({
  style: {
    "--bs-body-bg": "#090a0f",
    overflow: "hidden",
    //'--bs-body-color': 'white'
  },
});

main.apCh(
  {
    nav: [
      {
        div: [
          {
            div: [],
            id: "files",
            class: ["nav", "flex-nowrap", "me-3"],
            style: {
              "overflow-x": "scroll",
              "overflow-y": "hidden",
              "list-style": "none",
              width: "100%",

              height: "40px",
            },
          },
          {
            button: ["+"],
            class: ["btn", "btn-file", "fw-bolder"],
            id: "newf",
          },
        ],
        class: ["container-fluid", "flex-nowrap"],
      },
    ],
    class: ["navbar"],
    style: {
      background: "#212930",
    },
  },
  {
    div: [],
    id: "codemirror6v",
    style: {
      //background:"var(--bs-primary)" for testing purposes
    },
  }
);

function handleresize() {
  let bodrect = document.body.getBoundingClientRect();
  let nav = l("nav");
  let navbox = nav.getBoundingClientRect();

  let diff = bodrect.height - navbox.height;
  if (diff + "px" != l("#codemirror6v").style.height) {
    //console.log("v");
    //console.log("Y",diff,l("#codemirror6v").style.height)
    l("#codemirror6v").setStyle({
      width: "100%",
      height: diff + "px",
    });
  }
}

l("body").apCh({
  div: [
    {
      div: [],
      class: "toast-container end-0 p-3",
      style: {
        top: "calc(40px + 1rem)",
      },
    },
  ],
  "aria-live": "polite",
  "aria-atomic": true,
  class: "position-static",
});
window.onresize = handleresize;
handleresize();

function ierr(str = "") {
  let err = new Error(str);
  err.name = "FileEditor2=>INTERNAL_ERR";
  return err;
}

function perr(str = "") {
  let err = new Error(str);
  err.name = "FileEditor2=>PROTOCOL_ERR";
  return err;
}

function aerr(str = "") {
  let err = new Error(str);
  err.name = "FileEditor2=>ARGUMENT_ERR";
  return err;
}
var Fe2 = new (class {
  constructor() {
    try {
      const { WS } = require("@Fe2/WS");
      WS.setmode("local"); //set WebStorage API to store locally so that the user does not loose their data

      let AC3123 = Object.create(null); //create an object without prototypes so that if the user names a file such as "__defineGetter__", it would not cause such an error
      let currf12 = "";
      let fh = [];
      let self = this;
      self.version = "2.0.0BETA01A";
      let files = {
        _: () => {
          return Object.entries(AC3123);
        },
        add: (name) => {
          if (name === undefined) throw aerr("cannot add file without a name!");
          if (typeof name != "string")
            throw aerr(`name must be String, not ${typeof name}.`);

          AC3123[name] = {
            content: String(),
            errors: true,
            localfile: false,
            scroll: {
              top: 0,
              left: 0,
            },
            cursor: {
              pos: 0,
            },
            history: {
              done: [],
              undone: [],
            },
          };

          return AC3123;
        },

        current: {},
        update: (name, content, errs = null) => {
          if (name === undefined)
            throw aerr("cannot update file without any name!");
          if (typeof name != "string")
            throw aerr(`name must be String, not ${typeof name}`);
          if (!(name in AC3123))
            throw aerr(`file ${name} does not exist in files`);
          if (content === undefined) content = String();
          if (typeof content != "string")
            throw aerr(`content must be String, not ${typeof content}`);
          AC3123[name].content = content;
          AC3123[name].errors = errs;
        },
        get: (name) => {
          if (name === undefined)
            throw aerr("cannot get file from empty argument");
          if (!(name in AC3123)) return undefined;
          return AC3123[name];
        },
        del: (name) => {
          if (name === undefined)
            throw aerr("cannot delete file from empty argument");
          if (!(name in AC3123)) throw ierr("file, somehow does not exist");
          let rt = AC3123[name];
          if (name == currf12) {
            fh.splice(0, 1);
            currf12 = fh[0];
          } else {
            fh.forEach((val, ind) => {
              if (val == name) fh.splice(ind, 1);
            }); //remove every occurence of the filename from the history
          }
          delete AC3123[name];
          _p_.un();
          return rt;
        },
        create: (name, content, localfile = false, select = false) => {
          let va = name;
          let num = 0;
          while (va in AC3123) {
            num++;
            let ve = va.split(".");
            ve[0] = name.split(".")[0] + num;
            va = ve.join(".");
            //console.log(va)
          }
          //console.log(va)
          //will have to work this bug out later
          /*if (localfile) {
            let c = new FileReader();
            c.onload = (ev) => {
              let contents = ev.target.result;
              self.files.add(va);
              self.files.update(va, contents, false);
            };
            c.readAsText(localfile.file);*/
          //} else {
          self.files.add(va);
          self.files.update(va, content, false);
          //}
          AC3123[name].localfile = localfile;

          if (select) this.files.current = va;
          this._p_.un();
          return true;
        },
      };
      Object.defineProperty(files, "current", {
        get() {
          return currf12;
        },
        set: (v) => {
          if (!(v in AC3123))
            throw ierr("tried to set current file to nonexistent file!");
          currf12 = v;
          fh.splice(0, 0, v);
          if (self.editor) {
            //save scroll & cursor position value to previous file,
            console.log(self.files.get(fh[1]));
            self.files.get(fh[1]).scroll.top = self.editor.scrollDOM.scrollTop;
            self.files.get(fh[1]).scroll.left =
              self.editor.scrollDOM.scrollLeft;
            self.files.get(fh[1]).cursor.pos =
              self.editor.state.selection.main.head;
            // get file editor history
            self.files.get(fh[1]).history.done =
              self.editor.state.values[0].done;
            self.files.get(fh[1]).history.undone =
              self.editor.state.values[0].undone;
            //then set contents to current file and update scroll pos
            self.editor.setvalue(self.files.get(v).content);
            self.editor.setmode(self.files.current);
            //manipulate file editor history by changing the state
            self.editor.state.values[0].done = self.files.get(v).history.done;
            self.editor.state.values[0].undone =
              self.files.get(v).history.undone;
            self.editor.scrollDOM.scrollTop = self.files.get(v).scroll.top;
            self.editor.scrollDOM.scrollLeft = self.files.get(v).scroll.left;
            self.editor.focus();
            WS.send("Fe2.currentfile", self.files.current);
          }
          _p_.un();
        },
      });
      let _p_ = {
        notify: (str = "") => {
          let notification = bs.toast("fileEditor2", str, "icon.svg");
          notification.setattr({
            on: {
              "hidden.bs.toast": () => {
                //console.log("vvv");
                notification.dispose();
                notification.remove();
              },
            },
          });
          l(".toast-container").apCh(notification);
          //console.log(l(".toast-container"))
          //console.log(notification)
          notification.show();
        },
        un: () => {
          //console.log(l("#files").scrollLeft)
          l("#files").inHTML = "";
          files._().forEach((entry) => {
            let [fn, d] = entry;
            let c = d.content,
              e = d.errors;
            let cache = [fn, c];
            let menu = presetelements.dropdown(fn, [
              {
                li: [
                  {
                    a: [d.localfile == false ? "download" : "save"],
                    class: "dropdown-item",
                    style: {
                      "--bs-dropdown-link-hover-bg":
                        "rgba(var(--bs-primary-rgb),0.7)",
                      transition: "background 0.25s",
                    },
                    on: {
                      click: () => {
                        /*global saveAs*/
                        let fl = new Blob([self.files.get(cache[0]).content], {
                          type: `${
                            detectMime(cache[0]) || "text/plain"
                          };charset=utf-8`,
                        });
                        saveAs(fl, cache[0]);
                      },
                    },
                  },
                ],
              },
              {
                li: [
                  {
                    a: ["rename"],
                    class: "dropdown-item",
                    style: {
                      transition: "background 0.25s",
                    },
                    on: {
                      click: () => {
                        //cache = 0: filename 1: filedata
                        let file = self.files.get(cache[0]);
                        let renamemodal = bs.modal(
                          "Rename file",
                          () => {
                            let form = l.CE("div");
                            form.setattr({
                              class: "form-floating",
                            });
                            form.apCh(
                              {
                                input: [],
                                type: "text",
                                class: "form-control font-monospace",
                                id: "renameinput",
                                placeholder: `currently renaming "${cache[0]}"`,
                                autocomplete: false,
                                style: {
                                  background: "var(--bs-dark)",
                                  "border-color":
                                    "var(--bs-border-color-translucent)",
                                  color: "var(--bs-white)",
                                },
                                on: {
                                  keydown(event) {
                                    if (event.keyCode === 13) {
                                      //Enter key
                                      let vrl = addmodal.l("input").value;
                                      if (vrl != "") {
                                        l("#submit").click();
                                      }
                                    }
                                  },
                                },
                              },
                              {
                                label: [`currently renaming "${cache[0]}"`],
                                class: "font-monospace",
                                for: "renameinput",
                              }
                            );
                            return form;
                          },
                          [
                            {
                              button: ["cancel"],
                              class: "btn btn-secondary",
                              "data-bs-dismiss": "modal",
                            },
                            {
                              button: ["rename"],
                              class: "btn btn-primary",
                              "data-bs-dismiss": "modal",
                              on: {
                                click() {
                                  //parse data and rename
                                  let input = document.body.l("#renameinput");

                                  self.files.create(
                                    input.value,
                                    file.content,
                                    file.localfile,
                                    self.files.current == cache[0]
                                  );
                                  let newfile = self.files.get(input.value);
                                  newfile.errors = file.errors;
                                  newfile.cursor = file.cursor;
                                  newfile.history = newfile.history;
                                  newfile.scroll = newfile.scroll;
                                  self.files.del(cache[0]);
                                  self._p_.un();
                                },
                              },
                              id: "submit",
                            },
                          ]
                        );
                        document.body.apCh(renamemodal);
                        renamemodal.show();
                      },
                    },
                  },
                ],
              },
              {
                li: [
                  {
                    hr: [],
                    class: "dropdown-divider",
                  },
                ],
              },
              {
                li: [
                  {
                    a: ["delete"],
                    class: "dropdown-item",
                    style: {
                      "--bs-dropdown-link-hover-bg":
                        "rgba(var(--bs-danger-rgb),0.7)",
                      transition: "background 0.25s",
                    },
                    on: {
                      click: () => {
                        if (files._().length > 1) {
                          let deletionmodal = bs.modal(
                            "WARNING!!",
                            `Are you sure you want to delete '${cache[0]}'?`,
                            [
                              {
                                button: ["cancel"],
                                class: "btn btn-secondary",
                                "data-bs-dismiss": "modal",
                              },
                              {
                                button: ["DELETE"],
                                class: "btn btn-danger",
                                "data-bs-dismiss": "modal",
                                on: {
                                  click: () => {
                                    console.log("Deleting...");
                                    files.del(cache[0]);
                                  },
                                },
                              },
                            ]
                          );
                          //console.log(deletionmodal)
                          deletionmodal.setattr({
                            on: {
                              "hidden.bs.modal": () => {
                                deletionmodal.dispose();
                                deletionmodal.remove();
                              },
                            },
                          });
                          l("body").apCh(deletionmodal);
                          deletionmodal.show();
                        } else {
                          this._p_.notify(
                            "you cannot delete the only file! 👀"
                          );
                        }
                      },
                    },
                  },
                ],
              },
            ]);
            menu.l("button").clsLst.add("font-monospace");
            let im = l.CE("div");
            let iconcls = langd.detect(fn);
            if (iconcls) {
              im.setattr({
                class: iconcls + " me-2 ",
                style: {
                  position: "relative",
                  top: "3px",
                  display: "inline-block",
                  "font-size": "1.21rem",
                },
              });
            }
            menu.l("button").prepend(im);
            if (e) {
              let badge = l.CE("span");

              badge.setattr({
                style: {
                  top: "3px",
                  padding: "4.5px",
                },
                class:
                  "position-absolute start-100 translate-middle bg-danger rounded-circle",
              });
              menu.l("button.border-start-0").append(badge);
            }
            if (fn == files.current) {
              menu.l("button").clsLst.rp("btn-outline-file", "btn-file");

              menu
                .l("button.border-start-0")
                .clsLst.rp("btn-outline-file", "btn-file");
            }
            l("#files").apCh(menu);
          });
        },
        optM: {},
        createPanel: () => {
          //look for the panel; if it doesnt exist, create one
          if (!l("#Fe2_Panel")) {
            let title;
            let body = l.CE("div");
            //for ONCHANGE EVENTS
            let prgms1 = {
              Editor: () => {},
              JSHINT: (event, trgt) => {
                let optns = {};
                console.log(event, trgt);
                Object.entries(event.obj).forEach((lve) => {
                  optns[lve[0]] = lve[1].selected
                    ? lve[1].selected
                    : lve[1].state
                    ? lve[1].min
                      ? lve[1].min
                      : lve[1].state
                    : lve[1].state;
                });

                F2Hint.config("JSHINT", optns);
              },
              Stylelint: () => {},
              Prettier: () => {},
              Terser: () => {},
            };
            let prgms = {
              //new programming needed here
              //need to fix bug when switching to html doc
              Editor: [],
              JSHINT: [
                () => {
                  let t = l.CE("h3");
                  t.apCh("Report");
                  return t;
                },
                {
                  title: "Cyclomatic Complexity",
                  type: "toggle",
                  id: "maxcomplexity",
                  state: true,
                  min: 20,
                },
                {
                  title: "Unused Variables",
                  type: "toggle",
                  id: "unused",
                  state: true,
                },
                {
                  title: "Undefined Variables",
                  type: "toggle",
                  id: "undef",
                  state: true,
                },
                () => {
                  let t = l.CE("h3");
                  t.apCh("Warn");
                  return t;
                },
                {
                  title: "About == Null",
                  type: "toggle",
                  id: "eqnull",
                  state: true,
                },
                {
                  title: "About Debugging Code",
                  type: "toggle",
                  id: "debug",
                  state: true,
                },
                {
                  title: "About Unsafe for..in",
                  type: "toggle",
                  id: "forin",
                  state: true,
                },
                {
                  title: "About Arguments .caller and .callee",
                  type: "toggle",
                  id: "noarg",
                  state: true,
                },
                {
                  title: "About assignments if/for/...",
                  type: "toggle",
                  id: "boss",
                  state: true,
                },
                {
                  title: "About functions inside loops",
                  type: "toggle",
                  id: "loopfunc",
                  state: true,
                },
                {
                  title: "About Eval",
                  type: "toggle",
                  id: "evil",
                  state: true,
                },
                {
                  title: "About unsafe line breaks",
                  type: "toggle",
                  id: "laxbreak",
                  state: true,
                },
                {
                  title: "About potential typos in logical operators",
                  type: "toggle",
                  id: "bitwise",
                  state: true,
                },
                {
                  title: "When code is not in strict mode",
                  type: "toggle",
                  id: "strict",
                  state: false,
                },
                {
                  title: "When new is used for side-effects",
                  type: "toggle",
                  id: "nonew",
                  state: true,
                },
                () => {
                  let t = l.CE("h3");
                  t.apCh("Assume");
                  return t;
                },
                {
                  title: "Browser",
                  type: "toggle",
                  id: "browser",
                  state: true,
                },
                {
                  title: "NodeJS",
                  type: "toggle",
                  id: "node",
                  state: false,
                },
                {
                  title: "jQuery",
                  type: "toggle",
                  id: "jquery",
                  state: false,
                },
                {
                  title: "Devlopment (Console,etc...)",
                  type: "toggle",
                  id: "devel",
                  state: true,
                },
                {
                  title: "Mozilla Javascript extensions",
                  type: "toggle",
                  id: "moz",
                  state: false,
                },
                {
                  title: "ESJS Version",
                  type: "select",
                  id: "esversion",
                  options: ["11", "10", "9", "8", "7", "6", "5", "3"],
                },
              ],
              Stylelint: [],
              Prettier: [],
              Terser: [],
            };

            body.apCh({
              div: [
                {
                  div: [
                    {
                      button: [
                        {
                          img: [],
                          src: "./icons/prettier.svg",
                          width: "30px",
                          height: "30px",
                          class: "me-2",
                        },
                        "Beautify",
                      ],
                      class: "col btn btn-light me-2",
                      on: {
                        click() {
                          self.beautify();
                        },
                      },
                    },
                    {
                      button: [
                        {
                          img: [],
                          src: "./icons/terser-icon.png",
                          width: "30px",
                          height: "30px",
                          class: "me-2",
                        },
                        "Minify",
                      ],
                      class: "col btn btn-light ms-2",
                      on: {
                        click() {
                          console.log("click..");
                        },
                      },
                    },
                  ],
                  class: "row",
                },
                {
                  div: [
                    bs.accordion(
                      [
                        [
                          "Options",
                          () => {
                            let prgmsr = [];
                            try {
                              for (let i in prgms) {
                                let prgmsrv = [];
                                prgmsrv.push(i);
                                this._p_.optM[i] = new Settmaker12(prgms[i]);
                                this._p_.optM[i].callback(prgms1[i]);
                                //initialize settings for that program
                                prgms1[i](this._p_.optM[i]);
                                prgmsrv.push(this._p_.optM[i].element);

                                prgmsr.push(prgmsrv);
                              }
                            } catch (e) {
                              console.log(e);
                            }

                            return bs.accordion(prgmsr, {
                              flush: true,
                              dark: true,
                            });
                          },
                        ],
                      ],
                      { dark: true }
                    ),
                  ],
                  class: "row",
                },
              ],
              class: "container-fluid text-center mb-3",
            });
            let body1;
            if (
              langd.cmdetect(this.files.current).toLowerCase() === "javascript"
            ) {
              //if Javascript
              title = "JSHINT";
              body1 = l.CE("div");
              body1.setattr({
                id: "panelbody",
              });
              let icon = l.CE("i");
              icon.setattr({
                class: "bi bi-exclamation-circle-fill me-2",
                style: {
                  color: "var(--bs-info)",
                },
              });
              let text = l.CE("h2");
              text.apCh(icon, "Info");
              let icon1 = l.CE("i");
              icon1.setattr({
                class: "bi bi-exclamation-triangle-fill me-2",
                style: {
                  color: "var(--bs-warning)",
                },
              });
              let text1 = l.CE("h2");
              text1.apCh(icon1, "Warnings");
              let icon2 = l.CE("i");
              icon2.setattr({
                class: "bi bi-exclamation-octagon-fill me-2",
                style: {
                  color: "var(--bs-danger)",
                },
              });
              let text2 = l.CE("h2");
              text2.apCh(icon2, "Errors");
              body1.apCh(
                bs.callout("info", [text], [""]), //will do later
                bs.callout("warning", [text1], ["No warnings detected."]),
                bs.callout("danger", [text2], ["No errors detected"])
              );
              //done.
            } else if (
              langd.cmdetect(this.files.current).toLowerCase() === "css"
            ) {
              //if CSS
              title = "Stylelint";
              body1 = l.CE("div");
              body1.setattr({
                id: "panelbody",
              });
              let text = l.CE("h2");
              let icon = l.CE("i");
              icon.setattr({
                class: "bi bi-exclamation-octagon-fill me-2",
                style: {
                  color: "var(--bs-danger)",
                },
              });

              text.apCh(icon, "Errors");
              let text1 = l.CE("h2");
              let icon1 = l.CE("i");
              icon1.setattr({
                class: "bi bi-exclamation-triangle-fill me-2",
                style: {
                  color: "var(--bs-warning)",
                },
              });

              text1.apCh(icon1, "Warnings");
              body1.apCh(
                bs.callout("warning", [text1], ["No warnings detected"]),
                bs.callout("danger", [text], ["No errors detected"])
              );
            } else if (
              langd.cmdetect(this.files.current).toLowerCase() === "markdown"
            ) {
              //if Markdown
              title = "Markdown viewer";
              body1 = l.CE("div");
              body1.setattr({
                id: "panelbody",
              });
              body1.apCh({
                div: [
                  {
                    div: [],
                    class: "p-2 rounded-3",
                    id: "markdownviewer",
                  },
                ],
                style: {
                  width: "100%",
                  height: "500px",
                  overflow: "scroll",
                  background: "white",
                  color: "black",
                  "border-radius": "10px",
                },
              });
            }
            if (body1) body.apCh(body1);
            self._p_.panel = bs.offcanvas(title, body, {
              dark: true,
              keyboard: false,
              pos: "end",
              backdrop: false,
              scroll: true,
            });
            self._p_.panel.setattr({
              id: "Fe2_Panel",
              style: {
                top: "calc(40px + 1rem)",
              },
            });
            self._p_.updatePanel();
            //button creation
            let button = l.CE("button");
            button.setattr({
              class: "btn btn-dark position-fixed top-50 panel-open",
              style: {
                right: "-4px",
              },
              on: {
                click() {
                  self._p_.panel.show(); //show panel
                },
              },
            });
            button.apCh(
              {
                i: [],
                class: "bi bi-chevron-left",
              },
              {
                div: [
                  /*framework for error/warning/info indicators*/
                ],
                class: "translate-middle",
              }
            );
            document.body.apCh(button);
          }
        },
        updatePanel: () => {
          function compile(mode) {
            //compile error objects into HTML lists
            let body = self._p_.panel.l("#panelbody");
            let eco, wco, mkdn;
            let warnlist = l.CE("div");
            warnlist.setattr({
              class: "list-group list-group-flush list-group-warn",
            });
            let danglist = l.CE("div");
            danglist.setattr({
              class: "list-group list-group-flush list-group-err",
            });

            function createtip(tip) {
              let tipv = l.CE("div");
              tipv.setattr({
                class: "indicator",
              });
              tipv.apCh(tip);
              return tipv;
            }
            let btnt = self._p_.panel.l("button.btn.ms-2");
            btnt.disabled = true;
            if (mode === "javascript") {
              l("#Fe2_Panel").l(".offcanvas-title").innerHTML = "JSHINT";
              //check if panel does not have elements to support function
              if (!body.l(".callout.callout-warning")) {
                body.inHTML = "";
                let body1;
                body1 = l.CE("div");
                body1.setattr({
                  id: "panelbody",
                });
                let icon = l.CE("i");
                icon.setattr({
                  class: "bi bi-exclamation-circle-fill me-2",
                  style: {
                    color: "var(--bs-info)",
                  },
                });
                let text = l.CE("h2");
                text.apCh(icon, "Info");
                let icon1 = l.CE("i");
                icon1.setattr({
                  class: "bi bi-exclamation-triangle-fill me-2",
                  style: {
                    color: "var(--bs-warning)",
                  },
                });
                let text1 = l.CE("h2");
                text1.apCh(icon1, "Warnings");
                let icon2 = l.CE("i");
                icon2.setattr({
                  class: "bi bi-exclamation-octagon-fill me-2",
                  style: {
                    color: "var(--bs-danger)",
                  },
                });
                let text2 = l.CE("h2");
                text2.apCh(icon2, "Errors");
                body1.apCh(
                  bs.callout("info", [text], [""]), //will do later
                  bs.callout("warning", [text1], ["No warnings detected."]),
                  bs.callout("danger", [text2], ["No errors detected"])
                );
                //console.log(body1)
                body.apCh(body1);
              }
              eco = body.l(".callout.callout-danger");
              wco = body.l(".callout.callout-warning");
              btnt.disabled = false;
              //console.log(JSHINT.errors)
              if (JSHINT.errors && JSHINT.errors.length > 0) {
                JSHINT.errors.sort((a, b) => {
                  return a.line - b.line;
                });
                JSHINT.errors.forEach((error) => {
                  //populating lists
                  let item;
                  //console.log(error)
                  item = l.CE("div");
                  item.setattr({
                    class: "list-group-item",
                    style: {
                      color: "white",
                    },
                  });
                  item.apCh(
                    {
                      span: [createtip(`line ${error.line}`)],
                      style: {
                        display: "inline-block",
                        "margin-left": "2px",
                      },
                    },
                    " ",
                    error.reason,
                    "  ",
                    `(${error.code})`
                  );
                  item.setattr({
                    on: {
                      click: () => {
                        Fe2.editor.gotoLine(error.line);
                      },
                    },
                  });
                  //console.log(error)
                  if (error.code.startsWith("W")) {
                    warnlist.apCh(item);
                  } else {
                    danglist.apCh(item);
                  }

                  //console.log()
                });
                if (danglist.children.length == 0)
                  danglist.apCh("No Errors Detected.");
                if (warnlist.children.length == 0)
                  warnlist.apCh("No Warnings Detected.");
                eco.l(".callout-body").innerHTML = "";
                wco.l(".callout-body").innerHTML = "";
                eco.l(".callout-body").apCh(danglist);
                wco.l(".callout-body").apCh(warnlist);
              } else {
                eco.l(".callout-body").innerHTML = "";
                wco.l(".callout-body").innerHTML = "";
                eco.l(".callout-body").apCh("No Errors Detected.");
                wco.l(".callout-body").apCh("No Warnings Detected.");
              }
            } else if (mode === "css") {
              l("#Fe2_Panel").l(".offcanvas-title").innerHTML = "stylelint";
              if (!body.l(".callout.callout-warning")) {
                body.inHTML = "";
                let body1;
                body1 = l.CE("div");
                body1.setattr({
                  id: "panelbody",
                });
                let text = l.CE("h2");
                text.apCh("Errors");
                let icon = l.CE("i");
                icon.setattr({
                  class: "bi bi-exclamation-octagon-fill",
                  style: {
                    color: "var(--bs-danger)",
                  },
                });
                let text1 = l.CE("h2");
                text1.apCh("Warnings");
                let icon1 = l.CE("i");
                icon1.setattr({
                  class: "bi bi-exclamation-triangle-fill",
                  style: {
                    color: "var(--bs-warning)",
                  },
                });
                body1.apCh(
                  bs.callout(
                    "warning",
                    [icon1, text1],
                    ["No warnings detected"]
                  ),
                  bs.callout("danger", [icon, text], ["No errors detected"])
                );
                body.apCH(body1);
              }
              eco = body.l(".callout.callout-danger");
              wco = body.l(".callout.callout-warning");
              //wait for Stylelint to callback with a value b/c of its promise state
              setTimeout(() => {
                stylelint.errors.forEach((error) => {
                  let item;
                  item = l.CE("div");
                  item.setattr({
                    class: "list-group-item",
                  });
                  item.apCh(createtip(`At ${error.line}`), error.message, " ", {
                    small: ["(" + error.rule + ")"],
                  });
                  if (error.severity === "warning") {
                    warnlist.apCh(item);
                  } else {
                    //filter unsupported errors
                    danglist.apCh(item);
                  }
                });
                eco.l(".callout-body").innerHTML = "";
                eco.l(".callout-body").apCh(danglist);
                wco.l(".callout-body").innerHTML = "";
                wco.l(".callout-body").apCh(warnlist);
              }, 500);
            } else if (mode === "markdown") {
              l("#Fe2_Panel").l(".offcanvas-title").innerHTML = "Markdown";
              //console.log(body)
              //console.log(mode);
              if (body) {
                if (!body.l("#markdownviewer")) {
                  body.inHTML = "";
                  let body1;
                  body1 = l.CE("div");
                  body1.setattr({
                    id: "panelbody",
                  });
                  body1.apCh({
                    div: [
                      {
                        div: [],
                        class: "p-2 rounded-3",
                        id: "markdownviewer",
                      },
                    ],
                    style: {
                      width: "100%",
                      height: "500px",
                      overflow: "scroll",
                      background: "white",
                      color: "black",
                      "border-radius": "10px",
                    },
                  });
                  body.apCh(body1);
                }
                mkdn = body.l("#markdownviewer");
                //console.log(yes)
                mkdn.innerHTML =
                  /*returns HTMLTEXT but not ELEMENT OBJECT */
                  self.mdp(self.editor.getvalue());
              } else {
              }
            }
            //console.log(mode)
          }
          //console.log(
          //    langd.cmdetect(this.files.current).toLowerCase()
          //);
          compile(self.editor.modename.toLowerCase());
        },
        removePanel: () => {
          if (self._p_.panel) {
            self._p_.panel.remove();
            self._p_.panel = {};
            self._p_.panel.show = () => {
              console.warn("not available");
            };

            self._p_.panel.hide = () => {
              console.warn("not available");
            };
          }
        },
      };
      //generating code for newfile button...
      l("#newf").setattr({
        on: {
          click: () => {
            let addmodal = bs.modal(
              "New File",
              () => {
                let form = l.CE("div");
                form.setattr({
                  class: "form-floating",
                });
                form.apCh(
                  {
                    input: [],
                    type: "text",
                    class: "form-control font-monospace",
                    placeholder: "I.E. Smile.js",
                    style: {
                      background: "var(--bs-dark)",
                      "border-color": "var(--bs-border-color-translucent)",
                      color: "var(--bs-white)",
                    },
                    on: {
                      keydown(event) {
                        if (event.keyCode === 13) {
                          //Enter key
                          let vrl = addmodal.l("input").value;
                          if (vrl != "") {
                            l("#submit").click();
                          }
                        }
                      },
                    },
                  },
                  {
                    label: ["File name"],
                    class: "font-monospace",
                  }
                );
                return form;
              },
              [
                {
                  button: ["Cancel"],
                  class: "btn btn-secondary",
                  "data-bs-dismiss": "modal",
                },
                {
                  button: ["Create"],
                  class: "btn btn-primary",
                  "data-bs-dismiss": "modal",
                  on: {
                    click: () => {
                      let vrl = addmodal.l("input").value;
                      if (vrl != "") {
                        self.files.create(vrl, "", false, true);
                      }
                    },
                  },
                  id: "submit",
                },
              ]
            );
            addmodal.setattr({
              on: {
                "hidden.bs.modal": () => {
                  addmodal.dispose();
                  addmodal.remove();
                },
              },
            });
            l("body").apCh(addmodal);
            addmodal.show();
          },
        },
      });
      self.files = files;
      self._p_ = _p_;
      self.fh = fh;
      let startfile = [
        "## Welcome",
        "this is **fileEditor 2**, an improved and more innovative sequel to [*fileEditor*](https://fileEditor.extravagantboost.repl.co),",
        "in this version of *fileEditor*, some notable changes have ensued after the original make.",
        "",
        "",
        "### changes…",
        "1. Updated old codemirror version from [![](https://img.shields.io/badge/Codemirror%205-gray?logo=codemirror)](https://codemirror.net/5/) to [6](https://codemirror.net) to further support ES6 syntax, so was fileEditor2’s code when doing many actions.",
        "2. new protocols placed to prevent errors when creating another file with the same name. for example the filename: ```smile.js``` already exists, when the user tries to create another file with the same name where ```smile.js``` subsequently becomes ```smile1.js```, rather than creating an internal error when doing so in fileEditor.",
        "3. many changes to the editor due to the upgrade to [![](https://img.shields.io/badge/Codemirror%206-gray?logo=codemirror)](https://codemirror.net)",
        "4. FileEditor 2 will be accompanied with many more things to help the user to have an easier experience while coding",
        "",
        "### Modules",
        "- an upgrade from [![js-beautify](https://img.shields.io/badge/Js--beautify-gray?logo=github)](https://github.com/beautify-web/js-beautify) to [![prettier](https://img.shields.io/badge/Prettier-gray?logo=github4)](https://github.com/prettier/prettier) a more smarter beautifier engine.",
        "- FileEditor is still going to be sticking to [![Jshint](https://img.shields.io/badge/Jshint-gray?logo=github)](https://github.com/jshint/jshint) because its a good linter, but soon FileEditor2 is going to move away from that.",
        "- [commonmark](https://commonmark.org) otherwise known as MarkDown, is now going to be used, so that users can now see what their markdown file is going to look like when they code in markdown ",
      ];
      if (WS.has("Fe2.visited") == true) {
        //parse info here
        if (!WS.has("Fe2.files")) {
          files.create("README.md", startfile.join("\n"), false, true);
          WS.send("Fe2.files", AC3123);
        } else {
          let recall = {
            files: WS.getI("Fe2.files"),
            current: WS.has("Fe2.currentfile")
              ? WS.getI("Fe2.currentfile")
              : false,
          };

          for (let ve in recall.files) {
            let selected = () => {
              if (recall.current != false) {
                //select file from WebStorage
                return ve === recall.current;
              } else {
                //select first file
                return Object.keys(recall.files)[0] === ve;
              }
            };
            let file = recall.files[ve];
            console.log(file);
            files.create(ve, file.content, false, selected());
            //manipulate file object
            let vv = files.get(ve);
            console.log(vv);
            console.log(file.scroll,vv.scroll);
            vv.scroll.top = file.scroll.top;
            vv.scroll.left = file.scroll.left;
            //ve.history = file.history;
            //ve.cursor = file.cursor;
          }
        }
      } else {
        WS.send("Fe2.visited", true);
        files.create("README.md", startfile.join("\n"), false, true);
      }
      const { EditorView, basicSetup } = require("codemirror");
      const { thme } = require("@Fe2/theme");
      const { insertTab } = require("@codemirror/commands");
      //const {StateField, StateEffect} = require("@codemirror/state");
      const {
        search,
        setSearchQuery,
        SearchQuery,
        findNext,
        findPrevious,
        selectMatches,
        replaceNext,
        closeSearchPanel,
        replaceAll,
      } = require("@codemirror/search");
      const { keymap, runScopeHandlers } = require("@codemirror/view");
      const { checkboxPlugin } = require("@Fe2/tooltip");
      const { ILC } = require("@Fe2/LC");
      const { F2Hint } = require("@Fe2/hintr");
      const { indentationMarkers } = require("@replit/indent-markers");
      const { color } = require("@uiw/color-extension");
      const { detectMime } = require("@Fe2/mime");
      const {
        getFile,
        writeTo,
        regularlyUpdate,
        checkPerms,
      } = require("@Fe2/FS");
      const { Settmaker12 } = require("@Fe2/SM");
      const terserify = async (code, opts) => {
        let codeout = await Terser.minify(code, opts);
        return codeout;
      };
      Object.defineProperties(terserify, {
        defaultopts: {
          value: Terser._default_options,
        },
        run_cli: {
          value: () => {
            console.warn("this function is not available in browser env");
          },
        },
      });
      const beautify = async (resolve, reject) => {
        const { parserBabel } = require("@prettier/parserBabel");
        try {
          self.editor.setvalue(
            prettier.format(self.editor.getvalue(), {
              filepath: `<Native File>/${self.files.current}`,
              plugins: [parserBabel],
            })
          );
          self._p_.notify(`Yay, you've beautified ${self.files.current}!`);
          /*resolve(prettier.format(self.editor.getvalue(),{
          filepath:`<Native File>/${self.files.current}`,
          plugins:[parserBabel]
        }));*/
        } catch (e) {
          reject(e);
          self._p_.notify("Failed to beautify current file...");
        }
      };
      self.beautify = beautify;
      self.terserify = terserify;
      let modifier = EditorView.theme({
        "&": {
          height: "100%",
        },
        "&.cm-editor.cm-focused": {
          outline: "none",
        },
        "span[data-color]": {
          outline: 0,
          borderRadius: `.25em`,
          boxShadow: "0px 0px 0px 1px rgba(255,255,255,0.172)",
        },
        ".cm-panels.cm-panels-top": {
          background: "transparent",
          paddingTop: "5px",
          paddingLeft: "190px",
          paddingRight: "190px",
        },
        ".cm-lintRange.cm-lintrange-warning": {
          background: "blue",
        },
      });
      /*let head = l("head");
      let stle = l.CE("style");
      stle.apCh(
        `
        .cm-panel.cm-search {
          
        }
        `
      );
      head.apCh(stle);*/
      function handle(
        key,
        run = function () {
          return true;
        },
        shift = false
      ) {
        if (!key) throw new SyntaxError("key is left undefined");
        if (typeof key != "string")
          throw new TypeError("key must be string, not " + typeof key);
        return keymap.of({
          key,
          run,
        });
      }
      let vvv = (() => {
        const { EditorState } = require("@codemirror/state");
        return EditorState.transactionExtender.of((tr) => {
          if (tr.docChanged) {
            files.update(files.current, tr.newDoc.toString());

            WS.send("Fe2.files", AC3123);
          }

          return {};
        });
      })();
      class mySearchPanel {
        constructor(view) {
          try {
            this.view = view;
            let msearchState = self.sear[1][0];
            let query = (this.query =
              view.state.field(msearchState).query.spec);
            console.log(query);
            this.commit = this.commit.bind(this);
            this.searchField = l.CE("input");
            this.searchField.setattr({
              value: query.search,
              placeholder: "Search...",
              "aria-label": "Search...",
              class: "form-control font-monospace",
              name: "search",
              "main-field": "true",
              on: {
                change: this.commit,
                keyup: this.commit,
              },
            });
            this.replaceField = l.CE("input");
            this.replaceField.setattr({
              value: query.replace,
              placeholder: "replace with...",
              "aria-label": "replace with..",
              class: "form-control font-monospace",
              name: "replace",
              "main-field": "true",
              on: {
                change: this.commit,
                keyup: this.commit,
              },
            });
            this.caseField = l.CE("input");
            this.caseField.setattr({
              class: "form-check-input",
              type: "checkbox",
              name: "case",
              on: {
                change: this.commit,
              },
            });
            this.caseField.checked = query.caseSensitive;
            this.reField = l.CE("input");
            this.reField.setattr({
              class: "form-check-input",
              type: "checkbox",
              name: "re",
              on: {
                change: this.commit,
              },
            });
            this.reField.checked = query.regexp;
            this.wordField = l.CE("input");
            this.wordField.setattr({
              class: "form-check-input",
              type: "checkbox",
              name: "word",
              on: {
                change: this.commit,
              },
            });
            this.wordField.checked = query.wholeWord;
            this.dom = l.CE("div");
            this.dom.apCh({
              div: [
                {
                  div: [
                    {
                      div: [
                        {
                          div: [this.searchField],
                          class: "col-5",
                        },
                        {
                          div: [
                            {
                              button: [
                                {
                                  i: [],
                                  class: "bi bi-chevron-left",
                                },
                              ],
                              role: "button",
                              class: "btn w-100 btn-block btn-file",
                              "aria-label": "previous",
                              on: {
                                click: () => {
                                  findPrevious(view);
                                },
                              },
                            },
                          ],
                          class: "col-2",
                        },
                        {
                          div: [
                            {
                              button: [
                                {
                                  i: [],
                                  class: "bi bi-chevron-right",
                                },
                              ],
                              role: "button",
                              class: "btn btn-file btn-block w-100",
                              on: {
                                click: () => {
                                  findNext(view);
                                },
                              },
                            },
                          ],
                          class: "col-2",
                        },
                        {
                          div: [
                            {
                              div: [
                                this.reField,
                                {
                                  label: ["Regexp"],
                                },
                              ],
                              class: "form-switch",
                            },
                          ],
                          class: "col p-1",
                        },
                        {
                          div: [
                            {
                              button: [],
                              class: "collapsed",
                              "data-bs-toggle": "collapse",
                              "data-bs-target": "#searchCollapse",
                              "aria-expanded": "false",
                              "aria-controls": "searchCollapse",
                            },
                          ],
                          class: "col-1 p-2 clpsebtn",
                        },
                      ],
                      class: "row",
                    },
                    {
                      button: [],
                      name: "close",
                      on: {
                        click: () => closeSearchPanel(view),
                      },
                      "aria-label": "close",
                      type: "button",
                      class: "btn-close btn-close-white",
                    },
                    {
                      div: [
                        {
                          div: [
                            {
                              div: [
                                {
                                  div: [this.replaceField],
                                  class: "col-6",
                                },
                                {
                                  div: [
                                    {
                                      button: ["replace"],
                                      class: "btn btn-secondary",
                                      on: {
                                        click: () => replaceNext(view),
                                      },
                                    },
                                  ],
                                  class: "col-2",
                                },
                                {
                                  div: [
                                    {
                                      button: ["replace all"],
                                      class: "btn btn-secondary",
                                      on: {
                                        click: () => replaceAll(view),
                                      },
                                    },
                                  ],
                                  class: "col-3",
                                },
                              ],
                              class: "row",
                            },
                          ],
                          class: "container mt-2",
                        },
                      ],
                      class: "collapse collapsed",
                      id: "searchCollapse",
                    },
                  ],
                  class: "cm-mysearch",
                },
              ],
              class: "cm-search",
              on: {
                keydown: (e) => this.keydown(e),
              },
            });
            this.dom = this.dom.l("div");
          } catch (e) {
            console.log(e);
          }
        }
        commit() {
          try {
            let query = new SearchQuery({
              search: this.searchField.value,
              caseSensitive: true,
              regexp: this.reField.checked,
              wholeWord: false,
              replace: this.replaceField.value,
            });
            if (!query.eq(this.query)) {
              this.query = query;
              this.view.dispatch({ effects: setSearchQuery.of(query) });
            }
          } catch (e) {
            console.log(e);
          }
        }
        keydown(e) {
          if (runScopeHandlers(this.view, e, "search-panel")) {
            e.preventDefault();
          } else if (e.keyCode == 13 && e.target == this.searchField) {
            e.preventDefault();
            (e.shiftKey ? findPrevious : findNext)(this.view);
          } else if (e.keyCode == 13 && e.target == this.replaceField) {
            e.preventDefault();
            replaceNext(this.view);
          }
        }
        update(update) {
          for (
            let _i199 = 0,
              _update$transactions = update.transactions,
              _length199 = _update$transactions.length;
            _i199 < _length199;
            _i199++
          ) {
            let tr = _update$transactions[_i199];
            for (
              let _i200 = 0,
                _tr$effects9 = tr.effects,
                _length200 = _tr$effects9.length;
              _i200 < _length200;
              _i200++
            ) {
              let effect = _tr$effects9[_i200];
              if (effect.is(setSearchQuery) && !effect.value.eq(this.query))
                this.setQuery(effect.value);
            }
          }
        }
        setQuery(query) {
          this.query = query;
          this.searchField.value = query.search;
          this.replaceField.value = query.replace;
          this.caseField.checked = query.caseSensitive;
          this.reField.checked = query.regexp;
          this.wordField.checked = query.wholeWord;
        }
        mount() {
          this.searchField.select();
        }
        get pos() {
          return 80;
        }
        get top() {
          let searchConfigFacet = self.sear[0].facet;
          return this.view.state.facet(searchConfigFacet).top;
        }
      }
      self.sear = search({ top: true });
      self.sear[0].value.createPanel = (view) => {
        try {
          return new mySearchPanel(view);
        } catch (e) {
          console.log(e);
        }
      };
      self.msp = mySearchPanel;
      self.editor = new EditorView({
        extensions: [
          modifier,
          color,
          basicSetup,
          indentationMarkers(),
          thme,
          handle("Tab", insertTab),
          checkboxPlugin,
          self.sear,
          vvv,
          F2Hint,
        ],
        doc: files.get(files.current).content,
        parent: l("#codemirror6v"),
      });
      let renderMessage = function () {
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
        try {
          let d = this;
          let icon = "bi bi-exclamation-octagon-fill";
          if (d.severity == "warning") icon = "bi bi-exclamation-triangle-fill";
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

      /*------LINTERS-------*/
      F2Hint.registerLinter({
        name: "JSHINT",
        lintFunc: JSHINT,
        Pargs: "I,O",
        args: [
          (viw) => {
            return viw.modename == "JavaScript";
          },
        ],
        Wprocessor: (view, lntrs, errors) => {
          let diag = [];
          errors.forEach((err) => {
            if (err) {
              let start, end, from, to;
              let capture = view.state.doc.line(err.line);
              start = capture.from + (err.character - 1);
              let vm = 1;
              if (typeof err.a == typeof "") vm = err.a.length;
              else if (err.code == "W033") vm = 0;
              else if (err.evidence)
                vm = err.evidence.replace(/^\s+/gm, "").length;
              end = start + vm;
              if (err.code == "E041") end = view.state.doc.length - 10;

              from = start;
              to = end;
              let message = err.reason;
              let markclass = "dangbg";
              let severity = "error";
              if (err.code.startsWith("W", 0)) {
                severity = "warning";
                markclass = "warnbg";
              } else if (err.code == "E001") {
                severity = "info";
                markclass = "infbg";
              }
              if (err.evidence) {
                let index = err.evidence.substring(start).search(/.\b/);
                if (index > -1) {
                  end += index;
                }
              }
              let source = lntrs.name;
              let hint = {
                message,
                severity,
                source,
                markclass,
                renderMessage,
                from,
                to,
              };
              diag.push(hint);
            }
          });
          return diag;
        },
        postProcessor: () => {
          Fe2._p_.updatePanel();
        },
        defopt: {},
      });

      /*-----END OF LINTERS-----*/
      ILC(self.editor);
      self.editor.setmode(files.current);
      self.mdp = (input, config) => {
        let reader = new commonmark.Parser();
        let writer = new commonmark.HtmlRenderer();
        let parsed = reader.parse(input === undefined ? "" : String(input)); // parsed is a 'Node' tree
        // transform parsed if you like...
        let result = writer.render(parsed); // result is a String
        return result;
      };
      self._p_.createPanel();
      self.editor.state.values[0].done = self.files.get(self.files.current).history.done;
      self.editor.state.values[0].undone = self.files.get(self.files.current).history.undone;
      self.editor.scrollDOM.scrollTop = self.files.get(self.files.current).scroll.top;
      self.editor.scrollDOM.scrollLeft = self.files.get(self.files.current).scroll.left;

      /*    alert(window.location.href)
       if (!window.location.href.toLowerCase().includes("fileeditor2")) {
        setTimeout(() => l(".cs-page-loading").classList.remove("active"),300)
        }*/
      //check url if user is using TEST ENV ONLY
      if (
        window.location.href.includes(".preview.app") ||
        window.location.href.includes("file://")
      ) {
        let v1c = l(".cs-page-loading-inner").l("span");
        let titles = [
          "Secretly getting your IP address...",
          "Installing virus infested virus blocker...",
          "Texting your mother...",
          "Texting your father...",
          "Looking through your secret folder that you keep hidden on your computer...",
          "Logging into your Github account...",
          "Doing some pretty shifty things... 👀",
          "You cant spell NUTRITION without NUT!",
        ];
        v1c.inHTML = "";
        v1c.apCh(titles[Math.floor(Math.random() * titles.length)]);
        setTimeout(
          () => {l(".cs-page-loading").classList.remove("active");

                },
          1500
        );
        l("body").apCh({
          div: [
            {
              div: [
                {
                  h1: [
                    {
                      i: [],
                      class: "drag-overlay-icon bi bi-download",
                    },
                  ],
                },
                "Release to allow access to this file...",
              ],
              class: "drag-overlay-inner",
            },
            {
              input: [],
              type: "file",
              style: {
                width: "100%",
                height: "1000px",
                opacity: 0,
                "z-index": 9999999999,
                position: "fixed",
                top: 0,
                left: 0,
              },
              on: {
                drop: (e) => {
                  try {
                    e.stopPropagation();
                    e.preventDefault();
                    var FR = new FileReader();
                    let file = e.dataTransfer.files[0];
                    let fileName = e.dataTransfer.files[0].name;
                    FR.onload = (ev) => {
                      try {
                        let contents = ev.target.result;
                        let fileManifest = {
                          fileName,
                          contents,
                          mime: detectMime(fileName),
                          fileObject:
                            file ||
                            new Blob([fileName], {
                              type: `${
                                detectMime(fileName) || "text/plain"
                              };charset=utf-8`,
                            }) /*fallback when event fileObject times out*/,
                        };
                        console.log(fileManifest);
                        /*check if file exists*/
                        if (self.files.get(fileName)) {
                          let overwrite = bs.modal(
                            "WARNING!!",
                            `Would you like to rewrite ${fileManifest.fileName}?`,
                            [
                              {
                                button: ["cancel"],
                                class: "btn btn-secondary",
                                "data-bs-dismiss": "modal",
                              },
                              {
                                button: ["Overwrite"],
                                class: "btn btn-danger",
                                "data-bs-dismiss": "modal",
                                on: {
                                  click: () => {
                                    self.files.update(
                                      fileManifest.fileName,
                                      fileManifest.contents,
                                      false
                                    );
                                  },
                                },
                              },
                              {
                                button: ["No, create new file."],
                                class: "btn btn-info",
                                "data-bs-dismiss": "modal",
                                on: {
                                  click: () => {
                                    self.files.create(
                                      fileManifest.fileName,
                                      fileManifest.contents,
                                      fileManifest,
                                      true
                                    );

                                    WS.send("Fe2.files", AC3123);
                                  },
                                },
                              },
                            ]
                          );
                          //console.log(deletionmodal)
                          overwrite.setattr({
                            on: {
                              "hidden.bs.modal": () => {
                                overwrite.dispose();
                                overwrite.remove();
                              },
                            },
                          });
                          l("body").apCh(overwrite);
                          overwrite.show();
                        } else {
                          self.files.create(
                            fileManifest.fileName,
                            fileManifest.contents,
                            fileManifest,
                            false
                          );

                          WS.send("Fe2.files", AC3123);
                        }
                      } catch (eva) {
                        console.log(eva.stack);
                      }
                    };
                    FR.readAsText(e.dataTransfer.files[0]);

                    l(".drag-overlay").setattr({
                      class: "drag-overlay",
                    });
                  } catch (ev) {
                    console.log(ev);
                  }
                },
                dragleave: [
                  (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    l(".drag-overlay").setattr({
                      class: "drag-overlay",
                    });
                  },
                  false,
                ],
              },
            },
          ],
          class: "drag-overlay",
        });
        l("body").setattr({
          on: {
            dragenter: [
              (e) => {
                e.preventDefault();
                e.stopPropagation();
                l(".drag-overlay").setattr({
                  class: "drag-overlay active",
                });
              },
              false,
            ],

            dragover: [
              (e) => {
                e.preventDefault();
                e.stopPropagation();
                l(".drag-overlay").setattr({
                  class: "drag-overlay active",
                });
              },
              false,
            ],
          },
        });
      }
    } catch (e) {
      console.log(e);
    }
  }
})();

// TEST
/*const { parserBabel } = require("@prettier/parserBabel")
console.log(prettier.format("function va() {console.log('hi')}",{
    parser:"babel",
    plugins:[parserBabel]
}))*/
