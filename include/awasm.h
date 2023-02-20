#pragma once
#ifndef _AWASM_H
#define _AWASM_H

// Import a symbol from JavaScript
#define WASM_IMPORT_FROM_MODULE(_token, _module) __attribute__(( import_name(_token), import_module(_module) )) extern
// Expose a symbol to JavaScript through WebAssembly
#define WASM_EXPORT(_token) __attribute__(( visibility("default"), export_name(_token) ))

// Import a symbol from JavaScript
#ifdef WASM_DEFAULT_MODULE_NAME
#define WASM_IMPORT(_token) WASM_IMPORT_FROM_MODULE(_token, WASM_DEFAULT_MODULE_NAME)
#else
// The default name of the imported module
#define WASM_DEFAULT_MODULE_NAME
#define WASM_IMPORT(_token) __attribute__(( import_name(_token) ))
#endif // WASM_DEFAULT_MODULE_NAME

#endif //_AWASM_H