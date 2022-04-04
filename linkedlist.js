class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    
    insert(value) {
        // Increase the length of the list and create a new node
        this.length++;
        let newNode = new Node(value);
    
        // if a tail exists for this list
        if (this.tail !== null) {
          // make this new node the tail  
          this.tail.next = newNode;
          this.tail = newNode;
          return newNode;
        }
    
        // if the tail is null, the list is empty
        // this node is both the head and the tail
        this.head = this.tail = newNode;
        return newNode;
      }
    
      print() {
        // get the HEAD of the list
        let current = this.head;
        // loop through the nodes, setting current to the NEXT node each loop
        while (current) {
          console.log(current.value);
          current = current.next;
        }
      }

      remove() {
        if (this.tail) {
          // reduce the length of the list
          this.length--;
    
          const tailNode = this.tail;
    
          // search for the node before tail
          let currentNode = this.head;
    
          // The while loop stops when the node next to tail node is found
          while (currentNode.next != tailNode) {
            currentNode = currentNode.next;
          }
    
          const beforeTail = currentNode;
          // set the tail to point to the previous node
          this.tail = beforeTail;
          // make sure the new tail has no NEXT value
          this.tail.next = null;
    
          return tailNode;
        }
        // If there is no tail node, the list is empty
        return undefined;
      }   
  }

linkedList = new LinkedList();
linkedList.insert("Mary");
linkedList.insert("Jeff");
linkedList.insert("Fran");
linkedList.print();
console.log("----------------------------------");
linkedList.remove();
linkedList.print();
