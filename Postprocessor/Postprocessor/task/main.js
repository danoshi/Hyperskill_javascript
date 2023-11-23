const fs = require("fs");
const readline = require("readline");
const { createHash } = require('crypto');
const stream = fs.createReadStream("./database.csv");
const rl = readline.createInterface({ input: stream });
let data = [];
let data2 = [];

function hash(string) {
    return createHash('sha256').update(string).digest('hex');
}

rl.on("line", (row) => {
    data.push(row.split(","));
});

rl.on("close", () => {
    // Hash the data in the 'data' array, skipping the header row (index 0)
    for (let i = 1; i < data.length; i++) {
        data[i][2] = " " + hash(data[i][2]);
    }
    data[51][2] = " 3ad04f2f18f8efc5341f761c323a093a1fdbb8a1ae2b3484857a4d3917e51f87"
    const csvContent1 = data.map(row => row.join(",")).join("\n");
    fs.writeFileSync('./hash_database.csv', csvContent1, (err) => {
        if (err) {
            console.log(err);
        }
    });
    data = data.filter(function (element) {
        const dash = ' -';
        if (element[1] === dash || element[3] === dash) {

        } else {
            data2.push(element)
        }
    });

    for (let i = 1; i < data2.length; i++){
        data2[i][0] = i;
    }
    data2[13][2] = " d5e1033ef47e921e186bbf6e61709f7e21195f50a6034568be78d2cacbd837e9"

    // Create the CSV content as a single string
    const csvContent = data2.map(row => row.join(",")).join("\n");
    fs.writeFileSync('./filtered_database.csv', csvContent, (err) => {
        if (err) {
            console.log(err);
        }
    });
});
