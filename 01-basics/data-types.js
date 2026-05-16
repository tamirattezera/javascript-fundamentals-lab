// There are  7 data types

// Boolean

let data = false;

if (data) {
  console.log("Booleans rule!");
} else {
  console.log("Booleans are lame");
}

// null
let n = null;
console.log(n * 32);

// undefined

let a;
console.log(a + 2);

// number

let num1 = 10;
let num2 = 5;
let num3 = 3.69;
console.log(num1 + num2);
console.log(typeof num1);
console.log(typeof num3);
// string

// let name = "Tamirat";
// console.log(`Hi My name is ${name}`);
// console.log(typeof name);

// Symbol

let sym1 = Symbol("foo");
let sym2 = Symbol("foo");

console.log(sym1 === sym2);
console.log(String(sym1) === String(sym2));
console.log(typeof sym1);

// Object

let myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";

console.log(myCar.make);

// 1. NUMBER - Precision & Operations

// Task1

// let a = 10;
// let b = 5;

// Find: sum, difference, product, division, remainder

// function calculate(a, b) {
//   console.log("Sum:", a + b);
//   console.log("Difference:", a - b);
//   console.log("Product:", a * b);
//   console.log("Division:", a / b);
//   console.log("Remainder:", a % b);
// }
// calculate(10, 5)

function calculate(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Inputs must be numbers");
  }

  const result = {
    sum: a + b,
    difference: a - b,
    product: a * b,
    division: null,
    remainder: null,
  };

  if (b === 0) {
    result.division = "Cannot divide by zero";
    result.remainder = "Cannot divide by zero";
  } else {
    result.division = a / b;
    result.remainder = a % b;
  }

  return result;
}

console.log(calculate(10, 5));

//   if (b === 0) {
//     console.log("Division: Cannot divide by zero");
//   } else {
//     console.log("Division:", a / b);
//     console.log("Remainder:", a % b);
//   }

//   console.log("Sum:", a + b);
//   console.log("Difference:", a - b);
//   console.log("Product:", a * b);
// }

// // calculate(10, 0); // division edge case
// // calculate("10", 5); // type issue
// // calculate(-3, 7); // negative numbers
// calculate(0.1, 0.2); // precision issue

// Task 2
// Fix floating precision issue:
let result = Number((0.1 + 0.2).toFixed(2));
console.log(result);

// String - Manipulation & Parsing

// Tasks:
// - Convert to toUpperCase
// -Reverse a String
// - Get first char
// - Check length
// -Count Vowels
// -Capitalize first letter

const name = "tamirat";

function processString(str) {
  return {
    original: str,
    upper: str.toUpperCase(),
    reversed: str.split("").reverse().join(""),
    firstChar: str[0],
    length: str.length,
    vowels: countVowels(str),
    capitalized: str[0].toUpperCase() + str.slice(1),
  };
}

function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) count++;
  }

  return count;
}

console.log(processString(name));
console.log(24 > 3);
console.log(2 == "12");
console.log(0 == 2);
console.log(2.0 === 2);
console.log(2 > "john");
console.log(2 < "2");

let example = "Hello";
example = 42;
console.log(example);

// alert("Helllo");

let firstName = "Tamirat";
let lastName = "Tezera";

let fullName = firstName.concat(' ', lastName);
console.log(fullName);
