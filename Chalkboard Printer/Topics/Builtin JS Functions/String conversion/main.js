let data = 'word_123something_other_word'
let test = data.replace(/[^0-9]/g, "")
console.log(parseFloat(test)) //replace the ellipsis with the desired value