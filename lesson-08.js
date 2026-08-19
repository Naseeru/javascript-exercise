"use strict";

// Lesson 08 exercise: Classes
// In your exercise repository, create a branch named `lesson-08-exercise` and switch to it,
// then open `lesson-08.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Write an `Artist` class with a constructor that receives a name, a genre, and a total
// runtime, and a `describe` method that returns one sentence built from the instance's own
// properties through `this`. Create two instances with `new` and log both descriptions.

//Answer:
/*
class Artist {
  constructor(name, genre, totalRuntime) {
    this.name = name;
    this.genre = genre;
    this.totalRuntime = totalRuntime;
  }

  describe() {
    return `${this.name} is a ${this.genre} artist with a total discography runtime of ${this.totalRuntime} minutes.`;
  }
}

const artist1 = new Artist("Asake", "Afrobeats", 185);
const artist2 = new Artist("Pinkfong", "Children's Music", 420);

console.log(artist1.describe());
console.log(artist2.describe());
*/

// TODO: Part two.
// The file provides the artists as an array of plain objects. Loop over it with `for...of`,
// create an `Artist` instance from each object with `new`, collect the instances into a new
// array with `push`, and log every description with a second loop or `forEach`.

//Answer:

// * The artists as plain objects, provided:

/*
class Artist {
  constructor(name, genre, total) {
    this.name = name;
    this.genre = genre;
    this.total = total;
  }

  describe() {
    return `${this.name} plays ${this.genre} with a total runtime of ${this.total}.`;
  }
}

const artistData = [
  { name: "Pinkfong", genre: "Children's music", total: "11:31" },
  { name: "Adriano Celentano", genre: "Italian pop", total: "20:52" },
  { name: "Asake", genre: "Afrobeats", total: "14:08" },
  { name: "Miyagi and Andy Panda", genre: "Hip-hop", total: "16:21" },
  { name: "Johnny Cash", genre: "Country", total: "15:40" },
];

const artistInstances = [];

for (const rawArtist of artistData) {
  const instance = new Artist(rawArtist.name, rawArtist.genre, rawArtist.total);
  artistInstances.push(instance);
}

artistInstances.forEach((artist) => {
  console.log(artist.describe());
});
*/

// TODO: Part three.
// The file contains three short snippets: a class call that is missing `new`, an arrow
// function used as a method that reads `this`, and a correct call. Predict the outcome of each
// in a comment before running, then verify one snippet at a time and correct your misses,
// leaving both prediction and result visible.

//Answer:

// * Three snippets. Predict each outcome in a comment, then verify one at a time.
// ! Snippet one, a class call missing new. Uncomment after part one, predict first:
// const broken = Artist("Pinkfong", "Children's music", "11:31");

/*
  PREDICTION 1:
  Will throw a TypeError: "Class constructor Artist cannot be invoked without 'new'".
  ES6 class constructors are strict and cannot be invoked like regular functions.
*/
/*
try {
  const broken = Artist("Pinkfong", "Children's music", "11:31");
  console.log(broken);
} catch (error) {
  console.log("Snippet 1 Result:", error.message);
}
*/
// ! Snippet two, an arrow function used as a method that reads this:
// const single = { title: "Hurt", artist: "Johnny Cash", describe: () => `${this.title} by ${this.artist}` };
// console.log(single.describe());

/*
  PREDICTION 2:
  Will output "undefined by undefined".
  Arrow functions do not bind their own `this`. Instead, they inherit `this` 
  lexically from the surrounding scope (here, global/module scope), where 
  `title` and `artist` do not exist on `this`.
*/
/*
const single = {
  title: "Hurt",
  artist: "Johnny Cash",
  describe: () => `${this.title} by ${this.artist}`,
};

console.log("Snippet 2 Result:", single.describe());
*/
// * Snippet three, the correct call. Uncomment after part one:
// console.log(new Artist("Asake", "Afrobeats", "14:08").describe());

/*
  PREDICTION 3:
  Will correctly instantiate an Artist instance and call its `.describe()` method, 
  returning: "Asake plays Afrobeats with a total runtime of 14:08."
*/
/*
console.log(
  "Snippet 3 Result:",
  new Artist("Asake", "Afrobeats", "14:08").describe(),
);
*/

// TODO: Part four.
// Write a `FeaturedArtist` class that extends `Artist`, adds a blurb property through a
// constructor that calls `super` first, and overrides `describe` so that it builds on the
// superclass version through `super.describe()`. Promote one artist and log the result.

//Answer:
/*
class Artist {
  constructor(name, genre, total) {
    this.name = name;
    this.genre = genre;
    this.total = total;
  }

  describe() {
    return `${this.name} plays ${this.genre} with a total runtime of ${this.total}.`;
  }
}

class FeaturedArtist extends Artist {
  constructor(name, genre, total, blurb) {
    super(name, genre, total);
    this.blurb = blurb;
  }

  describe() {
    return `${super.describe()} Spotlight: ${this.blurb}`;
  }
}

const promotedArtist = new FeaturedArtist(
  "Asake",
  "Afrobeats",
  "14:08",
  "Chart-topping hitmaker taking Afrobeats worldwide!",
);

console.log(promotedArtist.describe());
*/

// TODO: Part five.
// The file ends with a constructor function and two prototype method assignments, working code
// in the pre-2015 style. Do not rewrite it. Above each line, add a comment naming its
// equivalent in class syntax, then confirm by running that its behavior matches your `Artist`
// class.

// * Working pre-2015 code, provided. Do not rewrite it, annotate it:
function ArtistOld(name, genre) {
  this.name = name;
  this.genre = genre;
}
ArtistOld.prototype.describe = function () {
  return `${this.name}, ${this.genre}`;
};
ArtistOld.prototype.tag = function () {
  return `#${this.genre.toLowerCase().replaceAll(" ", "-").replaceAll("'", "")}`;
};

// TODO: Part six.
// As a stretch, add a static method `Artist.named` that receives an array of instances and a
// name and returns the matching instance using `find`, and log the description of the instance
// it returns. The `get` keyword from the extension is your alternative if getters caught your
// interest.

//Answer:
/*
class Artist {
  constructor(name, genre, total) {
    this.name = name;
    this.genre = genre;
    this.total = total;
  }

  describe() {
    return `${this.name} plays ${this.genre} with a total runtime of ${this.total}.`;
  }

  get summary() {
    return `[${this.genre.toUpperCase()}] ${this.name}`;
  }

  static named(instances, targetName) {
    return instances.find((artist) => artist.name === targetName);
  }
}

const artistsList = [
  new Artist("Pinkfong", "Children's music", "11:31"),
  new Artist("Adriano Celentano", "Italian pop", "20:52"),
  new Artist("Asake", "Afrobeats", "14:08"),
  new Artist("Miyagi and Andy Panda", "Hip-hop", "16:21"),
  new Artist("Johnny Cash", "Country", "15:40"),
];
const foundArtist = Artist.named(artistsList, "Asake");

console.log("--- Static Method Result ---");
if (foundArtist) {
  console.log(foundArtist.describe());
  console.log("Summary Getter:", foundArtist.summary);
} else {
  console.log("Artist not found.");
}
*/
// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
