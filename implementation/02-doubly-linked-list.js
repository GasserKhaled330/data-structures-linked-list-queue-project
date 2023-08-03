// Node class is implemented for you, no need to look for bugs here!
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
    this.length = 0;
  }

  addToHead(val) {
    // Add node of val to head of linked list
    const newNode = new DoublyLinkedNode(val);
    if (!this.head) this.head = this.tail = newNode;
    else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    // Write your hypothesis on the time complexity of this method here
    // BIG-O(1)
  }

  addToTail(val) {
    // Add node of val to tail of linked list
    const newNode = new DoublyLinkedNode(val);

    if (!this.head) this.head = this.tail = newNode;
    else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    // Write your hypothesis on the time complexity of this method here
    // BIG-O(1)
  }

  removeFromHead() {
    // Remove node at head
    if (this.length > 0) {
      const data = this.head.value;
      this.head = this.head.next;
      if (this.length > 1) {
        this.head.prev.next = null;
        this.head.prev = null;
      } else this.tail = null;
      this.length--;
      return data;
    }
    // Write your hypothesis on the time complexity of this method here
    // BIG-O(1)
  }

  removeFromTail() {
    // Remove node at tail
    if (this.length > 0) {
      const data = this.tail.value;
      this.tail = this.tail.prev;
      if (this.length > 1) {
        this.tail.next.prev = null;
        this.tail.next = null;
      } else this.head = null;
      this.length--;
      return data;
    }
    // Write your hypothesis on the time complexity of this method here
    // BIG - O(1);
  }

  peekAtHead() {
    // Return value of head node
    if (this.head) return this.head.value;
    // Write your hypothesis on the time complexity of this method here
    // BIG-O(1)
  }

  peekAtTail() {
    // Return value of tail node
    if (this.tail) return this.tail.value;
    // Write your hypothesis on the time complexity of this method here
    // BIG-O(1)
  }
}

module.exports = {
  DoublyLinkedList,
  DoublyLinkedNode,
};
