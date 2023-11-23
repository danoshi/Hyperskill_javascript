const fs = require('fs'); //do not change this line

const dataAsync = fs.readFile('main.js', 'utf-8' , (err, data) => {
    console.log(data.split(' ').slice(1)[0]);
}); //you can delete this function at all

const dataSync = fs.readFileSync('main.js', 'utf-8');
console.log(dataSync.split(' ').slice(0)[0]);
//or you can delete two lines above

console.log('Finish');