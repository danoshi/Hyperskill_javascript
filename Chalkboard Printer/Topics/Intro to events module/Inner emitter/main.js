const EventEmitter = require('events'); //do not change this line!

const emitter = new EventEmitter();

emitter.on('main', () => {
    console.log('It is main event!')
})

emitter.on('initial', (eventName) => {
  emitter.emit('main')
});

emitter.emit('initial', 'main');