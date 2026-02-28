
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(order) {
    const newNode = new Node(order);
    newNode.next = this.head;
    this.head = newNode;
  }

  findById(id) {
    let current = this.head;
    while (current) {
      if (current.data.id === id) return current.data;
      current = current.next;
    }
    return null;
  }

  deleteById(id) {
    let current = this.head;
    let prev = null;

    while (current) {
      if (current.data.id === id) {
        if (prev) prev.next = current.next;
        else this.head = current.next;
        return true;
      }
      prev = current;
      current = current.next;
    }
    return false;
  }

  getAll() {
    const orders = [];
    let current = this.head;
    while (current) {
      orders.push(current.data);
      current = current.next;
    }
    return orders;
  }
}

module.exports = new LinkedList();
