// function foo() {
//   console.log( this.a );
// }

// var a = 2;

// foo();

// function foo() {
//   console.log( this.a );
// }

// var obj = {
//   a: 2,
//   foo: foo
// };

// obj.foo();

// function foo() {
//   console.log( this.a );
// }

// var obj2 = {
//   a: 42,
//   foo: foo
// };

// var obj1 = {
//   a: 2,
//   obj2: obj2
// };

// obj1.obj2.foo();

// function foo() {
//   console.log( this.a );
// }

// var obj = {
//   a: 2,
//   foo: foo
// };

// var bar = obj.foo;

// var a = 'oops, global';

// bar();

// function foo() {
//   console.log( this.a );
// }

// function doFoo(fn) {
//   fn();
// }

// var obj = {
//   a: 2,
//   foo: foo
// };

// var a = 'oops, global';

// doFoo( obj.foo );

// function foo() {
//   console.log( this.a );
// }

// var obj = {
//   a: 2
// };

// foo.call( obj );

// function foo() {
//   console.log( this.a );
// }

// var obj = {
//   a: 2
// };

// var bar = function() {
//   foo.call( obj );
// };

// bar();
// setTimeout( bar, 100 );
// bar.call( window );

// function foo() {
//   console.log( this.a );
// }

// var obj1 = {
//   a: 2,
//   foo: foo
// };

// var obj2 = {
//   a: 3,
//   foo: foo
// };

// obj1.foo();
// obj2.foo();

// obj1.foo.call( obj2 );
// obj2.foo.call( obj1 );

function foo() {
  console.log('name: ' + this.name);
}

var obj = { name: 'obj' },
  obj2 = { name: 'obj2' },
  obj3 = { name: 'obj3' };

var fooOBJ = foo.softBind( obj );

fooOBJ();

obj2.foo = foo.softBind(obj);
obj2.foo();

fooOBJ.call( obj3 );

setTimeout( obj2.foo, 10 );