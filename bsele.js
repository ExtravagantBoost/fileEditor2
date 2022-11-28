//jshint esversion:6
const bs = {
    toast(title, ib, img = false) {
        let Toast = l.CE("div");
        let innerbody = null;
        if (typeof ib == "function") {
            innerbody = ib();
            //should return Element
        } else if (typeof ib == "object") {
            innerbody = ib;
            // should be {TagName:[...otherelements],otherattrs:{}}
        } else if (typeof ib == "string") {
            innerbody = ib;
        }
        Toast.setattr({
            class: "toast toast-dark",
            role: "alert",
            "aria-live": "assertive",
            "aria-atomic": true,
        });
        Toast.apCh(
            {
                div: [
                    //jshint -W014
                    img
                        ? {
                              img: [],
                              class: "rounded me-2",
                              src: img,
                              width: "20px",
                              height: "20px",
                          }
                        : { div: [] },
                    { strong: [title], class: "me-auto" },
                    {
                        button: [],
                        type: "button",
                        class: "btn-close",
                        "data-bs-dismiss": "toast",
                        "aria-label": "close",
                    },
                ],
                class: "toast-header",
            },
            {
                div: [innerbody || ""],
                class: "toast-body",
            }
        );
        let bsv = new bootstrap.Toast(Toast);
        //console.log(Toast)
        Toast.show = () => {
            bsv.show();
        };
        Toast.hide = () => {
            bsv.hide();
        };
        Toast.dispose = () => {
            bsv.dispose();
        };
        Toast.isShown = () => {
            bsv.isShown();
        };
        return Toast;
    },
    modal(title, body, footer) {
        let Modal = l.CE("div");
        let innerbody = null;
        if (typeof body == "function") {
            innerbody = body();
            //should return Element
        } else if (typeof body == "object") {
            innerbody = body;
            // should be {TagName:[...otherelements],otherattrs:{}}
        } else if (typeof body == "string") {
            innerbody = body;
        }
        Modal.setattr({
            class: "modal fade modal-dark",
            "aria-labelledby": "exampleModalLabel",
            "aria-hidden": "true",
            tabindex: "-1",
        });
        Modal.apCh({
            div: [
                {
                    div: [
                        {
                            div: [
                                {
                                    h5: [title],
                                    class: "modal-title",
                                },
                                {
                                    button: [],
                                    type: "button",
                                    class: "btn-close",
                                    "data-bs-dismiss": "modal",
                                    "aria-label": "close",
                                },
                            ],
                            class: "modal-header",
                        },
                        {
                            div: [innerbody],
                            class: "modal-body",
                        },
                        {
                            div: footer,
                            class: "modal-footer",
                        },
                    ],
                    class: "modal-content",
                },
            ],
            class: "modal-dialog",
        });

        let bsv = new bootstrap.Modal(Modal);
        Modal.show = () => {
            bsv.show();
        };
        Modal.hide = () => {
            bsv.hide();
        };
        Modal.dispose = () => {
            bsv.dispose();
        };
        Modal.toggle = () => {
            bsv.toggle();
        };
        Modal.handleUpdate = () => {
            bsv.handleUpdate();
        };

        return Modal;
    },
    offcanvas(title, body, configs) {
        if (!configs) {
            configs = {
                dark: false,
                pos: "start",
                scroll: false,
                backdrop: true,
                keyboard: true,
            };
        }
        let has = (obj, key, def) => {
            if (obj.hasOwnProperty(key)) {
                return obj[key];
            }
            return def;
        };
        let swtch = (obj, key, val1, val2) => {
            if (obj.hasOwnProperty(key)) {
                return val1;
            }
            return val2;
        };
        //console.log(swtch(configs,'dark','1','2'))
        let innerbody;

        if (typeof body == "function") {
            innerbody = body();
            //should return Element
        } else if (typeof body == "object") {
            innerbody = body;
            // should be {TagName:[...otherelements],otherattrs:{}}
        } else if (typeof body == "string") {
            innerbody = body;
        }
        let Offcanvas = l.CE("div");
        Offcanvas.setattr({
            class: `offcanvas ${
                //jshint -W014
                configs.pos != undefined
                    ? `offcanvas-${configs.pos}`
                    : "offcanvas-start"
            } ${has(configs, "dark", false) ? "text-bg-dark" : ""}`,
            tabindex: -1,
            "aria-labelledby": "offcanvas1",
        });
        Offcanvas.apCh(
            {
                div: [
                    { h5: [title], class: "offcanvas-title", id: title },
                    {
                        button: [],
                        type: "button",
                        class: `btn-close ${
                            has(configs, "dark", false) ? "btn-close-white" : ""
                        }`,
                        "data-bs-dismiss": "offcanvas",
                        "aria-label": "close",
                    },
                ],
                class: "offcanvas-header",
            },
            {
                div: [innerbody],
                class: "offcanvas-body",
            }
        );
        //console.log(Offcanvas,configs)
        document.body.appendChild(Offcanvas);

        let bsv = new bootstrap.Offcanvas(Offcanvas, {
            scroll: has(configs, "scroll", false),
            backdrop: has(configs, "backdrop", true),
            keyboard: has(configs, "keyboard", true),
        });
        //error fixed. Offcanvas has to be appended to document prior to creating an instance.
        Offcanvas.show = () => bsv.show();
        Offcanvas.hide = () => bsv.hide();
        Offcanvas.toggle = () => bsv.toggle();

        return Offcanvas;
    },
    callout(style, title, body) {
        style = style.toLowerCase();
        let styles = [
            "primary",
            "secondary",
            "success",
            "warning",
            "danger",
            "info",
            "light",
            "dark",
        ];

        if (styles.indexOf(style) > -1) {
        } else
            throw new Error(
                "Style that was supplied does not exist, try another one (recieved '" +
                    style +
                    "'"
            );
        if (typeof title === undefined)
            throw new Error("Content for title is not supplied");
        if (typeof title === "function" /*check if function, then run*/)
            title = title();
        if (typeof title === "string") {
            let newtitle = l.CE("h2"); //create header title
            l.setattr({ class: "callout-title" });
            newtitle.apCh(title);
            title = [newtitle]; //Bodybuilder only supports lists for now
        }
        if (typeof title === "object") {
            //lists and objects pass through typeof scope as "object"
            if (title.length /*check if title is list*/) {
                //DO NOTHING
            } else {
                title = [title];
            }
        }
        if (typeof body === undefined)
            throw new Error("Content for body is not supplied");
        if (typeof body === "function") body = body();
        if (typeof body === "string") body = [body];
        if (typeof body === "object") {
            if (body.length) {
            } else {
                body = [body];
            }
        }
        let callout = l.CE("div");
        callout.setattr({
            class: `callout callout-${style}`,
        });
        callout.apCh({
            div: [
                {
                    div: title,
                    class: "callout-header",
                },

                {
                    p: body,
                    class: "callout-body",
                },
            ],
            class: "callout-content",
        });
        return callout;
    },
    accordion: (...childs) => {
        //create basis
        let acrd = l.CE("div");
        acrd.setattr({
            class: "accordion accordion-dark" /*you can remove the dark class here or programatically after calling this function */,
        });
        let items = childs;
        items.forEach((v, index) => {
            //follow this formatting
            /* {
                    title:"accordion1"
                    body:[elements/text/numbers]
                }*/
            if (typeof v === "object" && v.title && v.body) {
                let idv = Math.round(Math.random()*1000000);
                let aitem = l.CE("div");
                aitem.setattr({
                    class: "accordion-item",
                    id:"accordion"+idv
                });
                aitem.apCh({
                    h2: [
                        {
                            button: [v.title],
                            class:"accordion-button",
                            type:"button",
                            "data-bs-toggle":"collapse",
                            "data-bs-target":`#collapse${index}`,
                            "aria-expanded":"true",
                            "aria-controls":`collapse${index}`
                        },
                    ],
                    class: "accordion-header",
                    id: `accordion${index}`,
                },
                {
                    div:[
                        {
                            div:v.body,
                            class:"accordion-body"
                        }
                    ],
                    id:`collapse${index}`,
                    class:"accordion-collapse collapse",
                    "aria-labelledby":`heading${index}`,
                    "data-bs-parent":"#accordion"+idv
                }
                );
            }
        });
    },
};
