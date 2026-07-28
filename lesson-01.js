//"use strict";

// Lesson 01 exercise: Running JavaScript three ways
// Clone the exercise repository for this course, https://github.com/Leon-Arno/JS-Exercises, to
// your computer.
// Make the copy your own. Inside the cloned folder, delete the `.git` folder to remove the
// connection to the original repository: run `rm -rf .git` on macOS and Linux, or `Remove-Item
// -Recurse -Force .git` in PowerShell on Windows.
// Run `git init` in the folder, create a new empty repository named `javascript-exercises` on
// your own GitHub account, connect it as the remote, and push. This is the same publishing
// flow you performed in the Git course.
// Create a branch named `lesson-01-exercise` and switch to it, then open `lesson-01.js`. The
// questions are already inside as comments; work through them in order, writing your answers
// directly beneath each one.

// TODO: Part one.
// Start the Node REPL and evaluate at least four arithmetic expressions of your own, using
// more than one operator across them. Copy the complete session transcript and paste it into
// `lesson-01.js` as a comment block where the question asks for it.
// PS C:\Users\Win11 Pro> node
//Welcome to Node.js v24.18.0.
//Type ".help" for more information.
//> 3+3
//6
//> 2*3
//6
//> 3-1
//2
//> 8/2
//4
//>

// TODO: Part two.
// Write a `console.log` line in `lesson-01.js` that prints a greeting, save the file
// deliberately, and run it with `node lesson-01.js`.

//* console.log("Hello programmers!");

// TODO: Part three.
// Change the greeting text, run the file again without saving, and observe that the output has
// not changed. Save and run once more, then describe in a one-sentence comment what happened
// and why.

//Answer:At first it repeat the same output , but after i save and run again it shows the new greeting
//because the file needs to be saved for Node to read the updated content.

// TODO: Part four.
// Run your greeting line in the Chrome DevTools Console. In a comment, record one way the
// experience matched Node and one way it differed.

//Answer: The experience matched Node in that both environments executed
//the JavaScript code and displayed the output in the console,
//but it differed in that the Chrome DevTools Console is part of a web browser and can interact with web pages,
//while Node is a standalone runtime for executing JavaScript outside of a browser context.

// TODO: Part five.
// From a folder that does not contain the file, deliberately run `node lesson-01.js` so that
// the terminal reports it cannot find the file. Paste that error transcript as a comment, then
// explain in one sentence how you resolved it.

//Answer://PS C:\Users\Win11 Pro\Documents> node lesson-01.js
//node:internal/modules/cjs/loader:1520
//  throw err;
//^
// I resolved the issue by navigating to the correct folder that contains the `lesson-01.js` file
//using the `cd` command in the terminal, and then running `node lesson-01.js` again.

// TODO: Save the file, commit your work with a clear message, push the branch, and open a pull
// request into your main branch.
// TODO: Submit the link to the pull request for review.
