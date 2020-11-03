/* Multiple Pointers = creating pointers or values
that correspond to an index or position and move towards
the beginning, end or middle based on a certain condition 

very effective for solving problems with minimal space complexity

searching for a pair of values or something that matches certain condition
*/


/* Sum Zero: write a function called sumZero which accepts a sorted array
of integers. the function should find the first pair where the sum
is 0. Return an array that includes both values that sum to zero or 
undefined if a pair does not exist.
*/ 

function sumZeroBad (array){
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if(array[i] + array[j] === 0) {
                return [array[i], array[j]];
            }
        }
    }
}
// ^^^ O(n^2) bad ^^^


// Pointers moving from left and right ends and heading towards the middle
// vvv multiple pointers pattern vvv

function sumZeroBest (array) {
    let left = 0;
    let right = array.length - 1;
    while(left < right) {
        let sum = array[left] + array[right];
        if(sum === 0) {
            return [array[left], array[right]];
        }
        else if (sum > 0) {
            right--
        }
        else {
            left++
        }
    }
}

/* 
Count Unique Values
implement a function that accepts a SORTED array and counts
the number of unique values in the array
there can be negative numbers but it will always be sorted.
*/
// both pointers start on left end, we update which pointer based on condition

function countUniqueValues (arr) {
    var i = 0
    for(var j = 0; j < arr.length; j++){
        if(arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
    }
    // vvv edge case of empty array vvv
    if(i === 0) {
        return i
    }else{
        return i + 1
    }
}


function countUniqueValuesBetter (arr) {
    if(arr.length === 0) return 0
    var i = 0
    for(var j = 0; j < arr.length; j++){
        if(arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1
}