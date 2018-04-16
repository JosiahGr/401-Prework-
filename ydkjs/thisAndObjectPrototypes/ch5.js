// var anotherObject = {
//   a: 2
// };


// var myObject = Object.create( anotherObject );

// for (var k in myObject) {
//   console.log('found: ' + k);
// }
// ('a' in myObject);


// function Foo() {
// }
// Foo.prototype.constructor === Foo;

// var a = new Foo();
// a.constructor === Foo;


// function NothingSpecial() {
//   console.log('Don\'t mind me!');
// }

// var a = new NothingSpecial();

// a;


// function Foo(name) {
//   this.name = name;
// }

// Foo.prototype.myName = function() {
//   return this.name;
// };

// var a = new Foo( 'a' );
// var b = new Foo( 'b' );

// a.myName();
// b.myName();


// function Foo() { /* .. */ }

// Foo.prototype = { /* .. */ };

// Object.defineProperty( Foo.prototype, 'constructor' , {
//   enumerable: false,
//   writable: true,
//   configurable: true,
//   value: Foo
// } );


// function Foo(name) {
//   this.name = name;
// }

// Foo.prototype.myName = function() {
//   return this.name;
// };

// function Bar(name,label) {
//   Foo.call( this, name );
//   this.label = label;
// }

// Bar.prototype = Object.create( Foo.prototype );
// Bar.prototype.myLabel = function() {
//   return this.label;
// };

// var a = new Bar('a', 'obj a');

// a.myName();
// a.myLabel();


// Object.defineProperty(Object.prototype, '__proto__', {
//   get: function() {
//     return Object.getPrototypeOf(this);
//   },
//   set: function(o) {
//     Object.setPrototypeOf(this, o);
//     return o;
//   }
// });


// var foo = {
//   something: function() {
//     console.log('Tell me something good...');
//   }
// };

// var bar = Object.create(foo);

// bar.something();


// var anotherObject = {
//   a: 2
// };

// var myObject = Object.create(anotherObject, {
//   b: {
//     enumerable: false,
//     writable: true,
//     configurable: false,
//     value: 3
//   },
//   c: {
//     enumerable: true,
//     writable: false,
//     configurable: false,
//     value: 4
//   }
// });

// myObject.hasOwnProperty('a');
// myObject.hasOwnProperty('b');
// myObject.hasOwnProperty('c');

// myObject.a;
// myObject.b;
// myObject.c;


// function createAndLinkObject(o) {
//   function F(){}
//   F.prototype = o;
//   return new F();
// }

// var anotherObject = {
//   a: 2
// };

// var myObject = createAndLinkObject(anotherObject);

// myObject.a;


// var anotherObject = {
//   cool: function() {
//     console.log('cool!');
//   }
// };

// var myObject = Object.create(anotherObject);

// myObject.cool();


// var anotherObject = {
//   cool: function() {
//     console.log('cool!');
//   }
// };

// var myObject = Object.create(anotherObject);

// myObject.doCool = function() {
//   this.cool();
// };

// myObject.doCool();