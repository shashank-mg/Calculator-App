class Calculator {
  constructor() {
    this.expression = "";
    this.digit = "";
    this.num_stack;
  }

  number = (n) => {
    n = n.toString();
    if (Array.isArray(stack.lastEle())) {
      this.n_stack.push(n);
    } else {
      this.num_stack = new Array();
      this.num_stack.push(n);
      stack.push(this.num_stack);
      this.n_stack = this.num_stack;
    }
    console.log(stack.allEle());
  };

  operator = (o) => {
    let prevEle = stack.lastEle();

    if (Array.isArray(prevEle) && stack.length() === 1) {
      stack.push(o);
    } else if (Array.isArray(prevEle) && stack.length() === 3) {
      let result = this.normal_calculate(stack.allEle());
      result = Array.from(result.toString());
      while (true) {
        let popped = stack.pop();
        if (!popped) break;
      }
      stack.push(result);
      stack.push(o);
    } else {
      switch (prevEle) {
        case "sin":
        case "cos":
        case "tan":
          stack.pop();
          break;
      }
    }

    switch (stack.lastEle()) {
      case "%":
      case "-":
      case "/":
      case "*":
      case "+":
        stack.pop();
        stack.push(o);
        break;
      case undefined:
        if (o !== "/") {
          stack.push(["0"]);
          stack.push(o);
        }
        break;
    }
    console.log(stack.allEle());
  };

  result = () => {
    console.log(stack.allEle());
  };

  clearOne = () => {};

  clearAll = () => {
    take_p.take_p = "";
    update_p.textContent = "";
    stack.storage.splice(0, stack.length());
  };

  trig = (t_fun) => {
    let prevEle = stack.lastEle();
    if (Array.isArray(prevEle)) {
      let result = this.trigometric_calculate(prevEle, t_fun);
      result = Array.from(result.toString());
      stack.pop();
      stack.push(result);
    } else {
      switch (prevEle) {
        case "%":
        case "-":
        case "/":
        case "*":
        case "+":
          stack.pop();
          let result = this.trigometric_calculate(stack.lastEle(), t_fun);
          result = Array.from(result.toString());
          stack.pop();
          stack.push(result);
          break;
      }
    }
    console.log(stack.allEle());
  };

  roots = (rt) => {
    let prevEle = stack.lastEle();
    if (Array.isArray(prevEle)) {
      let result = this.root_calculate(prevEle, rt);
      result = Array.from(result.toString());
      stack.pop();
      stack.push(result);
    } else {
      switch (prevEle) {
        case "%":
        case "-":
        case "/":
        case "*":
        case "+":
          stack.pop();
          let result = this.root_calculate(stack.lastEle(), rt);
          result = Array.from(result.toString());
          stack.pop();
          stack.push(result);
          break;
      }
    }
    console.log(stack.allEle());
  };

  oneByX = () => {
    let prevEle = stack.lastEle();
    if (Array.isArray(prevEle)) {
      let result = this.oneByX_calculate(prevEle);
      result = Array.from(result.toString());
      stack.pop();
      stack.push(result);
    }
    console.log(stack.allEle());
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
        return a1 / a2;
      case "*":
        return a1 * a2;
      case "%":
        return (a1 / a2) * 100;
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
    switch (rt) {
      case "sqrt":
        return Math.sqrt(ele);
      case "cbrt":
        return Math.cbrt(ele);
    }
  };

  oneByX_calculate = (ele) => {
    ele = +ele.join("");
    return 1 / ele;
  };
}

let calculator = new Calculator();

// function brackets(){
// switch (br) {
//   case "(":
//     switch (prevEle) {
//       case undefined:
//       case "+":
//       case "-":
//       case "/":
//       case "*":
//       case "%":
//         o_count.textContent++;
//         stack.push(br);
//         break;
//     }
//     break;
//   case ")":
//     if (
//       (prevEle === "(" || Array.isArray(prevEle)) &&
//       o_count.textContent >= "1"
//     ) {
//       stack.push(br);
//     }
//     if (o_count.textContent == "") break;
//     o_count.textContent--;
//     if (o_count.textContent == 0) {
//       o_count.textContent = "";
//       c_count.textContent = "";
//       break;
//     }
//     break;
// }
// }
