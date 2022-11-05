ΩΩΩΩΩ≈≈≈ç(() => {
  if (!prettier) throw new Error("unable to load. prettierparsers.js due to internal error");
    prettier.supports = prettier.getSupportInfo()
    let supported = {
        //langs
        l:{},
        //opts
        o:{}
    }
    for (let i of prettier.supports.languages) {
        console.log(i.name,i.aceMode,i.codemirrorModes)


    }
})()