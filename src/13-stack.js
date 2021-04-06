class Stack {
  constructor() {
    this.top = null;
    this.stack = [];
  }

  push(element) {
    this.top = element;
    this.stack.push(element);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }
}
module.exports = Stack;
