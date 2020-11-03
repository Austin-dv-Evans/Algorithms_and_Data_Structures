/* 
Sliding Window
This pattern involves creating a window which can either
be an array or number from one position to another

depending on a certain condition, the widow either increases 
or closes (and a new window is created)

very useful for keeping track of a SUBSET OF DATA in an 
array/string
*/

/* 
Max Sub Array Sum
write a function called maxSubarraySum which accepts
an array of integers and a number called n. 
The function should calculate the maximum sum of n consecutive
elements in the array
*/

function maxSubArraySumBad (arr, n) {
    if (n > arr.length) {
        return null;
    }
    // negative Infinity incase we are working with negatives
    // setting max to 0 doesn't work if numbers can be negative
    var max = -Infinity;
    for (let i = 0; i < arr.length - n + 1; i++) {
        temporarayMax = 0;
        for(let j = 0; j < n; j++){
            temporarayMax += arr[i + j];
        }
        if (temporarayMax > max) {
            max = temporarayMax
        }
    } 
    return max
}
// ^^^ quadradic due to nested loop ^^^


// vvv sliding window approach vvv

function maxSubArraySumBest (arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        // instead of totalling all num of arr we subtract first value
        // and add new/next value
        tempSum = tempSum - arr[i - num] + arr[i];
        //Math.max value is going to be the larger of the two
        //thus updating maxSum if TempSum is larger
        //we could have used a simple if statemnt here as well
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum
}