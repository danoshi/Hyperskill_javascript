// Welcome to the Chalkboard Printer!
const input = require('sync-input');

// These variables are already declared for you.
// Looks like we made a mistake and used 'var' instead of 'let'!
// Remember it's bad practice to use 'var', so let's change all of them to 'let'.

// We have also imported the 'sync-input' package for you.
// You will use this in later stages.
// This package allows you to get user input.
// Like so:

function Output_Message(name, surname, message){
    let repeats = Number(input("Enter number of repeats: "))
    for (let i = 0; i < repeats; i++){
         console.log("This is " + name + " " + surname + " and " + message)
    }
}
let name = input("Enter name: ");
let surname = input("Enter surname: ");
let message = input("Enter message: ");

Output_Message(name, surname, message)
