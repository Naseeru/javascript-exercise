"use strict";

// Lesson 06 exercise: Arrays and loops
// In your exercise repository, create a branch named `lesson-06-exercise` and switch to it,
// then open `lesson-06.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Build an array of at least five menu item names. Log the whole array, the first item, the
// last item read through `length` minus 1, and the array's length.

//Answer:
/* const menuItems = [
  "Croissant",
  "Pain au Chocolat",
  "Baguette",
  "Eclair",
  "Sourdough Loaf",
];

console.log("Full Menu:", menuItems);
console.log("First Item:", menuItems[0]);
console.log("Last Item:", menuItems[menuItems.length - 1]);
console.log("Array Length:", menuItems.length); */

// TODO: Part two.
// Grow and shrink the menu with one `push`, one `unshift`, one `pop`, and one `shift`, logging
// the array after each step, and note in a comment which end of the array each method touched.

//Answer:
/* const menuItems = [
  "Croissant",
  "Pain au Chocolat",
  "Baguette",
  "Eclair",
  "Sourdough Loaf",
];

menuItems.push("Brioche");
console.log("After push:", menuItems);
menuItems.unshift("Tartine");
console.log("After unshift:", menuItems);
const poppedItem = menuItems.pop();
console.log("After pop:", menuItems);
const shiftedItem = menuItems.shift();
console.log("After shift:", menuItems);
*/

// TODO: Part three.
// Print every menu item twice, first with a counting `for` loop that uses the index, then with
// a `for...of` loop, and add a one-line comment on when you would choose each form.

//Answer:

/* const menuItems = [
  "Croissant",
  "Pain au Chocolat",
  "Baguette",
  "Eclair",
  "Sourdough Loaf",
];

console.log("--- Using Counting for Loop ---");
for (let i = 0; i < menuItems.length; i++) {
  console.log(`Item #${i + 1}: ${menuItems[i]}`);
}

console.log("\n--- Using for...of Loop ---");
for (const item of menuItems) {
  console.log(`Item: ${item}`);
} */

// TODO: Part four.
// Using the provided prices array, build display strings with `map`, keep the items under five
// euros with `filter`, and fetch the first item over ten euros with `find`, logging each
// result. Add a comment stating what `forEach` would have returned in their place, and why
// that is the well-known trap.

// * The provided prices:
/* const prices = [4.5, 12, 3.2, 8];
const displayStrings = prices.map((price) => `${price.toFixed(2)}€`);
console.log("Display strings (map):", displayStrings);

const budgetItems = prices.filter((price) => price < 5);
console.log("Items under 5€ (filter):", budgetItems);

const firstExpensive = prices.find((price) => price > 10);
console.log("First item over 10€ (find):", firstExpensive);
*/
// TODO: Part five.
// Loop over the provided artists array and log a two-line card for each artist using template
// literals. Then add one artist of your own invention to the data and run the file again,
// noting in a comment what you did not have to change.

// * The provided artists:
/* const artists = [
  "Pinkfong",
  "Adriano Celentano",
  "Asake",
  "Miyagi and Andy Panda",
  "Johnny Cash",
];
for (const artist of artists) {
  console.log(`ARTIST CARD
Name: ${artist}
-------------------`);
} */

// TODO: Part six.
// Assign the menu to a second variable, push a new item through the second name, and log both
// variables to demonstrate the shared reference. Then create a spread copy, change the copy,
// and log both lengths to prove the original survived.

//Answer:
/* const menu = ["Croissant", "Pain au Chocolat", "Baguette"];

const menuReference = menu;
menuReference.push("Eclair");

console.log("--- Reference Copy Demonstration ---");
console.log("Original Menu:", menu);
console.log("Reference Menu:", menuReference);
const menuCopy = [...menu];
menuCopy.push("Sourdough Loaf");
menuCopy.push("Brioche");

console.log("\n--- Spread Copy Demonstration ---");
console.log("Original Menu Length:", menu.length);
console.log("Copied Menu Length:", menuCopy.length);
*/
// TODO: Part seven.
// The counting classics. Implement FizzBuzz in full: loop from 1 to 100, printing Fizz for
// multiples of 3, Buzz for multiples of 5, FizzBuzz for both, and the number itself otherwise,
// reusing your single-number logic from the conditionals exercise. Then, with loops over the
// provided numbers array, compute the sum and find the largest value without library helpers.

// * The provided numbers for the sum and the largest:

/* console.log("--- FizzBuzz (1 to 100) ---");

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

const numbers = [12, 5, 41, 8, 33, 2, 27];
let totalSum = 0;
for (const num of numbers) {
  totalSum += num;
}

let largest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}

console.log("\n--- Array Calculations ---");
console.log("Numbers:", numbers);
console.log("Sum:", totalSum);
console.log("Largest:", largest); */

// TODO: Part eight.
// The string classics that waited for loops. Reverse a string with a loop that walks it
// backwards by index. Count its vowels with a loop and `includes` against a vowels array. As a
// stretch, use your reverser to build a palindrome check, and test it on three words, ignoring
// case with `toLowerCase`.

//Answer:
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log("--- String Reversal ---");
console.log("Original: 'croissant'");
console.log("Reversed:", reverseString("croissant"));

function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelCount = 0;

  const normalizedStr = str.toLowerCase();

  for (let i = 0; i < normalizedStr.length; i++) {
    if (vowels.includes(normalizedStr[i])) {
      vowelCount++;
    }
  }
  return vowelCount;
}

console.log("\n--- Vowel Count ---");
console.log("Vowels in 'Maison Sarah':", countVowels("Maison Sarah"));

function isPalindrome(str) {
  const cleanStr = str.toLowerCase();
  const reversedStr = reverseString(cleanStr);

  return cleanStr === reversedStr;
}

console.log("\n--- Palindrome Tests ---");
const testWords = ["Racecar", "Bakery", "Madam"];

for (const word of testWords) {
  console.log(`Is '${word}' a palindrome? ->`, isPalindrome(word));
}

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
