const readline = require('readline');

// Write your code here
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.setPrompt('');
rl.prompt();
rl.on('line', (input) => {
    let i = Number(input);
    if (i % 2 === 0){
        console.log(`Enter a number: Even`);
    } else {
        console.log(`Enter a number: Odd`);
    }
    rl.close();
});