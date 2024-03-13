const QueueHandler = require("./QueueHandler");

const queueHandler = new QueueHandler();

// Add orders to queue
queueHandler.addToQueue("Order 1");
queueHandler.addToQueue("Order 2");
queueHandler.addToQueue("Order 3");
queueHandler.addToQueue("Order 4");

// Print all data in queue
queueHandler.printQueue();

// Run process -> process queue based on random interval
console.log("Running process...");
queueHandler.processQueue();
