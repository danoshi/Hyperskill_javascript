function checkEvenOrOdd(numbers) {
    // write your code here
    for (let n of numbers){
        if (n % 2 === 0 && n !== 0){
            console.log("even")
        }else if (n % 2 !== 0) {
            console.log("odd")
        }else {
            break;
        }
    }
}
