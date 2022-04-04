class Queue {
    constructor() {
      this.container = [];
    }
  
    count() {
      return this.container.length;
    }
  
    peek() {
      // this time we look at the first element
      return this.container[0];
    }
  
    enqueue(value) {
      this.container.push(value);
    }
  
    dequeue() {
      // we need to use SHIFT here instead of pop
      return this.container.shift();
    }
  }
  
  queue = new Queue();
  queue.enqueue("Jeff");
  queue.enqueue("Mary");
  queue.enqueue("Fran");
  console.log(queue.peek());
  console.log(queue.count());
  console.log(queue.dequeue());
  console.log(queue.count());