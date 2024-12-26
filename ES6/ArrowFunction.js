// ! Syntax
// () => {}

// ! In ES5 and prior, there were 2 ways for creating functions:

// ! 1st
// function myFunc() {}
// ! 2nd
// var myOtherFunc = function () {};

// ! Difference b/w above 2
// myFunc is hoisted while myOtherFunc is not initialized in the interpretation phase, but only in the execution phase.

// let sum = (arg) => arg + 1;
// console.log(sum(9));
// let s = sum(89);
// console.log(s);

// let sum1 = (str1, str2) => {
//   return str1 + str2;
// };
// console.log(sum1("a", "sd"));


// ! => fat arrow
// named argument before the “fat arrow” becomes a variable in the function scope. If you have more than 1 named argument, you’ll need to put them in parentheses.
// Whatever is after the fat arrow is the return value. That can consist of more than a simple value or expression.

// Eg.
// const fun = (str1, str2) => {
//     const output = `${str1} &amp; ${str2}`
//     return output
// }
// console.log(fun('as','df'))         // fun('as','df')



// const fun = () => ({ foo: 1, bar: 2 })
// console.log(fun)        // will give complete expression
// console.log(fun())      // will give object --> {foo: 1, bar: 2}

// function Dog() {
//     var that = this;
//     this.genus = 'Canis';
//     document.querySelector('button')
//         .addEventListener('click', function (evt) {
//             // `this` is the DOM element clicked
//             alert(that.genus); // alerts 'Canis'
//         });
// }
// new Dog();



// function Dog() {
//     this.genus = 'Hey Ram';
//     document.querySelector('button')
//         .addEventListener('click', function (evt) {
//             // `this` is the current instance of `Dog`
//             alert(this.genus); // alerts 'Hey Ram'
//         }.bind(this));
//         // if we don't use bind then it will give undefined
// }
// new Dog();


function Dog1() {
    this.genus = 'Hey Hanuman';
    document.querySelector('button')
        .addEventListener('click',e => {
            // `this` is the current instance of `Dog`
            alert(this.genus)
        })
}
new Dog1();

