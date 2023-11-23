const fs = require('fs'); //do not change this line

const data = fs.readFile('main.js', 'utf-8', (err, data) => {
    console.log(data.split(' ').slice(1)[0]);
});