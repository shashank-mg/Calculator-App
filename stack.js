class Stack {
  constructor() {
    this.storage = [];
    this.count = 0;
  }

  push = (val) => {
    this.storage.push(val);
    this.count++;
    return true;
  };

  pop = () => {
    if (this.count) {
      this.storage.pop();
      this.count--;
      return true;
    } else {
      return false;
    }
  };

  length = () => this.count;

  peek = () => {
    if (this.count > 0) {
      return this.storage[0];
    } else {
      return "stack empty";
    }
  };

  allEle = () => {
    return this.storage;
  };

  lastEle = () => {
    return this.storage[this.count - 1];
  };
}

let stack = new Stack();

if (stack.length() === 0) {
  take_p.classList.add("blink_me");
}
