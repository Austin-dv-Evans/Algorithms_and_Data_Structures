/* 
first the Pivot Function 
write a function called Pivot that takes 3 arguments
an array, a start index, an end index 
*/ 

/* 
grab pivot from start
store current pivot index in variable
loop through the array from start until end
    if pivot is greater than current element, increment
    and then swap current element with element
    at the pivot indes

swap the starting element with pivot index
return pivot index 
*/

function pivot(arr, start=0, end=arr.length-1){
    
    function swap(array, i, j){
        var temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    
    var pivot = arr[start]
    var swapIndex = start

    for(var i = start + 1; i < arr.length; i++){
        if(pivot > arr[i]){
            swapIndex++
            swap(arr, swapIndex, i)
        }
    }

    swap(arr, start, swapIndex)
    return swapIndex
}


function pivot2015(arr, start=0, end=arr.length-1){
  
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }

    let pivot = arr[start]
    let swapIndex = start

    for(let i = start + 1; i <= end; i++){
        if(pivot > arr[i]){
            swapIndex++
            swap(arr, swapIndex, i)
        }
    }

    swap(arr, start, swapIndex)
    return swapIndex
}

function quickSort (arr, left = 0, right = arr.length - 1) {
    
    if(left < right){
        let pivotIndex = pivot(arr, left, right)
        //left
        quickSort(arr, left, pivotIndex - 1)
        //right
        quickSort(arr, pivotIndex + 1, right)
    }
    return arr
}