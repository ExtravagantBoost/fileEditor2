//rugged interface for vanilla js to nodejs modules
const require = (() => {
    let nodejs = {};
    nodejs.modules = Object.create(null);
    nodejs.version = 16;
    function main(module) {
        //console.log(nodejs.modules)
        if (!(module in nodejs.modules)) throw new Error(`Module '${module}' does not exist, check if you misspelled `)
        return nodejs.modules[module];
    }
    Object.defineProperty(main, 'addMod', {
        value: (name, val) => {
            if (!name) {
                //if name is set to false,or undefined, protocols are established that many modules need to be uploaded to this "database"
                Object.entries(val).forEach((entry) => {
                    let [modn, cont] = entry;
                    if (modn in nodejs.modules) throw new Error(`Module '${modn}' already exists.`)
                    nodejs.modules[modn] = cont;
                    //console.log(`Sucessfully added '${modn}'`)
                });
            } else {
                
                    if (name in nodejs.modules) throw new Error(`Module '${modn}' already exists.`)
                nodejs.modules[name] = val;//should be object
                //console.log(`Sucessfully added '${name}'`)
            }
        }
    });
    Object.defineProperty(main, "info",{
      get:()=>{return nodejs.modules;},
    });
    return main;
})();
window.require = require;