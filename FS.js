 /*global require*/
//jshint esversion:8
(() => {
  let checkPerms = async (fileHandle, readWrite) => {
    const options = {};
    if (readWrite) {
      options.mode = 'readwrite';
    }
    // Check if permission was already granted. If so, return true.
    if ((await fileHandle.queryPermission(options)) === 'granted') {
      return true;
    }
    // Request permission. If the user grants permission, return true.
    if ((await fileHandle.requestPermission(options)) === 'granted') {
      return true;
    }
    // The user didn't grant permission, so return false.
    return false;

  };
  let getFile = async () => {
    const pickerOpts = {
      types: [{
        description: "Files",
        accept: {},
      }, ],
      excludeAcceptAllOption: true,
      multiple: false,
    };
    let file = await window.showOpenFilePicker(pickerOpts);
    return {
      file,
      name: file.name,
      kind: file.kind,
      contents: await file.text()
    };
  };
  let regularlyUpdate = (fileHandle, textbox, interval) => {
    return setInterval(() => {
      writeTo(fileHandle, textbox.value);
    }, interval);

  };
  let writeTo = async (handler, content) => {
    const writable = await handler.createWritable();
    // Write the contents of the file to the stream.
    await writable.write(content);
    // Close the file and write the contents to disk.
    await writable.close();
  };
  require.addMod("@Fe2/FS", {
    getFile,
    writeTo,
    checkPerms,
    regularlyUpdate
  });
})();