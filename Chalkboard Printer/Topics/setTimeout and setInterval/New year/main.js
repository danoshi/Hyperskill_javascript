let days = 5;

function greetings() {
  let count = days
  const intervalId = setInterval(() => {
    console.log(count)
    count--
    if (count === 0) {
      clearInterval(intervalId);
      console.log("Happy New Year!");
    }
  }, 1000);
}