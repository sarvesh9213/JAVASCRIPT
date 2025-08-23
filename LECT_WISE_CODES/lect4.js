//1.
// PREMITIVE DATA TYPES ::  nn ss bb u
// null number
// string symbol
// bigInt boolean
// undefined
let a = null;
let b = 567;
let c = "cat";
let d = Symbol("i am a nice symbol");
let e = BigInt("577") + BigInt("3"); // 580n
let f = true;
let g = undefined;
// let g // also good
console.log(a, b, c, d, e, f, g);
console.log(typeof d);
//2.
// NON PREMITIVE DATA TYPES :::: OBJECTS IN JS
const todoitem = {
  name: "buy milk",
  duedate: " 23/08/25",
};
console.log(todoitem.name);
console.log(todoitem["duedate"]);
