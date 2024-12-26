// Variables defined in a function’s scope are only accessible within that function.
// The exception is the “global” scope, which exists outside any function and is accessible everywhere.

// ! function scope
// var x = 1;
// var y = 2;

// function fun() {
//   var x = 3;
//   var z = 4;
//   console.log(x); // 3
//   console.log(y); // 2
//   console.log(z); // 4
// }

// fun();
// console.log(x); // 1
// console.log(z); // throws a ReferenceError



// ! block scope
// ! block Scope added in ES6 
// ! means we can create variables that are available only inside blocks (e.g., within a conditional or a loop). 
// ! Blocks are kind of like Vegas. What happens in blocks stays in blocks

// let x = 1

// if (true) {
//     let x = 2
//     console.log(x) // 2
// }

// console.log(x) // 1


// -----------------------------------------------------------------------

let y = 1
let z = null

for (let i = 0; i < 3; ++i) {
    console.log(y) // 1 --> 3 times
    console.log(i) // 0, 1, then 2
    z = i
}

console.log(z) // 2
console.log(i) // throws a ReferenceError (i is not defined)