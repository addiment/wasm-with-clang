const outbox = document.getElementById('out');

const MAX_CSTR_LENGTH = 256;

/** @type {WebAssembly.WebAssemblyInstantiatedSource} */
var wasmInst = undefined;

function main() {
    wasmInst.exports.helloWorld();
    return;
}

try {
    const importObject = {
        // called "env" because of wasm-ld and you can't change it, this is literally 1984
        env: {
            /**
             * Good ol' fashioned null-terminated string print function.
             * @param {number} string Pointer to null-terminated string in memory
             * @returns {number} whatever {@linkcode console.log()} returns
             */
            print(string) {
                let out = '';
                let i = 0;
                /** @type {Uint8Array} */
                let view = new Uint8Array(wasmInst.exports.memory.buffer, string);
                while (i < (length || MAX_CSTR_LENGTH)) {
                    let chr;
                    chr = view[i];
                    if (chr == 0x00) break;
                    out += String.fromCharCode(chr);
                    i++;
                }
                if (i >= (length || MAX_CSTR_LENGTH)) console.error("Failed to terminate string!");
                outbox.innerText += out + '\n';
                return console.log(out);
            }
        }
    };

    WebAssembly.instantiateStreaming(fetch("main.wasm"), importObject).then(obj => {
        wasmInst = obj.instance;
        main();
    });
} catch (err) {
    console.error(err);
}