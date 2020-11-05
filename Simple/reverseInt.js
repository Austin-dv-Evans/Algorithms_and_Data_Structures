// Reverse an Integer
// Return an integer in reverse
// ex. reverseInt(544) === 445

function reverseInt(int){
    const revString = int
        .toString()
        .split('')
        .reverse()
        .join('')
    return parseInt(revString) * Math.sign(int)
}

console.log(reverseInt(-12345))