"use strict";

// Lesson 03 exercise: Strings and numbers
// In your exercise repository, create a branch named `lesson-03-exercise` and switch to it,
// then open `lesson-03.js`, where the questions wait as comments. Work beneath each question
// in order.

// TODO: Part one.
// Declare variables for a shop name, an opening hour, and a closing hour, then log one
// welcoming sentence built as a single template literal that uses all three.

//answer:
//const shopName = "Nas Coffee";
//const openingHour = 8;
//const closingHour = 15;
//const greeting = `Welcome to ${shopName}! we are open ${openingHour}:00 am  to ${closingHour}:00 pm daily `;
//console.log(greeting);

// TODO: Part two.
// The file provides a messy string with surplus spaces at both ends, the wrong case, and one
// word that needs replacing. Apply the methods from this lesson, chained or in sequence, to
// log the cleaned version, and add a comment naming each method you used and the job it
// performed.

// * The provided messy string:
//const messy = "   Maison   Sarah, fresh bread daily   ";
//const cleaned = messy.trim().replace(/\s+/g, " ");

//console.log(cleaned);
//I  used the .trim() method to remove surplus whitespaces from both ends of the string
// .replace() remove the multiple consecutive spaces with a single spaces

// TODO: Part three.
// Using the provided product string, log its length, the position at which a given word
// begins, and a slice containing exactly that word. Then split the provided comma-separated
// list and log the resulting pieces.

// * The provided product string and comma-separated list:
const product = "Sourdough Loaf, whole grain";
const flavorList = "rye,spelt,wheat,olive";

const productLength = product.length;
console.log("Length:", productLength);

const targetWord = "whole";
const wordIndex = product.indexOf(targetWord);
console.log(`Index of "${targetWord}":`, wordIndex);

const extractedWord = product.slice(wordIndex, wordIndex + targetWord.length);
console.log("Extracted word:", extractedWord);

const flavors = flavorList.split(",");
console.log("Flavors array:", flavors);

// TODO: Part four.
// From the net price and tax rate in the file, calculate the final price and log it inside a
// template literal, formatted to two decimal places. Add a comment explaining why the
// formatting step must come last.

// * The provided net price and tax rate:
const netPrice = 4.0;
const taxRate = 0.07;

const rawFinalPrice = netPrice * (1 + taxRate);

const finalPriceFormatted = rawFinalPrice.toFixed(2);

console.log(`The final price including tax is $${finalPriceFormatted}.`);

// TODO: Part five.
// Using the random recipe from this lesson, log a random whole number from 1 to 6. Then adapt
// the recipe to produce a number from 10 to 20, and explain your adaptation in a comment.

//Answer:
const dieRoll = Math.floor(Math.random() * 6) + 1;
console.log("Die roll (1-6):", dieRoll);

const min = 10;
const max = 20;
const range = max - min + 1;

const randomNumber = Math.floor(Math.random() * range) + min;
console.log("Random number (10-20):", randomNumber);

// TODO: Part six.
// Open the MDN String reference, choose one method this lesson did not cover, and use it
// correctly on a string of your choice. In a comment, cite the method's name and describe what
// it does in one sentence of your own words.

//Answer:
const bannerText = "Fresh Pastries! ";
const promotionalBanner = bannerText.repeat(3);
console.log(promotionalBanner);

// TODO: Part seven.
// Two classic exercises close the lesson. First, build a username generator: from a first name
// and a last name held in variables, produce a lowercase username in the pattern of first
// initial followed by full last name, such as mustermann. Second, write a mad-libs story:
// declare four variables, an adjective, a noun, a verb, and a place, and log one short,
// ridiculous story built from a single template literal that uses all four.

//Answer:
const firstName = "Nasir Sani";
const lastName = "Ahmed";

const username = (firstName.charAt(0) + lastName).toLowerCase();

console.log("Generated Username:", username);

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
