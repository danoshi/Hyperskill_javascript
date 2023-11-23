function reverse(arr) {
    let rev = []
    for (let i = 0; i < arr.length; i++){
        rev.unshift(arr[i])
    }
    return rev;
}