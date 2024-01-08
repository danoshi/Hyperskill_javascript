function three(arr) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === 3){
            return arr.indexOf(3);
        }
    }
    return -1;
}
