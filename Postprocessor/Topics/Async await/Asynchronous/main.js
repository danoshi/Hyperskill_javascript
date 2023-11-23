// Write code below this line 

async function squareNumber(number) {
 return number*number
}

squareNumber(4)
  .then((result) => console.log(result))
    .catch((error) => console.log(error));

// Write code above this line