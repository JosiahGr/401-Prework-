// function foo() {
//   var a = 2;

//   function bar() {
//     console.log(a);
//   }
//   bar();
// }

// foo();


// function foo() {
//   var a = 2;

//   function bar() {
//     console.log(a);
//   }
//   return bar;
// }

// var baz = foo();
// baz();


// function wait(message) {

//   setTimeout(function timer(){
//     console.log(message);
//   }, 1000);

// }

// wait('Hello, closure!');


// for (var i = 1; i <= 5; i++) {
//   setTimeout(function timer(){
//     console.log(i);
//   }, i * 1000);
// }


// for (var i = 1; i <= 5; i++) {
//   (function(){
//     setTimeout(function timer(){
//       console.log(i);
//     }, i * 1000);
//   })();
// }


// for (var i = 1; i <= 5; i++) {
//   (function(){
//     var j = i;
//     setTimeout(function timer(){
//       console.log(j);
//     }, j * 1000);
//   })();
// }


// var foo = (function CoolModule(id) {
//   function change() {
//     publicAPI.identify = identify2;
//   }

//   function identify1() {
//     console.log(id);
//   }

//   function identify2() {
//     console.log(id.toUpperCase());
//   }

//   var publicAPI = {
//     change: change,
//     identify: identify1
//   };

//   return publicAPI;
// })('foo module');

// foo.identify();
// foo.change();
// foo.identify();


// function hello(who) {
// 	return "Let me introduce: " + who;
// }

// export hello;


// // import hello() from "bar" module
// import hello from 'bar';

// var hungry = 'hippo';

// function awesome() {
// 	console.log(
// 		hello(hungry).toUpperCase()
// 	);
// }

// export awesome;


// // import "foo" and "bar" modules
// module foo from 'foo';
// module bar from 'bar';

// console.log(
// 	bar.hello('rhino')
// );

// foo.awesome();