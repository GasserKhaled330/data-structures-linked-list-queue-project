// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(head = null) {
    this.head = head;
  }

  addToHead(val) {
    // Add node of val to head of linked list
    // Big-O(1)
    const newNode = new SinglyLinkedNode(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this.head;
  }

  addToTail(val) {
    let newNode = new SinglyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;
      return this.head;
    }

    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }

    curr.next = newNode;
    return this.head;
  }

  listLength() {
    // Returns the length of the list
    // Implement in O(n) and in O(1) time complexity
    // O(n)
    let length = 0;
    let curr = this.head;
    while (curr) {
      length++;
      curr = curr.next;
    }
    return length;

    // O(1)
    // Add length property to the list to achieve this
  }

  sumOfNodes() {
    // Returns the sum of the values of all the nodes
    let sum = 0;
    let current = this.head;

    while (current) {
      sum += current.value;
      current = current.next;
    }
    return sum;

    // Write your hypothesis on the time complexity of this method here
    // O(n)
  }

  averageValue() {
    // Returns the average value of all the nodes
    return this.sumOfNodes() / this.listLength();
    // Write your hypothesis on the time complexity of this method here
    // O(n)
  }

  findNthNode(n) {
    // Returns the node at the nth index from the head
    let curr = this.head;
    while (n > 0) {
      curr = curr.next;
      n--;
    }
    return curr;
    // Write your hypothesis on the time complexity of this method here
    // O(n)
  }

  findMid() {
    // Returns the middle node
    // Implement this as a singly linked list then as a doubly linked list
    // How do the implementation for singly and doubly vary if at all?
    const len = this.listLength();
    const mid = len % 2 === 0 ? len / 2 - 1 : Math.floor(len / 2);

    return this.findNthNode(mid);
    // Write your hypothesis on the time complexity of this method here
    // O(n)
  }

  reverse() {
    // Returns a new reversed version of the linked list
    const newList = new SinglyLinkedList();

    let curr = this.head;
    while (curr) {
      newList.addToHead(curr.value);
      curr = curr.next;
    }

    return newList;
    // Write your hypothesis on the time complexity of this method here
    // O(n)
  }

  reverseInPlace() {
    // Reverses the linked list in-place
    let prev = null;
    let next = null;
    let curr = this.head;
    while (curr !== null) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
    // Write your hypothesis on the time complexity of this method here
    // O(n)
  }
}

class DoublyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(val) {
    let newNode = new DoublyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this.head;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;

    return this.head;
  }

  findMid() {
    // Returns the middle node
    // Implement this as a singly linked list then as a doubly linked list
    // How do the implementation for singly and doubly vary if at all?
    // Write your hypothesis on the time complexity of this method here
  }

  reverse() {
    // Returns a new reversed version of the linked list
    // Write your hypothesis on the time complexity of this method here
  }

  reverseInPlace() {
    // Reverses the linked list in-place
    // Write your hypothesis on the time complexity of this method here
  }
}

module.exports = {
  SinglyLinkedNode,
  SinglyLinkedList,
  DoublyLinkedNode,
  DoublyLinkedList,
};
