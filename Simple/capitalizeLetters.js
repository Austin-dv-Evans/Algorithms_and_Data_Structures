// Capitalize Letters
// return a string with the first letter of every word 
// capitalized


function capitalizeLetters(str){
    const strArr = str.toLowerCase().split(' ')
    for(let i = 0; i < strArr.length; i++){
        strArr[i] = strArr[i].substring(0, 1).toUpperCase() +
        strArr[i].substring(1)
    }
    return strArr.join(' ')
}


console.log(capitalizeLetters('austin loves algos'))

function capitalizeLetters2(str){
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word[0].toUpperCase() + word.substr(1))
        .join(' ')
}

console.log(capitalizeLetters2('austin loves algos'))


function capitalizeLettersRegularExpression(str){
    return str.replace(/\b[a-z]/gi, function(char){
        return char.toUpperCase()
    })
}
console.log(capitalizeLettersRegularExpression('austin loves algos'))