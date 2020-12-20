let screen = document.querySelector(".screen");
let sine = document.querySelector(".sine");
let cosine = document.querySelector(".cosine");
let tan = document.querySelector(".tan");
let open_b = document.querySelector(".open_b");
let close_b = document.querySelector(".close_b");
let clear = document.querySelector(".clear");
let nine = document.querySelector(".nine");
let eight = document.querySelector(".eight");
let seven = document.querySelector(".seven");
let plus = document.querySelector(".plus");
let six = document.querySelector(".six");
let percent = document.querySelector(".percent");
let c_root = document.querySelector(".c_root");
let sq_root = document.querySelector(".sq_root");
let five = document.querySelector(".five");
let four = document.querySelector(".four");
let three = document.querySelector(".three");
let two = document.querySelector(".two");
let divide = document.querySelector(".divide");
let minus = document.querySelector(".minus");
let one = document.querySelector(".one");
let zero = document.querySelector(".zero");
let dot = document.querySelector(".dot");
let equals = document.querySelector(".equals");
let multiply = document.querySelector(".multiply");

// Button Clicks

// Numeral Buttons
one.addEventListener("click", () => calculator.number(1));
two.addEventListener("click", () => calculator.number(2));
three.addEventListener("click", () => calculator.number(3));
four.addEventListener("click", () => calculator.number(4));
five.addEventListener("click", () => calculator.number(5));
six.addEventListener("click", () => calculator.number(6));
seven.addEventListener("click", () => calculator.number(7));
eight.addEventListener("click", () => calculator.number(8));
nine.addEventListener("click", () => calculator.number(9));
zero.addEventListener("click", () => calculator.number(0));
dot.addEventListener("click", () => calculator.number("."));

// Operators
plus.addEventListener("click", () => calculator.operator("+"));
minus.addEventListener("click", () => calculator.operator("-"));
multiply.addEventListener("click", () => calculator.operator("*"));
divide.addEventListener("click", () => calculator.operator("/"));
percent.addEventListener("click", () => calculator.operator("%"));

// Result
equals.addEventListener("click", () => calculator.result());

// clear
clear.addEventListener("click", () => calculator.clearOne());

// Trignometric functions
sine.addEventListener("click", () => calculator.trig("Sine of "));
cosine.addEventListener("click", () => calculator.trig("Cos of "));
tan.addEventListener("click", () => calculator.trig("Tan of "));
// roots
sq_root.addEventListener("click", () => calculator.roots("sq_root of "));
c_root.addEventListener("click", () => calculator.roots("cb_root of "));

// brackets
open_b.addEventListener("click", () => calculator.brackets("("));
close_b.addEventListener("click", () => calculator.brackets(" )"));
