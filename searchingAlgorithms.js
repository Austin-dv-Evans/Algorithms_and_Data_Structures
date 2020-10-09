/* linear search, this function accepts an array and a value
loop through array and check if value is equal to current element
if it is return elements index
if val is never found return -1 */

function linearSearch(arr, el){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == el) return i
    }
    return -1
}

// linearSearch is O(n) === linear


/* binary search, must be a sorted array, eliminate basically
half of the array and search the other side.
divide and conquer */

/* This function accepts sorted array and element, create left pointer
at start, and right pointer at end, while left pointer is before right
create middle pointer, if val is to small move left pointer up
if val is too big move right pointer down, if val is found return 
index
if val is never found return -1 */

function binarySearch(arr, el){
    var start = 0
    var end = arr.length -1
    var middle = Math.floor((start + end) / 2)

    while(arr[middle] !== el && start <= end) {
        if(el < arr[middle]){
            end = middle - 1
        } else {
            start = middle + 1
        }
        middle = Math.floor((start + end) / 2)
    }
    if(arr[middle] === el){
        return middle
    }
    return -1
}

// refactored ...

function binarySearchRefactor(arr, el) {
    var start = 0
    var end = arr.length -1
    var middle = Math.floor((start + end) / 2)
    while(arr[middle] !== el && start <= end) {
        if(el < arr[middle]) end = middle - 1
        else start = middle + 1
        middle = Math.floor((start + end) / 2)
    }
    return arr[middle] === el ? middle : -1
}

// worst and average case == O(log n)
// best case O(1)