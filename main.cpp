// Import our print function from JavaScript. See index.js for more on that.
__attribute__((import_name("print"))) int print(char* string);

// Prints "Hello World!"
int __attribute__((visibility("default"), export_name("helloWorld"))) helloWorld() {
    // Load memory so that we can access it in JavaScript
    // Yes, this technically causes a memory leak,
    // but the as long as helloWorld() is only called once,
    // it's fine. If this was called at any time, it wouldn't be safe.
    char str[] = "Hello World!";
    print(str);
    return 0;
}