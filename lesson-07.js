"use strict";

// Lesson 07 exercise: Objects
// In your exercise repository, create a branch named `lesson-07-exercise` and switch to it,
// then open `lesson-07.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Model a single menu item as an object with at least four properties of mixed types,
// including one boolean. Log two properties with dot notation, then log one property through
// bracket notation with the key held in a variable, and note in a comment why the brackets
// were required in that case.

//Answer:
/*
const menuItem = {
  name: "Almond Croissant",
  price: 4.5,
  inStock: true,
  allergens: ["tree nuts", "gluten", "dairy"],
};
console.log("Item Name:", menuItem.name);
console.log("Is In Stock?:", menuItem.inStock);
const keyToAccess = "price";
console.log("Price via key variable:", menuItem[keyToAccess]);
*/
// TODO: Part two.
// Give the item a `describe` method that returns one sentence built from the object's own
// properties through `this`, and log the result of calling it.

//Answer:

/* 
const menuItem = {
  name: "Almond Croissant",
  price: 4.5,
  inStock: true,
  allergens: ["tree nuts", "gluten", "dairy"],
  describe() {
    const availability = this.inStock
      ? "currently in stock"
      : "currently out of stock";
    return `The ${this.name} costs ${this.price.toFixed(2)}€ and is ${availability}.`;
  },
};
console.log(menuItem.describe());
*/
// TODO: Part three.
// Build an array of at least five menu item objects, and walk it with `for...of`, logging one
// formatted line per item.

//Answer:
/* const menu = [
  { name: "Croissant", price: 2.5, category: "Pastry", inStock: true },
  { name: "Pain au Chocolate", price: 3.0, category: "Pastry", inStock: true },
  { name: "Sourdough Loaf", price: 5.5, category: "Bread", inStock: false },
  { name: "Eclair", price: 4.25, category: "Pastry", inStock: true },
  { name: "Baguette", price: 1.8, category: "Bread", inStock: true },
];

for (const item of menu) {
  const status = item.inStock ? "In Stock" : "Out of Stock";
  console.log(
    `[${item.category}] ${item.name} - $${item.price.toFixed(2)} (${status})`,
  );
} */

// TODO: Part four.
// Put the callback methods to work on the data: log the names of all vegetarian items by
// combining `filter` and `map`, and fetch the first item cheaper than three euros with `find`.
// Add a comment stating what `find` returns when nothing matches.

//Answer:
/*
const menuItems = [
  { name: "Ham & Cheese Croissant", price: 4.50, isVegetarian: false },
  { name: "Almond Croissant", price: 3.80, isVegetarian: true },
  { name: "Traditional Baguette", price: 1.80, isVegetarian: true },
  { name: "Spinach Quiche", price: 5.20, isVegetarian: true },
  { name: "Eclair", price: 3.50, isVegetarian: true }
];


const vegetarianNames = menuItems
  .filter((item) => item.isVegetarian)
  .map((item) => item.name);

console.log("Vegetarian Items:", vegetarianNames);

const cheapItem = menuItems.find((item) => item.price < 3.00);

console.log("First item under 3€:", cheapItem); 
*/
// TODO: Part five.
// Take one menu item and log its keys, its values, and finally every pair through a `for...of`
// loop over its entries with a destructured pair, formatted as the key, a colon in the output
// text, and the value.

//Answer:

/* 
const menuItem = {
  name: "Almond Croissant",
  price: 4.5,
  category: "Pastry",
  inStock: true,
};

console.log("Keys:", Object.keys(menuItem));

console.log("Values:", Object.values(menuItem));

console.log("\n--- Entries Loop ---");
for (const [key, value] of Object.entries(menuItem)) {
  console.log(`${key}: ${value}`);
} */

// TODO: Part six.
// Assign one item to a second variable, change the price through the second name, and log the
// first to demonstrate the shared reference. Then build a spread copy that overrides only the
// price, and log both objects to prove they now differ in exactly that property.

//Answer:
/*
const originalItem = {
  name: "Almond Croissant",
  price: 4.5,
  category: "Pastry",
  inStock: true,
};
const itemReference = originalItem;
itemReference.price = 5.0;

console.log("--- Reference Copy ---");
console.log("Original Item Price:", originalItem.price);
console.log("Reference Item Price:", itemReference.price);

const itemCopy = {
  ...originalItem,
  price: 6.25,
};

console.log("\n--- Spread Copy (Override Price) ---");
console.log("Original Object:", originalItem);
console.log("Copied Object:  ", itemCopy);
*/
// TODO: Part seven.
// As a stretch, build the classic word frequency counter: split the provided sentence into
// words and walk them with a loop, using each word as a bracket-notation key on a counter
// object and adding one per sighting. Log the finished counter, and if the sort extension
// caught your interest, log its entries ordered so that the most frequent word comes first.

// * The provided sentence for the word frequency counter:
/*
const sentence =
  "the quick brown fox jumps over the lazy dog the fox sleeps and the dog dreams";
const words = sentence.toLowerCase().split(/\s+/);
const wordCounts = {};

for (const word of words) {
  wordCounts[word] = (wordCounts[word] || 0) + 1;
}

console.log("--- Word Counts Object ---");
console.log(wordCounts);
const sortedEntries = Object.entries(wordCounts).sort((entryA, entryB) => {
  return entryB[1] - entryA[1];
});

console.log("\n--- Words Ordered by Frequency ---");
for (const [word, count] of sortedEntries) {
  console.log(`${word.padEnd(8)} : ${count}`);
}
*/
// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
