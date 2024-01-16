function clicked(number) { // Change this line!
    if (number === undefined) {      // Change this line!
        console.log("You clicked once");
    } else {
        console.log(`You clicked ${number} times!`); // Change this line!
    }
}

clicked();
clicked(5);