function find5(numbers) {
    let num = 0
    for (let n in numbers){
       if (numbers[n] !== 5)
       num = -1
       else {
           num = n
           break
       }
   }
   return num
}
