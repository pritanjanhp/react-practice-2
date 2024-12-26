// ? Rest and spread

// ! Rest
// ! the rest operator consists of prepending a function parameter with three dots.
// ! The rest parameter combines multiple parameters into a single variable that is expressed in the function scope as an array.
// ! the rest parameted must be the last argument to teh function .

function rest(sep, ...values) {
  return values.join(sep);
}

console.log(rest("|", "one", "two", "three")); // one|two|three



// ! Spread
// ! The spread operator consists of prepending three dots to an array when passing it as a parameter to a function.
// ! This spreads the array values across the available named parameters.

function sum(a, s) {
  return a + s;
}

const nums = [7, 42, 99]; 
console.log(sum(...nums))  // logs 49
// 3rd value of the array in the above example is ignored because there is no parameter to pick it up

