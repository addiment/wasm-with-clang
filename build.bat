@REM Build on Windows by just running the command the makefile generates
@clang -target wasm32 -nostdlib --for-linker=--no-entry main.cpp -o web/main.wasm
pause