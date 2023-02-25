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

// Different types of literals.
console.log("\nDifferent types of literals.\n");
let num = 14;
let floatNum = 3.14;
let s = "String Value";
let a = undefined;
let flag = true;
let n = null;

// F-Strings
console.log(`num: ${num}
floatNum: ${floatNum}
s: ${s}
a: ${a}
flag: ${flag}
n: ${n}`);
