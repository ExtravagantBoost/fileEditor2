 //jshint esversion:8
/*global l,bootstrap*/
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
        Toast.show = () => {bsv.show();};
        Toast.hide = () => {bsv.hide();};
        Toast.dispose = () => {bsv.dispose();};
        Toast.isShown = () => {bsv.isShown();};
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
        Modal.show = () => {bsv.show();};
        Modal.hide = () => {bsv.hide();};
        Modal.dispose = () => {bsv.dispose();};
        Modal.toggle = () => {bsv.toggle();};
        Modal.handleUpdate = () => {bsv.handleUpdate();};

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
        let has = (obj,key,def) => {
            if (obj.hasOwnProperty(key)) {
                return obj[key];
            }
            return def;
        };
        let swtch = (obj,key,val1,val2) => {
            if (obj.hasOwnProperty(key)) {
                return val1;
            }
            return val2;
        };
        //console.log(swtch(configs,'dark','1','2'))
        let innerbody = undefined;
        
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
            class: `offcanvas ${configs.pos!=undefined ? `offcanvas-${configs.pos}` : "offcanvas-start"
                } ${has(configs,'dark',false) ? "text-bg-dark" : ""}`,
            tabindex: -1,
            "aria-labelledby": 'offcanvas1',
       });
       Offcanvas.apCh(
            {
                div: [
                    { h5: [title], class: "offcanvas-title", id: title },
                    {
                        button: [],
                        type: "button",
                        class: `btn-close ${has(configs,'dark',false) ? "btn-close-white" : ""}`,
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
            
        let bsv = new bootstrap.Offcanvas(Offcanvas,{
            
            scroll:has(configs,'scroll',false),
            backdrop:has(configs,'backdrop',true),
            keyboard:has(configs,'keyboard',true)
        });
        //error fixed. Offcanvas has to be appended to document prior to creating an instance.
        Offcanvas.show = () => bsv.show();
        Offcanvas.hide = () => bsv.hide();
        Offcanvas.toggle = () => bsv.toggle();
       
        return Offcanvas;
   },
    callout(style,title,body) {
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
        ]
        
        if (styles.indexOf(style)>-1) {} else throw new Error("Style that was supplied does not exist, try another one (recieved '"+style+"'");
        if (typeof title=== undefined) throw new Error("Content for title is not supplied");
        if (typeof title === "function"/*check if function, then run*/) title = title();
        if (typeof title === "string") {
            let newtitle = l.CE("h2");//create header title
            l.setattr({class:"callout-title"});
            newtitle.apCh(title)
            title = [newtitle];//Bodybuilder only supports lists for now
        }
        if (typeof title === "object") {//lists and objects pass through typeof scope as "object"
            if (title.length/*check if title is list*/) {
                //DO NOTHING
            } else {
                title = [title]
            }
        }
        if (typeof body===undefined) throw new Error("Content for body is not supplied");
        if (typeof body === "function") body = body()
        if (typeof body === "string") body = [body];
        if (typeof body === "object") {
            if (body.length) {
                
            } else {
                body = [body]
            }
        }
       let callout = l.CE('div')
        callout.setattr({
            class:`callout callout-${style}`,
        })
        callout.apCh({
            div:[
                {
                    div:title,
                    class:"callout-header",
                },

                {
                    p:body,
                    class:"callout-body",
                },
            ],
            class:"callout-content"
        });
        return callout;
    },
  accordion:(menus,attr) => {
    /*should be 
    	[ 
     		[
     			Title = string||object,
       			body = String or object in the same format for apCh
        	],
         	...
        ]
    attr should be:
    {
    	flush:true||false
        ...
    }
    */
    let has = (obj,key,def) => {
            if (obj.hasOwnProperty(key)) {
                return obj[key];
            }
            return def;
        };
    if (!attr) {
      attr = {
        flush:false,
        dark:false
      };
    }
  
    let rtn = l.CE("div");
    var id = Math.round(Math.random()*1000);
    rtn.setattr({ 
      id:"accordion"+id,
      class:`accordion ${has(attr,"flush",false)?"accordion-flush":""} ${has(attr,"dark",false)?"accordion-dark":""}`
    });
    for (let i in menus) {
      let [title,body] = menus[i];
      let menu = l.CE("div");
        if (typeof body===undefined) throw new Error("Content for body is not supplied");
        if (typeof body === "function") body = (body().length?body():[body()]);
        if (typeof body === "string") body = [body];
        if (typeof body === "object") {
            if (body.length) {
                
            } else {
                body = [body];
            }
        }
      menu.setattr({
        class:"accordion-item",
      });
      menu.apCh(
        {
          h2:[
            {
              button:[title],
              class:"accordion-button collapsed",
              type:"button",
              'data-bs-toggle':'collapse',
              'data-bs-target':`#menu${i}${id}`,
              'aria-expanded':'false',
              'aria-controls':`menu${i}${id}`
            }
          ],
          class:"accordion-header",
          id:`accordionheader${i}${id}`
        },
        {
          div:[
            {
              div:body,
              class:"accordion-body"
            }
          ],
          id:`menu${i}${id}` ,
          class:"accordion-collapse collapse",
          'aria-labelledby':`accordionheader${i}${id}`,
          "data-bs-parent":`#accordion${id}`
        }
        
      );
      
      rtn.apCh(menu);
    }
    rtn.toggle= n => {
      //simple code to programatically open and close each menu
      let main = l("accordion"+id);
      main.childNodes.forEach((el,i)=>{
        if ((i == n)) {
          main.l(`accordionheader${i}${id}`).l("button").click();
        }
      });
    };
    return rtn;
  }
};
