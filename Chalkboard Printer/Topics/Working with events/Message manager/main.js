// do not change the below lines
const messageManager = new MessageManager();

const messageSentListener = (message) => {
  console.log(`Message sent: ${message}`);
};

messageManager.on('messageSent', messageSentListener);
messageManager.sendMessage('Hello, world!');

// write your code below
messageManager.off('messageSent', messageSentListener);