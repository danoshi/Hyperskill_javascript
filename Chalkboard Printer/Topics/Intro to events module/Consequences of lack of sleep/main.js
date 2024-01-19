const EventEmitter = require('events'); //do not change this line!

const emitter = new EventEmitter();

emitter.on('greeting', (name) => {
  console.log(`Good morning, ${name}!`); // this line is corrupted
});

const userName = 'Boris';

emitter.emit("greeting", userName); // this line is corrupted