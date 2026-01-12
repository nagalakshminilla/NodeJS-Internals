
# Node.js Architecture

Node.js is built to run JavaScript outside the browser. Its architecture is designed to handle many tasks efficiently without creating a new thread for every request. This makes Node.js fast and suitable for scalable applications.

---

## JavaScript Engine (V8)

* V8 is the JavaScript engine developed by Google.
* It converts JavaScript code into machine-level code that the system can understand.
* V8 is responsible only for executing JavaScript, not for handling files, networks, or timers.
* Node.js uses V8 so JavaScript can run on the server instead of just in the browser.

---

## Node.js Core APIs

* Core APIs are built-in features provided by Node.js.
* Examples include file system (`fs`), HTTP, timers, and streams.
* These APIs allow JavaScript to interact with the operating system.
* They are written mostly in JavaScript with some parts in C++ for better performance.

---

## Native Bindings

* Native bindings act as a bridge between JavaScript and C/C++ code.
* They allow Node.js core APIs to call low-level system functions.
* Native bindings help Node.js access features like file I/O and networking efficiently.

---

## Event Loop

* The event loop is the heart of Node.js execution.
* It continuously checks for tasks and executes them when ready.
* Instead of blocking execution, Node.js registers tasks and processes them asynchronously.
* This is how Node.js handles many operations using a single main thread.

---

## libuv

### What is libuv?

* libuv is a C library used internally by Node.js.
* It provides support for asynchronous operations.
* libuv handles system-level tasks like file access, networking, and timers.

### Why Node.js needs libuv

* JavaScript alone cannot handle low-level system operations.
* libuv allows Node.js to work the same way across different operating systems.
* It manages background tasks so the main thread remains free.

### Responsibilities of libuv

* Managing the event loop
* Handling asynchronous I/O operations
* Managing the thread pool
* Handling timers and system signals

---

## Thread Pool

### What is a thread pool?

* A thread pool is a group of background threads.
* These threads handle tasks that cannot be done asynchronously by the OS.

### Why Node.js uses a thread pool

* Some operations are blocking by nature.
* Using a thread pool prevents blocking the main JavaScript thread.
* This keeps Node.js responsive.

### Operations handled by the thread pool

* File system operations
* DNS lookups
* Data compression
* Cryptographic operations

---

## Worker Threads

### What are worker threads?

* Worker threads allow running JavaScript in multiple threads.
* Each worker has its own event loop and memory space.

### Why are worker threads needed?

* They help handle CPU-intensive tasks.
* They prevent heavy computations from blocking the main thread.

### Difference between thread pool and worker threads

* Thread pool is managed by libuv and used for internal operations.
* Worker threads are created by developers.
* Thread pool runs background system tasks, while worker threads run JavaScript code.

---

## Event Loop Queues

### Macro Task Queue

* Holds tasks that take more time.
* Examples include:

  * `setTimeout`
  * `setInterval`
  * I/O callbacks

### Micro Task Queue

* Holds small, high-priority tasks.
* Examples include:

  * `Promise.then`
  * `process.nextTick`

### Execution priority

* Micro tasks are executed before macro tasks.
* After each phase of the event loop, micro tasks are cleared first.

---

## Summary

* Node.js uses V8 to execute JavaScript.
* libuv handles asynchronous operations and the event loop.
* The thread pool and worker threads help manage heavy tasks.
* Event loop queues control execution order efficiently.

This architecture allows Node.js to be fast, scalable, and efficient.
