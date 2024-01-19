const readline = require('readline');

// Write your code here
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.setPrompt('');
rl.prompt();
rl.on('line', (input) => {

    let i = input.split(' ');
    console.log(`Your name is ${i[0]}, you are ${i[1]} years old, and your favorite programming language is ${i[2]}.`);
    rl.close();
});