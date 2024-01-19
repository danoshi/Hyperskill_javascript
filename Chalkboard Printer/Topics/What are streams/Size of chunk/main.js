const fs = require("fs"); 

function main() {
    const readerStream = fs.createReadStream("./data.txt", {
        highWaterMark: 100
    });
}