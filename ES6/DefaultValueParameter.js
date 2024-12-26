// we can declare default values for parameters passed into a function.
function myFun(foo = 42) {
    console.log(foo)            //  42
}
myFun()

// we can also assign default values when using destructuring assigment on objects.
const { foo = 42, bar = 'forty two' } = { foo: 79 }
console.log(foo, bar)           // 79 'forty two'
