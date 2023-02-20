const outbox = document.getElementById('out');

let wasmObj = null;

const importObject = {
    // The name of an import module declared in WebAssembly
    demo: {
        /**
         * @param {number} string `const char*`
         * @param {number} length `size_t`, length of the string (WITHOUT the null terminator!)
         * @returns {void}
         */
        print(string, length) {
            // Reads a null-terminated string from WebAssembly's memory and prints it.
            // https://developer.mozilla.org/en-US/docs/WebAssembly/Understanding_the_text_format#webassembly_memory
            /** @type {Uint8Array} */
            let buf = new Uint8Array(wasmObj.instance.exports.memory.buffer, string, length);
            const out = new TextDecoder("utf8").decode(buf);
            console.log(out);
            outbox.innerText += out;
            return;
        }
    }
};

(async () => {
    wasmObj = await WebAssembly.instantiateStreaming(fetch("demo.wasm"), importObject);
    wasmObj.instance.exports.main();
})();