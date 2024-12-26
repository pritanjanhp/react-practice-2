// ! A class is a way to encapsulate data and methods.
// ! We can create instances of what is, essentially, a blueprint of a thing.
// ! Though different in nature from classical OOP languages, the simple case of creating instances from classes has always been fairly straightforward to do in JavaScript.

// ! ES6 gives us a new class keyword that makes for a cleaner syntax.

// ------------------------------------------------------------------------------

// ! ES5 & b4
// function Animal(legs) {
//   this.legs = legs || 0;
// }

// Animal.prototype.move = function () {
//   if (this.legs > 0) console.log("walk");
//   else console.log("slithery");
// };

// Create object of Animal class and then call the move function
// const animalWithLegs = new Animal(4);
// animalWithLegs.move();                   // walk

// const animalWithoutLegs = new Animal(0);
// animalWithoutLegs.move();               // slither

// ---------------------------------------------------------------------------

// ! ES6
// class Animal {
//   constructor(legs = 0) {
//     this.legs = legs;
//   }
//   move() {
//     if (this.legs > 0) console.log("walk");
//     else console.log("slither");
//   }
// }

// const animalWithLegs = new Animal(4);
// animalWithLegs.move();                   // walk

// const animalWithoutLegs = new Animal(0);
// animalWithoutLegs.move();               // slither

// ------------------------------------------------------------------------------

// ES5  & B4
// function Animal(legs) {
//   this.legs = legs || 0;
// }
// Animal.prototype.move = function () {
//   if (this.legs > 0) {
//     console.log("walk");
//   } else {
//     console.log("slither");
//   }
// };

// function Dog(legs, sound) {
//   Animal.call(this, legs);
//   this.sound = sound || "ruff";
// }
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.bark = function () {
//   console.log(this.sound);
// };

// var myDog = new Dog(4);
// console.log(myDog.legs);    // 4
// myDog.move();               // walk
// myDog.bark();               // ruff

// var myDog = new Dog(4,'dsads');
// console.log(myDog.legs);    // 4
// myDog.move();               // walk
// myDog.bark();               // dsads

// ------------------------------------------------------------------------------

// ES 6
// class Animal {
//   constructor(legs) {
//     this.legs = legs;
//   }
//   move() {
//     if (this.legs > 0) console.log("walk");
//     else console.log("slitherr");
//   }
// }

// class Dog extends Animal {
//   constructor(legs = 4, sound = "barks") {
//     super(legs);
//     this.sound = sound;
//   }
//   bark() {
//     console.log(this.sound);
//   }
// }

// let dog = new Dog(5);
// console.log(dog.legs);  // 5
// dog.move();             // walk
// dog.bark();             // barks
