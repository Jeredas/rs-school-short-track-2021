const ListNode = require('../extensions/list-node');

class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(element) {
    const list = new ListNode(element);
    this.list = list;
    this.queue.push(element);
  }

  dequeue() {
    const top = this.queue.shift();
    return top;
  }
}
module.exports = Queue;
