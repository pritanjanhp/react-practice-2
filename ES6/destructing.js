// ! object destructing

// const fruit = {
//     kind: 'Apple',
//     color: 'Red'
// }
// let { kind, color } = fruit
// console.log(kind, color) // logs 'Apple' 'Red'


// ! Object destructuring is commonly used in React components to pull pieces of data from the props object

// class List extends Component {
//     render() {
//         const {a} = this.props
//         return (
//             <ul>
//                 {a.map((i) => <li>{i}</li>)}
//             </ul>
//         )
//     }
// }



// ! array destructing

// const fruit = [ 'Apple', 'Red' ]
// let [ kind, color ] = fruit
// console.log(kind, color) // 'Apple' 'Red'


// ! it is used to extract the information from the captured string from a regular expression match

// const str = 'pritanjanbaran03.hp@gmail.com'
// const rgx = /\@(\w+\.\w+)/
//// ignore the word b4 @
// // note: we ignore the first return value
// let [, match] = str.match(rgx) || []
// console.log(match) // logs 'knowles.com'


// ! swap 2 varaible
// Destructuring elimintates the need to use a temporary variable to do this.
// In ES6:

let a = 1
let b = 2
console.log(a, b); // logs 1 2
[ b, a ] = [ a, b ]
console.log(a, b) // logs 2 1

