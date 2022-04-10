class Stack {
    constructor() {
      this.container = [];
    }
    count() {
      return this.container.length;
    }
    peek() {
      return this.container[this.container.length - 1];
    }
    push(value) {
      this.container.push(value);
    }
    pop() {
      return this.container.pop();
    }
  }
  
stack = new Stack();
stack.push("Jeff");
stack.push("Mary");
stack.push("Fran");
//console.log(stack);
console.log(stack.peek());
console.log(stack.count());
console.log(stack.pop());
console.log(stack.count());
console.log(stack.peek());
