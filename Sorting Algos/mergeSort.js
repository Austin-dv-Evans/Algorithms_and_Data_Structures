// Merge Sort
// create an empty array
// look at smallest values in each array i and j while loop
// while there are still values we havent looked at

/* if the value in the first array is smaller than
the value in the second array, push the value of the first
array into our results and move on the the next value in the 
first array */

/* if the value in the first array is larger than the value
in the second array, push the value of the second array into
our results and move on to the next value in the second array */

//once we exhaust one array, push in all remaining values from the other array 

function merge (arr1, arr2){
    let results = []
    let i = 0
    let j = 0
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i])
            i++
        } else {
            results.push(arr2[j])
            j++
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++
    }
    return results
}

function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}