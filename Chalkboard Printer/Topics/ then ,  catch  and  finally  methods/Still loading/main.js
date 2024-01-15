function loader(value) {
    const promise = new Promise(function(resolve, reject){
        if (value === "true"){
            resolve("The info has loaded.");
        } else {
            reject("Please, try again later.");
        }
    });
   return promise
       .then(console.log)
       .catch(console.log)
       .finally(() => console.log("Hello, Mr. Smith!"))
}