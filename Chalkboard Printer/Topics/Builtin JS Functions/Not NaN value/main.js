let data = [11, null, NaN, 'Hello', 24]
let counter = 0
for (let i = 0; i < data.length; i++){
    if(!isNaN(data[i])){
        counter++
    }
}
console.log(counter)