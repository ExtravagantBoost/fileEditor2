/*Webstorage module*/
(() => {
    function storageAvailable(type) {
        let storage;
        try {
            storage = window[type];
            const x = '__storage_test__';
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        }
        catch (e) {
            return e instanceof DOMException && (
                // everything except Firefox
                e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                e.name === 'QuotaExceededError' ||
                // Firefox
                e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
                // acknowledge QuotaExceededError only if there's something already stored
                (storage && storage.length !== 0);
        }
    }
    let module = {

        WS: {
            mode: null,
            setmode(v) {
                if (v === undefined) throw new InternalError("Mode not supplied")
                if (v != "session" && v != "local") throw new InternalError("Incorrect mode setting")
                this.mode = v + "Storage"
            },
            send(key, value) {
                if (storageAvailable(this.mode)) {
                    if (!key) throw new Error("key not supplied");
                    if (typeof key != 'string') throw new TypeError(`key should be string, not ${typeof (key)}.`);
                    if (!value) value = "";
                    if (typeof value != 'string') {
                        if (typeof value == 'object') {
                            value = JSON.stringify(value);
                        } else {
                            value = String(value);
                        }
                    }
                    //now send it via WebStorage API.
                    window[this.mode].setItem(key, value);
                } else {
                    console.warn("unable to store.");
                }
            },
            remove(key) {
                if (storageAvailable(this.mode)) {
                    if (!key) throw new InternalError("key not supplied");
                    if (typeof key != 'string') throw new TypeError(`key should be string, not ${typeof (key)}`);
                    if (!(key in window[this.mode])) throw new TypeError(`key '${key}' does not exist`);
                    window[this.mode].removeItem(key)
                } else {
                    console.warn("unable to remove.")
                }
            },
            getI(key) {
                if (storageAvailable(this.mode)) {
                    if (!key) throw new InternalError("key not supplied");
                    if (typeof key != 'string') throw new TypeError(`key should be string, not ${typeof (key)}`);
                    if (!(key in window[this.mode])) throw new TypeError(`key '${key}' does not exist`);
                    try {return JSON.parse(window[this.mode].getItem(key))} catch(e) {return window[this.mode].getItem(key)}
                } else {
                    console.warn("unable to get.")
                }
            },
            c() {
                if (storageAvailable(this.mode)) {
                    window[this.mode].clear()
                } else {
                    console.warn("unable to clear.")
                }
            },
            has(i) {
                if (storageAvailable(this.mode)) {
                    if (i in window[this.mode]) return true;
                    return false
                } else {
                    console.warn("unable to get")
                    return false
                }
            }
        }
    };

    require.addMod("@Fe2/WS", module)
})()