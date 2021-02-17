// Code your solutions in this file
function writeCards(array, message){
    let arr = []
    for(let i = 0; i < array.length; i++){
        arr.push(`Thank you, ${array[i]}, for the wonderful ${message} gift!`);
    }
    return arr
}

function countDown(number){
    let i = number
    while (i >= 0){
        console.log(i)
        i = i - 1
    }
}
