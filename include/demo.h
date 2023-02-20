#pragma once
#ifndef _DEMO_H
#define _DEMO_H

#define WASM_DEFAULT_MODULE_NAME "demo"
#include "astd.h"
#include "awasm.h"

// Import our print function from JavaScript.
int WASM_IMPORT("print") print(char* string, size_t length);
int WASM_EXPORT("main") main(void);

#endif //_DEMO_H