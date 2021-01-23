class Calculator {
  constructor() {
    this.expression = "";
    this.record = 0;
    this.num_stack;
    this.flag = 1;
    this.store = "";
  }

  blink = () => {
    if (stack.length() > 0) {
      take_p.classList.remove("blink_me");
    }
  };

  number = (n) => {
    this.flag = 1;
    n = n.toString();
    if (this.record) {
      stack.pop();
      this.record = 0;
    }
    if (Array.isArray(stack.lastEle())) {
      if (this.n_stack.length < 21) {
        this.n_stack.push(n);
        take_p.textContent += n;
        this.store += n;
      }
    } else {
      take_p.textContent = "";
      this.num_stack = new Array();
      if (this.num_stack.length < 21) {
        this.num_stack.push(n);
        stack.push(this.num_stack);
        this.n_stack = this.num_stack;
        take_p.textContent += n;
        this.store += n;
      }
    }
    this.blink();
  };

  operator = (o) => {
    this.record = 0;
    take_p.textContent = "";
    this.flag = 1;
    if (stack.length()) {
      if (stack.allEle()[0].length === 0) {
        stack.allEle()[0] = ["0"];
      }
    }
    let prevEle = stack.lastEle();
    if (Array.isArray(prevEle) && stack.length() === 1) {
      stack.push(o);
      update_p.textContent = `${stack.peek().join("")} ${o}`;
    } else if (Array.isArray(prevEle) && stack.length() === 3) {
      let result = this.normal_calculate(stack.allEle());

      if (result === undefined) this.clearAll("Invalid Syntax");
      else {
        update_p.textContent = `${result} ${o}`;
        result = Array.from(result.toString());
        while (true) {
          let popped = stack.pop();
          if (!popped) break;
        }
        stack.push(result);
        stack.push(o);
      }
    } else if (stack.length() === 2) {
      update_p.textContent = `${stack.peek().join("")} ${o}`;
    } else {
      switch (prevEle) {
        case "sin":
        case "cos":
        case "tan":
          stack.pop();
          break;
      }
    }

    if (this.flag) {
      o = o.toString();
      switch (stack.lastEle()) {
        case "%":
        case "-":
        case "/":
        case "*":
        case "+":
          let cngOp = update_p.textContent.split(" ");
          cngOp.pop();
          cngOp.push(o);
          cngOp = cngOp.join(" ");
          update_p.textContent = cngOp;
          stack.pop();
          stack.push(o);
          break;
        case undefined:
          update_p.textContent = `0 ${o}`;
          stack.push(["0"]);
          stack.push(o);
          break;
      }
    }

    this.flag = 1;
    this.blink();
  };

  result = () => {
    this.flag = 1;
    this.record = 1;
    let prevEle = stack.lastEle();
    if (stack.length() <= 2 && stack.length() >= 1) {
      let combine;
      if (Array.isArray(prevEle)) {
        combine = prevEle.join("");
        this.store = combine;
        take_p.textContent = `= ${this.store}`;
        update_p.textContent = "";
      } else {
        switch (prevEle) {
          case "+":
          case "-":
            stack.push(["0"]);
            break;
          case "*":
          case "/":
          case "%":
            stack.push(["1"]);
            break;
        }
        let result = this.normal_calculate(stack.allEle());
        if (result === undefined) this.clearAll("Invalid Syntax");
        else {
          take_p.textContent = `= ${result}`;
          update_p.textContent = "";
          result = Array.from(result.toString());
          while (true) {
            let popped = stack.pop();
            if (!popped) break;
          }
          stack.push(result);
        }
      }
    } else if (stack.length() === 3) {
      let result = this.normal_calculate(stack.allEle());
      if (result === undefined) this.clearAll("Invalid Syntax");
      else {
        take_p.textContent = `= ${result}`;
        update_p.textContent = "";
        result = Array.from(result.toString());
        while (true) {
          let popped = stack.pop();
          if (!popped) break;
        }
        stack.push(result);
      }
    } else {
    }
    this.blink();
  };

  clearOne = () => {
    let prevEle = stack.lastEle();
    if (!this.record) {
      if (Array.isArray(prevEle)) {
        this.n_stack.pop();
        let change = Array.from(take_p.textContent);
        change.pop();
        take_p.textContent = change.join("");
      }
    }
    this.blink();
  };

  clearAll = (def = 0) => {
    this.store = "";
    take_p.textContent = def;
    update_p.textContent = "";
    this.n_stack = [];
    this.num_stack = [];
    stack.count = 0;
    stack.storage = [];
    take_p.classList.add("blink_me");
  };

  trig = (t_fun) => {
    this.record = 1;
    this.flag = 1;
    let prevEle = stack.lastEle();
    if (Array.isArray(prevEle) && stack.length() <= 2) {
      let result = this.trigometric_calculate(prevEle, t_fun);
      this.store = result;
      if (result === undefined) this.clearAll("Invalid syntax");
      else {
        update_p.textContent = `${t_fun} ( ${prevEle.join("")} ) = ${result}`;
        result = Array.from(result.toString());
        stack.pop();
        stack.push(result);
        take_p.textContent = this.store;
      }
    } else if (Array.isArray(prevEle) && stack.length() === 3) {
      let result = this.trigometric_calculate(prevEle, t_fun);
      if (result === undefined) this.clearAll("Invalid syntax");
      else {
        update_p.textContent = `ANS ${
          stack.allEle()[1]
        } ${t_fun} ( ${prevEle.join("")} )`;
        result = Array.from(result.toString());
        stack.pop();
        stack.push(result);
        this.store = this.normal_calculate(stack.allEle());
        take_p.textContent = `${this.store}`;
        while (true) {
          let popped = stack.pop();
          if (!popped) break;
        }

        stack.push(Array.from(this.store.toString()));
      }
    } else if (stack.length() === 0) {
      let result = this.trigometric_calculate(["0"], t_fun);

      this.store = result;
      if (result === undefined) this.clearAll("Invalid syntax");
      else {
        update_p.textContent = `${t_fun} ( ${["0"].join("")} ) = ${result}`;
        result = Array.from(result.toString());
        stack.pop();
        stack.push(result);
        take_p.textContent = this.store;
      }
    } else {
      switch (prevEle) {
        case "%":
        case "-":
        case "/":
        case "*":
        case "+":
          stack.pop();
          let result = this.trigometric_calculate(stack.lastEle(), t_fun);
          this.store = result;
          if (result == undefined) {
            this.clearAll("Invalid Syntax");
            break;
          } else {
            update_p.textContent = `${t_fun} ( ${stack
              .lastEle()
              .join("")} ) = ${result}`;
            take_p.textContent = this.store;
            result = Array.from(result.toString());
            stack.pop();
            stack.push(result);
            break;
          }
      }
    }

    this.blink();
  };

  roots = (rt) => {
    this.record = 1;
    this.flag = 1;
    let prevEle = stack.lastEle();
    if (Array.isArray(prevEle) && stack.length() <= 2) {
      let result = this.root_calculate(prevEle, rt);
      this.store = result;
      if (result === undefined) this.clearAll("Invalid syntax");
      else {
        update_p.textContent = `${rt} ( ${prevEle.join("")} ) = ${result}`;
        result = Array.from(result.toString());
        stack.pop();
        stack.push(result);
        take_p.textContent = this.store;
      }
    } else if (Array.isArray(prevEle) && stack.length() === 3) {
      let result = this.root_calculate(prevEle, rt);
      if (result === undefined) this.clearAll("Invalid syntax");
      else {
        update_p.textContent = `ANS ${stack.allEle()[1]} ${rt} ( ${prevEle.join(
          ""
        )} )`;
        result = Array.from(result.toString());
        stack.pop();
        stack.push(result);
        this.store = this.normal_calculate(stack.allEle());
        take_p.textContent = `${this.store}`;

        while (true) {
          let popped = stack.pop();
          if (!popped) break;
        }

        stack.push(Array.from(this.store.toString()));
      }
    } else if (stack.length() === 0) {
      let result = this.root_calculate(["0"], rt);
      this.store = result;
      if (result === undefined) this.clearAll("Invalid syntax");
      else {
        update_p.textContent = `${rt} ( ${["0"].join("")} ) = ${result}`;
        result = Array.from(result.toString());
        stack.pop();
        stack.push(result);
        take_p.textContent = this.store;
      }
    } else {
      switch (prevEle) {
        case "%":
        case "-":
        case "/":
        case "*":
        case "+":
          stack.pop();
          let result = this.root_calculate(stack.lastEle(), rt);
          this.store = result;
          if (result === undefined) {
            this.clearAll("Invalid Syntax");
            break;
          } else {
            update_p.textContent = `${rt} ( ${stack
              .lastEle()
              .join("")} ) = ${result}`;
            take_p.textContent = this.store;
            result = Array.from(result.toString());
            stack.pop();
            stack.push(result);
            break;
          }
      }
    }
    this.blink();
  };

  oneByX = () => {
    this.record = 1;
    this.flag = 1;
    let prevEle = stack.lastEle();
    if (Array.isArray(prevEle) && stack.length() <= 2) {
      let result = this.oneByX_calculate(prevEle);
      this.store = result;
      if (result) {
        update_p.textContent = `1/${prevEle.join("")} = ${result}`;
        result = Array.from(result.toString());
        stack.pop();
        stack.push(result);
        take_p.textContent = this.store;
      } else if (result === undefined) {
        this.clearAll("Invalid Syntax");
      }
    } else if (Array.isArray(prevEle) && stack.length() === 3) {
      let result = this.oneByX_calculate(prevEle);
      if (result) {
        update_p.textContent = `ANS ${stack.allEle()[1]} ( 1/${prevEle.join(
          ""
        )} )`;
        result = Array.from(result.toString());
        stack.pop();
        stack.push(result);
        this.store = this.normal_calculate(stack.allEle());
        take_p.textContent = `${this.store}`;

        while (true) {
          let popped = stack.pop();
          if (!popped) break;
        }
        stack.push(Array.from(this.store.toString()));
      } else if (result === undefined) {
        this.clearAll("Invalid Syntax");
      }
    } else {
      switch (prevEle) {
        case "%":
        case "-":
        case "/":
        case "*":
        case "+":
          stack.pop();
          let result = this.oneByX_calculate(stack.lastEle());
          this.store = result;
          if (result) {
            update_p.textContent = `1/( ${stack
              .lastEle()
              .join("")} ) = ${result}`;
          } else if (result === undefined) {
            this.clearAll("Invalid Syntax");
            break;
          }
          take_p.textContent = this.store;
          result = Array.from(result.toString());
          stack.pop();
          stack.push(result);
          break;
      }
    }
    this.blink();
  };

  normal_calculate = ([a1, o, a2]) => {
    a1 = +a1.join("");
    a2 = +a2.join("");
    switch (o) {
      case "+":
        return a1 + a2;
      case "-":
        return a1 - a2;
      case "/":
        if (a2 === 0) {
          this.flag = 0;
          break;
        } else {
          return a1 / a2;
        }
      case "*":
        return a1 * a2;
      case "%":
        if (a2 === 0) {
          this.flag = 0;
          break;
        } else {
          return (a1 / a2) * 100;
        }
    }
  };

  trigometric_calculate = (ele, t_fun) => {
    ele = +ele.join("");
    switch (t_fun) {
      case "sin":
        return Math.sin(ele);
      case "cos":
        return Math.cos(ele);
      case "tan":
        return Math.tan(ele);
    }
  };

  root_calculate = (ele, rt) => {
    ele = +ele.join("");
    if (!(ele < 0)) {
      switch (rt) {
        case "sqrt":
          return Math.sqrt(ele);
        case "cbrt":
          return Math.cbrt(ele);
      }
    } else {
      return;
    }
  };

  oneByX_calculate = (ele) => {
    ele = +ele.join("");
    if (ele === 0) {
      this.flag = 0;
    } else {
      return 1 / ele;
    }
  };
}

let calculator = new Calculator();
