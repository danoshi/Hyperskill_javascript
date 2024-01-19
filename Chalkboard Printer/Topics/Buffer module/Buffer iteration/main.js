const { Buffer } = require('buffer');

const buffer = Buffer.alloc(4, "word", "utf-8");

for (let buff of buffer) {
    console.log(buff)
}