// function doSomething(a) {
//   b = a + doSomethingElse(a * 2);
//   console.log(b * 3);
// }

// function doSomethingElse(a) {
//   return a - 1;
// }

// var b;

// doSomething(2);


// function doSomething(a) {
//   function doSomethingElse(a) {
//     return a - 1;
//   }
//   var b;
//   b = a + doSomethingElse(a * 2);
//   console.log(b * 3);
// }

// doSomething(2);


// var a = 2;

// (function foo(){
//   var a = 3;
//   console.log(a);
// })();

// console.log(a);


// var a = 2;

// (function IIFE(){
//   var a = 3;
//   console.log(a);
// })();

// console.log(a);


// var foo = true;

// if (foo) {
//   var bar = foo * 2;
//   bar = something(bar);
//   console.log(bar);
// }


var foo = true, baz = 10;

if (foo) {
  var bar = 3;
}

if (baz > bar) {
  console.log(baz);
}