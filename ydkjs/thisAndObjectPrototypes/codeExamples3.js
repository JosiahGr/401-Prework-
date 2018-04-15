// var strPrimitive = 'I am a string';
// typeof strPrimitive;
// strPrimitive instanceof String;

// var strObject = new String('I am a string');
// typeof strObject;
// strObject instanceof String;

// Object.prototype.toString.call(strObject);


// var wantA = true;
// var myObject = {
//   a: 2
// };

// var idx;

// if (wantA) {
//   idx = 'a';
// }

// console.log(myObject[idx]);


// var myObject = {};

// Object.defineProperty(myObject, 'a', {
//   value: 2,
//   writable: true,
//   configurable: true,
//   enumerable: true
// });


// myObject.a;

// var myObject = {
//   a: 2
// };


// myObject.a = 3;
// myObject.a;

// Object.defineProperty(myObject, 'a', {
//   value: 4,
//   writable: true,
//   configurable: false,
//   enumerable: true
// });


// myObject.a;
// myObject.a = 5;
// myObject.a;

// Object.defineProperty(myObject, 'a', {
//   value: 6,
//   writable: true,
//   configurable: true,
//   enumerable: true
// });

// var myObject = {
//   a: 2
// };

// Object.preventExtensions(myObject);


// myObject.b = 3;
// myObject.b;

// var myObject = {
//   get a() {
//     return 2;
//   }
// };
// Object.defineProperty(
//   myObject,
//   'b', {
//     get: function(){return this.a * 2;},
//     enumerable: true
//   }
// );


// myObject.a;
// myObject.b;

// var myObject = {
//   get a() {
//     return this._a_;
//   },
//   set a(val) {
//     this._a_ = val * 2;
//   }
// };

// myObject.a = 2;
// myObject.a;

// var myObject = {
//   a: 2,
//   b: 3
// };

// Object.defineProperty(myObject, Symbol.iterator, {
//   enumerable: false,
//   writable: false,
//   configurable: true,
//   value: function() {
//     var o = this;
//     var idx = 0;
//     var ks = Object.keys(o);
//     return {
//       next: function() {
//         return {
//           value: o[ks[idx++]],
//           done: (idx > ks.length)
//         };
//       }
//     };
//   }
// });

// var it = myObject[Symbol.iterator]();
// it.next();
// it.next();
// it.next();

// for (var v of myObject) {
//   console.log(v);
// }

var randoms = {
  [Symbol.iterator]: function() {
    return {
      next: function() {
        return {value: Math.random()};
      }
    };
  }
};

var randoms_pool = [];
for (var n of randoms) {
  randoms_pool.push(n);

  if (randoms_pool.length === 100) break;
}