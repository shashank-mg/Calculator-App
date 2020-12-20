let Stack = function () {
  this.count = 0;

  this.storage = [];

  this.push = function (val) {
    this.storage.push(val);
    this.count++;
  };

  this.pop = function () {
    if (this.count === 0) {
      return "stack empty";
    }
    this.count--;
    let deleted = this.storage.pop();
    return deleted;
  };

  this.length = function () {
    return this.count;
  };

  this.peek = function () {
    if (this.count === 0) {
      return "empty stack";
    }
    return this.storage[0];
  };

  this.allEle = function () {
    return this.storage;
  };
};

var stack = new Stack();
