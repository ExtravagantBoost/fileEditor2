/*global l,bootstrap*/
let main = l("body");
let presetelements = {
    dropdown: (btn1, actions) => {
        let ret = l.CE("div");
        let v = null;
        ret.setattr({
            class: ["btn-group", "col", "col-auto", "me-1", "ms-1"],
            style: {
                display: "inline-block",
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
                        let fi = ret.l("button").childNodes[1].wholeText;
                        if (!(Fe2.files.current === fi)) {
                            Fe2.files.current = fi;
                        } else {
                            //console.log('already selected ')
                        }
                    },
                },
            },
            {
                button: [
                    {
                        span: ["Toggle Drop"],
                        class: ["visually-hidden"],
                    },
                ],
                type: "button",
                class: [
                    "btn",
                    "btn-outline-file",
                    "dropdown-toggle",
                    "dropdown-toggle-split",
                    "border-start-0",
                ],
                "data-bs-toggle": "dropdown",
                "aria-expanded": false,
            },
            {
                ul: actions || [] /*as html object*/,
                class: ["dropdown-menu", "dropdown-menu-dark"],
            }
        );
        Object.defineProperty(ret, "tooltip", {
            value: new bootstrap.Tooltip(ret.l(".border-end-0"), {
                delay: { show: 500, hide: 100 },
                container: "body",
            }),
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
    if (!(diff + "px" == l("#codemirror6v").style.height)) {
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
            style:{
                top:"calc(40px + 1rem)"
    }
           
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
        const { WS } = require("@Fe2/WS");
        WS.setmode("local")//set WebStorage API to store locally so that the user does not loose their data

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
                if (name === undefined)
                    throw aerr("cannot add file without a name!");
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
                    history:{done:[],undone:[]}
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
                if (!(name in AC3123))
                    throw ierr("file, somehow does not exist");
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
                self.files.add(va);
                self.files.update(va, content, false);

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
                    throw ierr(
                        "tried to set current file to nonexistent file!"
                    );
                currf12 = v;
                fh.splice(0, 0, v);
                if (self.editor) {
                    //save scroll & cursor position value to previous file,
                    self.files.get(fh[1]).scroll.top = self.editor.scrollDOM.scrollTop
                    self.files.get(fh[1]).scroll.left = self.editor.scrollDOM.scrollLeft;
                    self.files.get(fh[1]).cursor.pos = self.editor.state.selection.main.head;
                    // get file editor history
                    self.files.get(fh[1]).history.done = self.editor.state.values[0].done;
                    self.files.get(fh[1]).history.undone = self.editor.state.values[0].undone;
                    //then set contents to current file and update scroll pos
                    self.editor.setvalue(self.files.get(v).content);
                    self.editor.setmode(self.files.current);
                    //manipulate file editor history by changing the state
                    self.editor.state.values[0].done = self.files.get(v).history.done;
                    self.editor.state.values[0].undone = self.files.get(v).history.undone;
                    self.editor.scrollDOM.scrollTop = self.files.get(v).scroll.top;
                    self.editor.scrollDOM.scrollLeft = self.files.get(v).scroll.left;
                    self.editor.focus()
                    self.editor.setCursor(self.files.get(v).cursor.pos)
                    WS.send("Fe2.currentfile", self.files.current)
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
                                    a: [
                                        d.localfile == false
                                            ? "download"
                                            : "save",
                                    ],
                                    class: "dropdown-item",
                                    style: {
                                        "--bs-dropdown-link-hover-bg":
                                            "rgba(var(--bs-primary-rgb),0.7)",
                                        transition: "background 0.25s",
                                    },
                                    on: {
                                        click: (event) => {
                                            console.log(cache);
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
                                        click: (event) => {
                                            if (files._().length > 1) {
                                                let deletionmodal = bs.modal(
                                                    "WARNING!!",
                                                    `Are you sure you want to delete '${cache[0]}'?`,
                                                    [
                                                        {
                                                            button: ["cancel"],
                                                            class: "btn btn-secondary",
                                                            "data-bs-dismiss":
                                                                "modal",
                                                        },
                                                        {
                                                            button: ["DELETE"],
                                                            class: "btn btn-danger",
                                                            "data-bs-dismiss":
                                                                "modal",
                                                            on: {
                                                                click: () => {
                                                                    console.log(
                                                                        "Deleting..."
                                                                    );

                                                                    files.del(
                                                                        cache[0]
                                                                    );
                                                                },
                                                            },
                                                        },
                                                    ]
                                                );

                                                //console.log(deletionmodal)
                                                deletionmodal.setattr({
                                                    on: {
                                                        "hidden.bs.modal":
                                                            () => {
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
                    let im = l.CE("i");
                    let iconcls = langd.detect(fn);
                    if (iconcls) {
                        im.setattr({
                            class: iconcls + " me-2 ",
                            style: {
                                position: "relative",
                                top: "3px",
                                "font-size": "1.21rem",
                            },
                        });
                    }
                    menu.l("button").prepend(im);
                    if (e) {
                        let badge = l.CE("span");

                        badge.setattr({
                            style: { top: "3px", padding: "4.5px" },
                            class: "position-absolute start-100 translate-middle bg-danger rounded-circle",
                        });
                        menu.l("button.border-start-0").append(badge);
                    }
                    if (fn == files.current) {
                        menu.l("button").clsLst.rp(
                            "btn-outline-file",
                            "btn-file"
                        );

                        menu.l("button.border-start-0").clsLst.rp(
                            "btn-outline-file",
                            "btn-file"
                        );
                    }
                    l("#files").apCh(menu);
                });
            },
            createPanel: () => {
                //look for the panel; if it doesnt exist, create one
                if (!l('#Fe2_Panel')) {
                    let title;
                    let body;
                    if (langd.cmdetect(this.files.current).toLowerCase()==="javascript") {
                        //if Javascript
                        title = "JSHINT";
                        body = l.CE('div');
                        body.setattr({
                            id:"panelbody"
                        })
                        let icon = l.CE("i");
                        icon.setattr({
                            class:"bi bi-exclamation-circle"
                        });
                        let text = l.CE("h2");
                        text.apCh("Info")
                        let icon1 = l.CE('i');
                        icon1.setattr({
                            class:"bi bi-exclamation-triangle"
                        })
                        let text1 = l.CE("h2");
                        text1.apCh("Warnings")
                        let icon2 = l.CE('i');
                        icon2.setattr({
                            class:"bi bi-exclamation-octagon"
                        })
                        let text2 = l.CE("h2");
                        text2.apCh("Errors")
                        body.apCh(
                            bs.callout("info",[icon.text],[""]),//will do later
                                bs.callout("warning",[icon1,text],["No warnings detected."]),
                                bs.callout("danger",[icon2,text2],["No errors detected"])
                        );
                        //done.
                   } else if (langd.cmdetect(this.files.current).toLowerCase()==="css") {
                        //if CSS
                        title = "Stylelint";
                        body = l.CE('div');
                        body.setattr({
                            id:"panelbody"
                        });
                        let text = l.CE("h2");
                        text.apCh("Errors");
                        let icon = l.CE("i");
                        icon.setattr({
                            class:"bi bi-exclamation-circle"
                        });
                        body.apCh(
                            bs.callout("danger",[icon,text],["No errors detected"])
                        );
                    } else if (langd.cmdetect(this.files.current).toLowerCase()==="markdown") {
                        //if Markdown
                        title = "Markdown viewer";
                        body = l.CE('div');
                    } else return null;
                    this.panel = bs.offcanvas(title,body);
                    this.updatePanel();
               }
            },
            updatePanel: () => {
                function compile(errors) {
                    //compile error objects into HTML lists
                    let body = this.panel.l("#panelbody");
                    let eco = body.l(".callout.callout-danger");
                    let wco = body.l(".callout.callout-warning");
                    if (eco || wco) {
                        let o = l.CE('div');
                        errors.forEach(()=>{
                        
                            //parse errors
                        
                        });
                    }
                }
            },
            removePanel: () => {
                if (this.panel) {
                    this.panel.remove();
                    this.panel = undefined;
                }
            }
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
                                        "border-color":
                                            "var(--bs-border-color-translucent)",
                                        color: "var(--bs-white)",
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
                                            self.files.create(
                                                vrl,
                                                "",
                                                false,
                                                true
                                            );
                                        }
                                    },
                                },
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
                let recall = { files: WS.getI("Fe2.files"), current: (WS.has("Fe2.currentfile") ? WS.getI("Fe2.currentfile") : false) }
               
                for (let ve in recall.files) {
                    let selected = () => {
                        if (recall.current != false) {
                            //select file from WebStorage
                            return ve === recall.current
                        } else {
                            //select first file
                            return Object.keys(recall.files)[0] === ve;
                        }
                    }
                    let file = recall.files[ve];
                   files.create(ve, file.content, false, selected())
                }
            }
        } else {
            WS.send("Fe2.visited", true)
            files.create("README.md", startfile.join("\n"), false, true);
        }
        const { EditorView, basicSetup } = require("codemirror");
        const { thme } = require("@Fe2/theme");
        const { insertTab } = require("@codemirror/commands");
        const { keymap } = require("@codemirror/view");
        const { checkboxPlugin } = require("@Fe2/tooltip");
        const { ILC } = require("@Fe2/LC");
        const { F2Hint } = require("@Fe2/hintr")
        const { indentationMarkers } = require("@replit/indent-markers");
        const { color } = require("@uiw/color-extension");
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
        });
        function handle(
            key,
            run = function() {
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
            return EditorState.transactionExtender.of(tr => {
                if (tr.docChanged) {
                    files.update(files.current, tr.newDoc.toString())
                    WS.send("Fe2.files", AC3123);
                }
                return {};
            });
        })();
        self.editor = new EditorView({
            extensions: [
                modifier,
                color,
                basicSetup,
                indentationMarkers(),
                thme,
                handle("Tab", insertTab),
                checkboxPlugin,
                vvv,
                F2Hint
            ],
            doc: files.get(files.current).content,
            parent: l("#codemirror6v"),
        });
        ILC(self.editor);
        self.editor.setmode("md");
        self.mdp = (input, config) => {
            let reader = new commonmark.Parser();
            let writer = new commonmark.HtmlRenderer();
            let parsed = reader.parse(input === undefined ? "" : String(input)); // parsed is a 'Node' tree
            // transform parsed if you like...
            let result = writer.render(parsed); // result is a String
            return result;
        };
    }
})();

