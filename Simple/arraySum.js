/* 
Write an algorithm that takes an array of numbers
as input and calculates the sum of those numbers

Define the Time Complexity
*/

function sumNumbers(array){
    let total = 0
    for(let i = 0; i < array.length; i++){
        total += array[i]
    }
    return total
}

function sumNumbersWithOf(array){
    let total = 0
    for(const nums of array){
        total += nums
    }
    return total
}

function sumNumbersOneLiner(array) {
    return array.reduce((sum, curNum) => sum + curNum, 0)
}

console.log(sumNumbers([1,5,10,20]))
console.log(sumNumbersWithOf([1,5,10,20]))

// all are time complexity == O(n)