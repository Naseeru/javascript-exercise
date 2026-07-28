"use strict";

// Lesson 02 exercise: Variables and data types
// In your exercise repository, create a branch named `lesson-02-exercise` and switch to it,
// then open `lesson-02.js`. The questions are inside as comments, and the file begins with the
// strict mode line. Work through the parts in order, beneath each question.

// TODO: Part one.
// Declare five variables that describe a small shop of your choosing, mixing `const` and `let`
// deliberately and naming everything in camelCase. Log each variable, and add a one-line
// comment justifying every choice between `const` and `let`.

//Answer: Here are the five variables:
//const shopName = "Brew Haven"; // const because the name of the shop is unlikely to change
//let numberOfEmployees = 5; // let because the number of employees can change over time
//const openingHour = 8; // const because the opening hour is fixed
//let closingHour = 20; // let because the closing hour might change seasonally
//const isOpenOnWeekends = true; // const because the shop's weekend status is unlikely to change
//console.log(shopName);
//console.log(numberOfEmployees);
//console.log(openingHour);
//console.log(closingHour);
//console.log(isOpenOnWeekends);

// TODO: Part two.
// Log the `typeof` result for each of your five variables, and additionally for `null` and for
// `undefined`. Note in a comment which one of these results is a famous historical bug of the
// language.

//Answer: Here are the `typeof` results:
//console.log(typeof shopName); // string
//console.log(typeof numberOfEmployees); // number
//console.log(typeof openingHour); // number
//console.log(typeof closingHour); // number
//console.log(typeof isOpenOnWeekends); // boolean
//console.log(typeof null); // object (this is the famous historical bug)
//console.log(typeof undefined); // undefined

// TODO: Part three.
// Declare one variable without assigning it a value, and a second variable set to `null` on
// purpose. Log both values and both `typeof` results, and state the difference between the two
// kinds of nothing in one comment sentence.

//Answer: Here are the two variables:
//const undeclaredValue;
//const nullItem = null;
//console.log(undeclaredValue);
//console.log(nullItem);
//console.log(typeof undeclaredValue);
//console.log(typeof nullItem);
// The difference is that `undefined` means a variable has been declared but not assigned a value,
//  while `null` is an intentional assignment indicating the absence of any object value.

// TODO: Part four.
// Convert the three provided string values to their intended types using `Number()` and
// `Boolean()`, and convert one number of your own to a string with `String()`. Log each result
// together with its `typeof`, and note in a comment which conversion would produce `NaN` if
// the string were not a clean number.

// * The three provided string values:
//const priceText = "4.50";
//const countText = "12";
//const flagText = "true";
//const price = Number(priceText);
//const count = Number(countText);
//const flag = Boolean(flagText);
//const myNumber = 42;
//const myNumberString = String(myNumber);
//console.log(price, typeof price);
//console.log(count, typeof count);
//console.log(flag, typeof flag);
//console.log(myNumberString, typeof myNumberString);
// The conversion that would produce `NaN` if the string were not a clean number is `Number(priceText)` and `Number(countText)`.

// TODO: Part five.
// The file ends with a short broken program that contains a reassigned `const`, an assignment
// to a variable that was never declared, and a variable read before its declaration line. Run
// it, read each error message carefully, repair all three problems, and describe each repair
// in one comment line.

// ! This broken program crashes on purpose, one error at a time.
// ! Keep it commented until you reach this part, then uncomment and repair:
const bakeryName = "Maison Sarah";
//bakeryName = "The Corner Bakery"; this line was removed because `bakeryName` is a `const` and cannot be reassigned
// openingHour = 7;
let openingHour = 7; // this was not declared with an variable , so it has to be declared with let
console.log(bakeryName);
console.log(openingHour);
//console.log(loafCount); this was not in right order,

let loafCount = 12;
console.log(loafCount);

// TODO: Part six.
// Two variables, `a` and `b`, hold different values. Swap their contents using a third,
// temporary variable, and log both afterwards to prove the swap succeeded. This is the oldest
// exercise in programming, and it still earns its place.

//Answer:
//let a = "love";
//let b = "clear";

//let temp = a;
//a = b;
//b = temp;
//console.log("a:", a);
//console.log("b:", b);

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
