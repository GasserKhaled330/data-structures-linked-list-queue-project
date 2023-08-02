class SinglyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    // Add node of val to head of linked list
    // Big-O(1)
    const newNode = new SinglyLinkedNode(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  addToTail(val) {
    // Add node of val to tail of linked list
    // Big-O(n)
    const newNode = new SinglyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = newNode;
    }
    this.length++;
    return this;
  }

  removeFromHead() {
    // Remove node at head
    // Write your hypothesis on the time complexity of this method here
    // Big-O(1)
    let removedHead = this.head;
    if (this.head) {
      this.head = this.head.next;
      this.length--;
      return removedHead;
    }
  }

  removeFromTail() {
    // Remove node at tail
    // Write your hypothesis on the time complexity of this method here
    // Big-O(n)
    if (this.head) {
      let tail;
      if (!this.head.next) this.head = null;
      else {
        let tempNode = this.head;
        while (tempNode) {
          if (!tempNode.next.next) break;
          tempNode = tempNode.next;
        }
        tail = tempNode.next;
        tempNode.next = null;
      }
      this.length--;
      return tail;
    }
  }

  peekAtHead() {
    // Return value of head node
    // Write your hypothesis on the time complexity of this method here
    // Big-O(1)
    if (this.head) return this.head.value;
  }

  print() {
    // Print out the linked list
    // Write your hypothesis on the time complexity of this method here
    // Big-O(n)
    let curr = this.head;

    while (curr) {
      console.log(`${curr.value}`);
      curr = curr.next;
    }
  }
}

module.exports = {
  SinglyLinkedList,
  SinglyLinkedNode,
};
