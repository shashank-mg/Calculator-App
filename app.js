let Stack = function () {
  this.count = 0;

  this.storage = [];

  this.push = function (val) {
    this.storage.push(val);
    this.count++;
  };

  this.pop = function () {
    if (this.count === 0) return "stack empty";
    this.count--;
    let deleted = this.storage.pop();
    return deleted;
  };

  this.length = function () {
    return this.count;
  };

  this.peek = function () {
    if (this.count === 0) return "empty stack";
    return this.storage[0];
  };

  this.allEle = function () {
    return this.storage;
  };
};

var stack = new Stack();

///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////

class Calculator {
  constructor() {
    this.expression = "";
    this.digit = "";
  }

  number(n) {
    this.digit += String(n);
    if (this.digit.length > 1) {
      screen.textContent += n;
      stack.storage[stack.count - 1] = this.digit;
    } else {
      screen.textContent += n;
      stack.push(this.digit);
    }
    console.log(stack.count);
  }

  operator(o) {
    this.digit = "";
    this.expression = "";
    screen.textContent += "  ";
    screen.textContent += o;
    screen.textContent += "  ";
    this.expression = o;
    stack.push(o);
    this.expression = "";
  }

  result() {
    this.expression = "";
    console.log(stack.allEle());
  }

  clearOne() {
    this.digit = "";
    stack.pop();
    screen.textContent = stack.allEle().join(" ");
    screen.textContent += "  ";
  }

  special_perf(action) {
    this.digit = "";
    if (this.expression !== "") this.expression = "";
    screen.textContent += action + "  ";
    this.expression = action;
    stack.push(this.expression);
    this.expression = "";
  }

  trig = (t_fun) => this.special_perf(t_fun);

  roots = (rt) => this.special_perf(rt);

  brackets(br) {
    this.digit = "";
    if (this.expression !== "") stack.push(this.expression);
    this.special_perf(br);
  }

  calculate(n, o) {
    let num = 0;
    let ope = "";
  }
}

let calculator = new Calculator();
