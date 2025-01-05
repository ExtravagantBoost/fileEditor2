// settings maker
/*global require,l*/
//jshint esversion:6

((l)=>{
  try {
  class Settmaker12 {
    constructor(inp,callback) {
      this.obj = [];
      this.onchange = callback;
      this.element = l.CE("div");
      let sett = {};
      //jshint -W074
      inp.forEach((lr,i)=>{
        
        let id = Math.round(Math.random()*1000);
      let input;
      input = l.CE("div");
      if (typeof(lr)==typeof('')) {
          input.apCh(lr);
      } else if (typeof(lr) == typeof(()=>{})) {
        input.apCh(lr());
      } else if (lr.type == "textbox") {
        
        let ttle = l.CE("label");
        ttle.setattr(
          {
            for:lr.id||`menu${i}id${id}`,
            class:"form-label"
          }
        );
        sett[(lr.id?lr.id:`menu${i}id${id}`)] = {
          element:input,
          value:lr.default,
          type:lr.type
        };
        let inpl = l.CE("input");
        
        inpl.setattr({
          type:lr.type,
          class:"form-control",
          id:lr.id||`menu${i}id${id}`,
          value:lr.default||"",
          placeholder:(lr.placeholder?lr.placeholder:""),
          on:{
            input:()=>{
              sett[lr.id].value = input.l("input").value;
              this.onchange(this,sett[(lr.id?lr.id:`menu${i}id${id}`)]/*target*/);
            }
          },
          
        });
        
        ttle.apCh(lr.title);
        input.apCh(ttle,inpl);
      } else if (lr.type == "toggle") {

        
        let id = Math.round(Math.random()*1000);
        let ttle = l.CE("label");
        ttle.setattr({
          class:"form-check-label",
          for:`chk${i}id${id}`
        });
        ttle.apCh(lr.title);
        let inpl = l.CE("input");
        inpl.setattr({
          type:"checkbox",
          class:"form-check-input",
          id:lr.id||`chk${i}id${id}`
        });
        
        if (lr.state) inpl.setAttribute("checked",true);
        input.setattr({
          class:"form-check form-switch"
        });
        
        input.apCh(ttle,inpl);
        sett[(lr.id?lr.id:`chk${i}id${id}`)] = {
          element:input,
          
          state:lr.state,
          type:lr.type,
        };
        inpl.setattr({
            on:{
              click:()=> {
                  input.querySelectorAll("input").forEach((m,vi)=>{
                    if (vi != 0) {
                      m.disabled = !input.l("input").checked;
                    }
                  });
                sett[(lr.id?lr.id:`chk${i}id${id}`)].state = input.l("input").checked;
                if (lr.hasOwnProperty("min")) sett[(lr.id?lr.id:`chk${i}id${id}`)].min = input.l("#"+(lr.id?`min${lr.id}`:`min${i}id${id}`)).value;
                if (lr.hasOwnProperty("max")) sett[(lr.id?lr.id:`chk${i}id${id}`)].max = input.l("#"+(lr.id?`max${lr.id}`:`max${i}id${id}`)).value;
                this.onchange(this,sett[(lr.id?lr.id:`chk${i}id${id}`)]);
              }
            }
        });
        if (lr.hasOwnProperty("min") || lr.hasOwnProperty("max")) {
          
        
          let div = l.CE("div");
		  if (lr.hasOwnProperty("min")) {
            let minp = l.CE("input");
            minp.setattr({
              type:"number",
              placeholder:"min",
              class:"form-control",
              id:(lr.id?`min${lr.id}`:`min${i}id${id}`),
              on:{
                input:()=>{
                  sett[(lr.id?lr.id:`chk${i}id${id}`)].min = input.l("#"+(lr.id?`min${lr.id}`:`min${i}id${id}`)).value;
                  this.onchange(this,sett[(lr.id?lr.id:`chk${i}id${id}`)]);
                }
              }
            });
            minp.value = lr.min;
            if (!inpl.state) minp.disabled = !inpl.state; 
            div.apCh(minp);
            sett[(lr.id?lr.id:`chk${i}id${id}`)].min = lr.min;
          }
          if (lr.hasOwnProperty("max")) {
            let maxp = l.CE("input");
            maxp.setattr({
              type:"number",
              placeholder:"max",
              class:"form-control",
              id:lr.id?`max${lr.id}`:`max${i}id${id}`,
              on:{
                input:()=>{
                  sett[(lr.id?lr.id:`chk${i}id${id}`)].max = input.l("#"+(lr.id?`max${lr.id}`:`max${i}id${id}`)).value;
                  this.onchange(this,sett[(lr.id?lr.id:`chk${i}id${id}`)]);
                }
              }
            });
            maxp.value = lr.max;
            if (!inpl.state) maxp.disabled = !inpl.state; 
            div.apCh(maxp);
            sett[(lr.id?lr.id:`chk${i}id${id}`)].min = lr.max;
          }
          input.apCh(div);
        }
        
      } else if (lr.type == "select") {
        let id = Math.round(Math.random()*1000);
        let ttle = l.CE("label");
        ttle.setattr({
          class:"form-label",
          for:lr.id||`slct${i}id${id}`
        });
        let inpl;
        sett[(lr.id?lr.id:`slct${i}id${id}`)] = {
          element:input,
          selected:lr.options[0],
          type:lr.type,
        };
        if (lr.options.length) {
          if (lr.options.length >= 10) {
            inpl = l.CE("select");
            inpl.setattr({
                class:"form-select",
                "aria-label":"select",
                on:{
                  input:()=>{
                    sett[(lr.id?lr.id:`slct${i}id${id}`)].selected = input.l("select").value;
                    this.onchange(this,sett[(lr.id?lr.id:`slct${i}id${id}`)]);
                  }
                }
            });
            for (let r = 0;r < lr.options.length;r++) {
              let opt = l.CE("option");
              if (r == 0) opt.setAttribute("selected",true);
              opt.setattr({
                value:lr.options[r],
                name:(lr.id?lr.id:`slct${i}id${id}`)
              });
              opt.apCh(lr.options[r]);
            }
          } else {
            //radio toggle
            inpl = l.CE("div");
            inpl.setattr({
              on:{
                click:()=>{
                  setTimeout(()=>{
                    sett[(lr.id?lr.id:`slct${i}id${id}`)].selected = inpl.l("input:checked").getAttribute("fname");
                    this.onchange(this,sett[(lr.id?lr.id:`slct${i}id${id}`)]);
                  },10);
                }
              }
            });
            for (let r = 0;r< lr.options.length;r++) {
              let inp1 = l.CE("input");
              let lbl = l.CE("label");

              inp1.setattr({
                type:"radio",
                class:"btn-check",
                name:lr.id||`options-base${id}m${r}`,
                fname:lr.options[r],
                id:(lr.id?`opt${lr.id}no${r}`:`opt${i}v${r}b${id}`),
                autocomplete:"off",
                
              });
              
              lbl.setattr({
                class:"btn btn-outline-secondary m-1",
                for:(lr.id?`opt${lr.id}no${r}`:`opt${i}v${r}b${id}`)
              });
              if (r == 0) inp1.setAttribute("checked",true);
              lbl.apCh(lr.options[r]);
              inpl.apCh(inp1,lbl);
            }
          }
          ttle.apCh(lr.title);
          input.apCh(ttle,inpl);
          
        }
      } else if (lr.type == "mselect") {
        let id = Math.round(Math.random()*1000);
        let ttle = l.CE("label");
        ttle.setattr({
          class:"form-label",
          for:lr.id||`mslct${i}id${id}`
        });
        sett[(lr.id?lr.id:`mslct${i}id${id}`)] = {
          element:input,
          selected:Object.entries(lr.options).filter((b)=>{
            return b[1];
          }),
          type:lr.type,
        };
        let inpl;
        if (!lr.options.length) {
          if (false) {
            //CODE WILL NOT WORK ON SOME BROWSERS ;-;
            inpl = l.CE("select");
            inpl.setattr({
                class:"form-select",
                id:lr.id,
                "aria-label":"Multiple select",
                on:{
                  input:()=>{
                    
                  }
                }
              });
            let b = Object.entries(lr.options);
            for (let r = 0;r < b.length;r++) {
              
              let opt = l.CE("option");
              if (b[r][1]) opt.setAttribute("selected",true);
              opt.setattr({
                value:b[r][0],
              });
              opt.apCh(b[i][0]);
            }
          } else {
            //checkbox toggle
            inpl = l.CE("div");
            let b = Object.entries(lr.options);
            for (let r = 0;r < b.length;r++) {
              
              let inp1 = l.CE("input");
              let lbl = l.CE("label");
              inp1.setattr({
                type:"checkbox",
                class:"btn-check",
                name:`btn-base${id}m${r}`,
                id:(lr.id?`btnopt${lr.id}no${r}`:`btn${i}opt${r}vb${id}`),
                autocomplete:"off"
              });
              if (b[r][1]) inp1.setAttribute("checked",true);
              lbl.setattr({
                class:"btn btn-secondary",
                for:(lr.id?`btnopt${lr.id}no${r}`:`btn${i}opt${r}vb${id}`)
              });
              lbl.apCh(b[r][0]);
              inpl.apCh(lbl,inp1);
            }
            inpl.setattr({
              on:{
                click:()=>{
                  let v = inpl.querySelectorAll("input");
                  let a = inpl.querySelectorAll("label");
                  let slcted = [];
                  for (let mv = 0;mv < v.length;mv++) {
                    let mr = v[mv];
                    let ma = a[mv];
                    if (mr.checked) {
                       slcted.push([ma,mr]);
                    }
                  }
                  sett[(lr.id?lr.id:`mslct${i}id${id}`)].selected = slcted;
                  this.onchange(this,sett[(lr.id?lr.id:`mslct${i}id${id}`)]);
                }
              }
            });
          }
          ttle.apCh(lr.title);
          input.apCh(ttle,inpl);
          
        }
        
      }
      
      this.element.setattr({
        class:"mb-3"
      }); 
      
      this.element.apCh(input);
      this.obj = sett;
      /*Object.defineProperty(
        this.obj,
        "disabled",
        {
          value:false,
          set(vi) {
            Object.entries(this).forEach((eri,erm)=>{
              
            });
          }
        });*/

    });
    }
    
    
    callback(func) {
      this.onchange = func;
    }
    get() {
      return this.element;
    }
  }
  require.addMod("@Fe2/SM",{
    Settmaker12
  });
  } catch (e) {

  }
})(l);