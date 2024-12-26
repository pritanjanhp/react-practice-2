// https://andrew.hedges.name/es6/templates
// https://segdeha.com/es6-templates

// ES5 and before:

// function getFullName(title, fname, lname, degree) {
//   return title + " " + fname + " " + lname + ", " + degree;
// }
// console.log(getFullName("Mr.", "Pritanjan", "Baranwal", "B.Tech"));
// Mr. Pritanjan Baranwal, B.Tech

// ES6:
// function getFullName(title, fname, lname, degree) {
//   return `${title} ${fname} ${lname}, ${degree}`;
// }
// console.log(getFullName("Mr.", "Pritanjan", "Baranwal", "B.Tech"));
// Mr. Pritanjan Baranwal, B.Tech

// ----------------------------------------------------------------

// function showYourWork(num1, num2) {
//   return `${num1} + ${num2} = ${num1 + num2}`;
// }
// let x = showYourWork(3, 4);
// console.log(x);         // 3 + 4 = 7



// function sum(num1, num2) {
//   return num1 + num2;
// }
// function showYourWork(num1, num2) {
//   return `${num1} + ${num2} = ${sum(num1, num2)}`;
// }

// showYourWork(3, 4);  // 3 + 4 = 7





// ------------------------------------------------------------------------------
// Presentation 
// https://segdeha.com/es6-templates

// let a = 'a string'
// let b = "another string"
// let c = new String('don’t try this one at home')

// let d = `ooh, the new shiny`

// let e = `'"‘’“”`

// let f = `this
// is
// a
// string
// on
// multiple
// lines`

// -------------------------------------------------

// let g = 'everyone'
// console.log(`Hello, ${g}`)   // Hello, everyone

// -------------------------------------------------

// let h = 3
// let i = 4
// console.log(`${h} + ${i} = ${h + i}`)  // 3 + 4 = 7

// -------------------------------------------------

// let h = 1
// let i = 2

// function sum(a, b) {
//     return a + b
// }

// console.log(`${h} + ${i} = ${sum(h, i)}`)  // 1 + 2 = 3


// -------------------------------------------------
// let h = 1
// let i = 2
// function sum(a, b) {
//     return a + b
// }
// console.log(`${h} + ${i} = ${sum(h, i)}`)    // 1 + 2 = 3


// -------------------------------------------------
// function composeName(title, fname, lname, degree) {
//     return `${title} ${fname} ${lname}${
//         degree ? `, ${degree}`
//                : ''
//     }`
// }
// console.log(composeName("Mr.", "Pritanjan", "Baranwal", "B.Tech")) // Mr. Pritanjan Baranwal, B.Tech
// console.log(composeName("Mr.", "Pritanjan", "Baranwal"))  // Mr. Pritanjan Baranwal

// ! ---------------------------------------------------------------------------------------------------------------------------------
// ! new stuffs 
// ! NEED TO UNDERSTAND

// let simpleExample = (literals, ...substitutions) => {
//     return [literals[0], substitutions[0]].join('')
// }
// let who = 'everyone'
// let s = simpleExample`Hello, ${who}`
// console.log(s)   // Hello, everyone


// -----------------------------------------------------------------------------------------------------------------------------------
// let simpleExample = literals => ({
//     format: (...substitutions) => {
//         return [literals[0], substitutions[0]].join('')
//     }
// })
// let s = simpleExample`Hello, ${0}`.format('everyone')
// console.log(s);     // Hello, everyone


// ---------------------------------------------------------------------------------------------------------------------------------
// let simpleExample = literals => ({
//     format: (...substitutions) => {
//         return [literals[0], substitutions[0]].join('')
//     }
// })
// let greeting = simpleExample`Hello, ${0}`
// let s =greeting.format('everyone')
// console.log(s);          // Hello, everyone


// ---------------------------------------------------------------------------------------------------------------------------------
// let formatter = literals => {
//     return {
//         format: (...substitutions) => {
//             let output = []
//             for (let i = 0; i < literals.length; i += 1) {
//                 output.push(literals[i])
//                 output.push(substitutions[i])
//             }
//             return output.join('')
//         }
//     }
// }
// let greeting = formatter`Hello, ${0}. How are ${0}?`
// let s = greeting.format('everyone', 'You')
// console.log(s);         // Hello, everyone. How are You?


// ---------------------------------------------------------------------------------------------------------------------------------
// let formatter = literals => ({
//     format: (...substitutions) => {
//         return literals.reduce((accumulator, part, i) => {
//             return accumulator + substitutions[i - 1] + part
//         })
//     }
// })
// let greeting = formatter`Hello, ${0}. How are ${0}?`
// let s = greeting.format('everyone', 'you')
// console.log(s);             // Hello, everyone. How are You?

// ---------------------------------------------------------------------------------------------------------------------------------
// let formatter = (literals, ...keys) => {
//     return {
//         format: (...substitutions) => {
//             let output = []
//             for (let i = 0; i < literals.length; i += 1) {
//                 output.push(literals[i])
//                 output.push(substitutions[keys[i]])
//             }
//             return output.join('')
//         }
//     }
// }
// let greeting = formatter`Hello, ${0}. How are ${0}?`
// let s = greeting.format('everyone', 'we')
// console.log(s)          // Hello, everyone. How are everyone?

// ---------------------------------------------------------------------------------------------------------------------------------
// ? 16.1

// ---------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------