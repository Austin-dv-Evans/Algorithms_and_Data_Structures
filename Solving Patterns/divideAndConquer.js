/* Divide and Conquer

This pattern involves dividing a data set into smaller chunks
and then repeating a process with a subset of data

This pattern can tremendously decrease time complexity!
*/

// View binaryAndLinearSearch.js files for more examples

/* 
We take usually a large set of data typically an array, 
string, linked-list or tree.
Rather than starting at left and move all the way to right
We divide the large set of data into smaller chunks
*/


/* Search 
given a sorted array of integers, write a function called search, that
accepts a value and returns the index where the value passed to the
function is located. if the value is not found, return -1 */


function linearSearch (arr, val) {
    for (let i = 0; i < arr.length; i++){
        if(arr[i] === val) {
            return i
        }
    }
    return -1
}



function binarySearch (array, val) {

    let min = 0
    let max = array.length - 1

    while (min <= max) {
        let middle = Math.floor((min + max) / 2)
        let currentElement = array[middle]

        if (array[middle] < val) {
            min = middle + 1
        }
        else if (array[middle] > val) {
            max = middle - 1
        }
        else {
            return middle
        }
    }
    return -1
}