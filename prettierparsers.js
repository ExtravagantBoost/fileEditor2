(() => {
  if (!prettier) throw new Error("unable to load. prettierparsers.js due to internal error");
    prettier.supports = prettier.getSupportInfo()
    let supported = {
        //langs
        l:{},
        //opts
        o:{}
    }
    for (let i of prettier.supports.languages) {
        //console.log(i.name,i.aceMode,i.codemirrorMode)
        if (!i.codemirrorMode) {
            if (supported.l.hasOwnProperty(i.aceMode)) {
                supported.l[i.aceMode].push(i.name);//prevent the list from being rewritten
            } else {
                supported.l[i.aceMode] = [i.name];
            }
        } else {
            let v = i.codemirrorMode
            //change lanugage identifier to support CM6
            if (v === "gfm") v = "markdown";
            if (v === "htmlmixed") v = "html";
            // only gfm and htmlmixed only exist in CM5
            if (supported.l.hasOwnProperty(v)) {
                supported.l[v].push(i.name);
            } else {
                supported.l[v] = [i.name]
            }
        }

    }
    for (let i of prettier.supports.options) {
        //console.log(i.category,i.name,i.type, i.choices,i.description);
        let opt = {
            cat:i.category,
            name:i.name,
            type:i.type,
            choices:i.choices,
            desc:i.description
        };
        if (opt.cat.toLowerCase() === "common") {
            opt.cat = "JavaScript";
        };
        //console.log(opt)
        if (supported.o.hasOwnProperty(opt.cat.toLowerCase())) {
            
        supported.o[opt.cat.toLowerCase()].push(opt)
        } else {
            supported.o[opt.cat.toLowerCase()] = [opt]
        }
   }
    prettier.supported = supported;
    console.log(supported)
})()