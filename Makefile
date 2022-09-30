# Simple makefile just for making things slightly easier.
CC = clang
CFLAGS = -target wasm32 -nostdlib --for-linker=--no-entry
SRC = main.cpp
OUT = web/main.wasm

default: $(OUT)

$(OUT): $(SRC)
	$(CC) $(CFLAGS) $(SRC) -o $(OUT)