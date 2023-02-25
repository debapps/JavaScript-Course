// This program demonstrates the JavaScript Variables and Constants.
// var/let/const - Keywords.

console.log("\n******** Variables and Constants *********\n");

// var - var keyword is used to declare global scoped variables. Variables declared with var keyword,
// can be re-declared and changed from any block of code.

console.log('"var" Keyword:\n');
var message = "Welcome to JavaScript Programming.";
console.log(message);

// Re-declaration.
var message = "Hello World!";
console.log(message);

// Global Scope: Global scope variables can be accessed globally, in any block of code.
{
  console.log(message);
  message = "Block: Happy Coding!";
  console.log(message);
}
console.log(message);

// let - let keyword is used to declare local scoped variables. Variables declared with let keyword,
// cannot be re-declared in same block of code.

console.log('\n"let" Keyword:\n');
let msg = "Welcome to JavaScript Programming.";
console.log(msg);

// Re-declaration in same block of code. Raise Error!
// let msg = "Hello World!";
// console.log(msg);

// Local Scope: Local scope variables can be declared and accessed locally, in any block of code.
{
  let msg = "Block: Happy Coding!";
  console.log(msg);
}
console.log(msg);

// const - const keyword is used to declare local scoped constants. The variables declared with const keyword,
// cannot be re-declared in same block of code and changed.

console.log('\n"const" Keyword:\n');
const comment = "Welcome to JavaScript Programming.";
console.log(comment);

// Re-declaration. Raise Error!
// const comment = "Hello World!";
// console.log(comment);

// Local Scope: Local scope variables can be declared and accessed locally, in any block of code.
{
  //   comment = "Block: Happy Coding!";
  console.log(comment);
}
console.log(comment);

// Different Primitive data types in JavaScript.
// NN BB SS U
console.log("\nDifferent Primitive data types in JavaScript.\n");
let num = 14;
let floatNum = 3.14;
let n = null;
let flag = true;
let bigInt = BigInt("1007");
let s = "String Value";
let sym = Symbol("%%");
let a;

// F-Strings
console.log(
  `num: ${num}
floatNum: ${floatNum}
n: ${n}
flag: ${flag}
bigInt: ${bigInt}
s: ${s}
a: ${a}
sym:`,
  sym
);

console.log("\nData Types:");

console.log(
  typeof num,
  typeof floatNum,
  typeof n,
  typeof flag,
  typeof bigInt,
  typeof s,
  typeof a,
  typeof sym
);
