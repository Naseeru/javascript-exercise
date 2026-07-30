"use strict";

// Lesson 04 exercise: Operators and conditionals
// In your exercise repository, create a branch named `lesson-04-exercise` and switch to it,
// then open `lesson-04.js`, where the questions wait as comments. The file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// The file lists ten expressions that mix coercion, strict comparison, and logical
// combination, among them `3 === "3"`, `1 + true`, and `!(5 > 2)`. Write your predicted result
// as a comment beside each expression before running the file, then run it and correct any
// misses, leaving both the prediction and the actual result visible.

// * The provided expressions, write your prediction beside each before running:
console.log(3 === "3"); // prediction: False
console.log(3 == "3"); // prediction: true
console.log("5" - 1); // prediction: 4
console.log("5" + 1); // prediction: "51"
console.log(1 + true); // prediction: 2
console.log(10 >= 10); // prediction: true
console.log(!(5 > 2)); // prediction: false
console.log(4 !== "4"); // prediction: true
console.log("b" > "a"); // prediction: true
console.log(0 === -0); // prediction: true

// TODO: Part two.
// Write one `if` statement with an `else` branch on a variable of your choosing. Run the file
// twice with different values so that each branch has printed at least once, and record each
// run's output in a comment.

//Answer:
const makeWish = 10;
if (makeWish >= 11) {
  console.log("Everyone get what he deserve");
} else {
  console.log("Everything is balanced now");
}

// TODO: Part three.
// Build an `else if` chain for order pricing: more than 12 items produces one message, more
// than 6 another, and everything else a third. Run it with values that reach every branch, and
// add a comment explaining why the most specific question must be asked first.

//Answer:

const itemQuantity = 15;

if (itemQuantity > 13) {
  console.log("Bulk order discount applied! You qualify for 20% off.");
} else if (itemQuantity > 6) {
  console.log("Standard discount applied! You qualify for 10% off.");
} else {
  console.log("Standard pricing applied.");
}

// TODO: Part four.
// For each of the eight provided values, which include `0`, `"0"`, an empty string, and a
// single space, predict in a comment whether it is truthy or falsy. Verify each prediction
// with `Boolean()` and correct your misses.

// * The eight provided values:
const courtValues = [
  false, // Boolean false
  0, // Number 0
  "0", // Non empty string containing "0"
  "", // Empty string
  " ", // Single Space string
  "bread", // string
  null, // Null
  undefined, // undefined
];

// TODO: Part five.
// Rewrite the provided day-based `if` chain as a `switch` statement with a `default` case and
// a `break` in every case, and confirm that it prints the same answers for three test days.

// * The provided day-based if chain, rewrite it as a switch beneath it:
// Provided value (change to test different days)
const day = "Sunday";

switch (day) {
  case "Saturday":
    console.log("Open 7:00 to 14:00");
    break;

  case "Sunday":
    console.log("Open 8:00 to 12:00");
    break;

  case "Monday":
    console.log("Closed today");
    break;

  default:
    console.log("Open 7:00 to 18:00");
    break;
}

// TODO: Part six.
// The file ends with a short broken program that contains an assignment where a comparison was
// intended, and a `switch` with a missing `break`. Run it, observe both incorrect behaviors,
// repair both, and describe each repair in one comment line.

// * The provided broken program, run it, observe both incorrect behaviors, then repair both:
let shopStatus = "closed";

// 1. Fixed assignment in condition: changed '=' to strict equality '==='
if (shopStatus === "open") {
  console.log("Welcome in");
}

const size = "M";

switch (size) {
  case "S":
    console.log("Small");
    break; // 2. Fixed fall-through: added missing break statement to case "S"
  case "M":
    console.log("Medium");
    break; // 2. Fixed fall-through: added missing break statement to case "M"
  case "L":
    console.log("Large");
    break;
  default:
    console.log("Unknown size");
}

// TODO: Part seven.
// Two classic exercises close the lesson. First, the leap year checker: a year is a leap year
// when it is divisible by 4 and not by 100, unless it is also divisible by 400. Implement the
// rule with the remainder operator and logical operators, and test it against 2024, 1900, and
// 2000. Second, FizzBuzz for a single number: for one number variable, print Fizz when it is
// divisible by 3, Buzz when it is divisible by 5, FizzBuzz when it is divisible by both, and
// the number itself otherwise. The loops lesson scales this to one hundred.

//Answer:

function checkLeapYear(year) {
  // Divisible by 4 AND NOT 100, UNLESS also divisible by 400
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  if (isLeapYear) {
    console.log(`${year} is a leap year.`);
  } else {
    console.log(`${year} is NOT a leap year.`);
  }
}
checkLeapYear(2024);
checkLeapYear(1900);
checkLeapYear(2000);

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
