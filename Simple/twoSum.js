/* 
Two Sum

Given an array of integers return the indicies of the
two numbers that sum to the target value

you can assume their is only one solution
you may not use same element twice
*/

const twoSum = (nums, target) => {
    // create an object to store values and indicies
    const previousValues = {}
    for(let i = 0; i < nums.length; i++){
        const currentNumber = nums[i]
        const neededValue = target - currentNumber
        const index2 = previousValues[neededValue]
        // if index2 isnt null then we found our values
        if(index2 != null){
            return [index2, i]
        }
        // if index2 is null assign the current index to the object
        else {
            previousValues[currentNumber] = i
        }
    }
}



//write a function that takes in a sigle number as an input
// and sums all the numbers together that lead up to that number

function sumUp(n) {
    let total = 0
    for (let i = 1; i <= n; i++){
        total += i
    }
    return total
}


function sumUpMath(n){
    return (n / 2) * (1 + n)
}