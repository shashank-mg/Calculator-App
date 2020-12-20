class Calculator {
  constructor() {
    this.expression = "";
    this.digit = "";
  }

  number(n) {
    this.digit += String(n);
    if (this.digit.length > 1) {
      take_p.textContent += n;
      stack.storage[stack.count - 1] = this.digit;
    } else {
      take_p.textContent += n;
      stack.push(this.digit);
    }
  }

  operator(o) {
    this.digit = "";
    this.expression = "";
    take_p.textContent += "  ";
    take_p.textContent += o;
    take_p.textContent += "  ";
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
    take_p.textContent = stack.allEle().join(" ");
    take_p.textContent += "  ";
  }

  special_perf(action) {
    this.digit = "";
    if (this.expression !== "") {
      this.expression = "";
    }
    take_p.textContent += action + "  ";
    this.expression = action;
    stack.push(this.expression);
    this.expression = "";
  }

  trig = (t_fun) => this.special_perf(t_fun);

  roots = (rt) => this.special_perf(rt);

  brackets(br) {
    this.digit = "";
    if (this.expression !== "") {
      stack.push(this.expression);
    }
    this.special_perf(br);
  }

  calculate(n, o) {
    let num = 0;
    let ope = "";
  }
}

let calculator = new Calculator();
