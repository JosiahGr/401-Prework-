// function mixin(sourceObj, targetObj) {
//   for (var key in sourceObj) {
//     if (!(key in targetObj)) {
//       targetObj[key] = sourceObj[key];
//     }
//   }

//   return targetObj;
// }

// var Vehicle = {
//   engines: 1,
//   ignition: function() {
//     console.log('Turning on my engine.');
//   },

//   drive: function() {
//     this.ignition();
//     console.log('Steering and moving forward!');
//   }
// };

// var Car = mixin(Vehicle, {
//   wheels: 4,
//   drive: function() {
//     Vehicle.drive.call(this);
//     console.log('Rolling on all ' + this.wheels + ' wheels!');
//   }
// });


// function mixin(sourceObj, targetObj) {
//   for (var key in sourceObj) {
//     if (!(key in targetObj)) {
//       targetObj[key] = sourceObj[key];
//     }
//   }

//   return targetObj;
// }


// function mixin(sourceObj, targetObj) {
//   for (var key in sourceObj) {
//     targetObj[key] = sourceObj[key];
//   }

//   return targetObj;
// }

// var Vehicle = {};
// var Car = mixin(Vehicle, {});

// mixin({
//   wheels: 4,
//   drive: function() {}
// }, Car);


// var Something = {
//   cool: function() {
//     this.greeting = 'Hello World';
//     this.count = this.count ? this.count + 1 : 1;
//   }
// };

// Something.cool();
// Something.greeting;
// Something.count;

// var Another = {
//   cool: function() {
//     Something.cool.call(this);
//   }
// };

// Another.cool();
// Another.greeting;
// Another.count;