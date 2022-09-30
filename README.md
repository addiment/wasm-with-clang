# [wasm with clang](https://addiment.github.io/wasm-with-clang/)

"Hello World!" in WebAssembly with C/C++ using only Clang/LLD. It technically also uses wasm-ld, but that's included with LLD, and all of them are part of the LLVM project. As of now, wasm-ld is in development, though this works fine without a hitch.

A quick warning: this **will not work without a test server.** You can use anything you want (basic Apache2, Node.JS, Python, VS Code Live Server, etc.) but WASM is blocked by [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors) so you need *something*. The GitHub pages site for this repository serves everything currently.

<!-- I wrote this code at 1:30 AM and I haven't had enough sleep in days, this is a cry for help lol -->
You can see the build live in your browser [here.](https://addiment.github.io/wasm-with-clang/)
Built with:
- clang 11.0.1-2 on Debian 11 installed in /usr/bin
- LLD (and wasm-ld) 11.0.1
- Same makefile as included w/ this repo

The logo/(fav)icon used in the web demo is (as of now) the official WebAssembly logo, but with a recolor. The original is in the public domain, so the usage of it here is 100% legal. You can find the original logo files [here](https://github.com/WebAssembly/web-assembly-logo).
