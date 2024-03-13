class QueueHandler {
    constructor() {
      this.queue = [];
    }
  
    addToQueue(order) {
      this.queue.push(order);
    }
  
    async processQueue() {
      let queueNumber = 1;
      while (this.queue.length > 0) {
        const order = this.queue.shift();
        console.log(`Processing Queue ${queueNumber}`);
        await this.processOrder(order, queueNumber);
        console.log(`Queue ${queueNumber} Done in ${this.getRandomTime()} seconds`);
        queueNumber++;
      }
      console.log("All queues processed.");
    }
  
    async processOrder(order, queueNumber) {
      return new Promise(resolve => {
        setTimeout(() => {
          console.log(`Order processed for Queue ${queueNumber}: ${order}`);
          resolve();
        }, this.getRandomTime() * 1000);
      });
    }
  
    getRandomTime() {
      return Math.floor(Math.random() * 10) + 1;
    }
  
    printQueue() {
      console.log("Current Queue:");
      console.log(this.queue);
    }
  }
  
  module.exports = QueueHandler;
  