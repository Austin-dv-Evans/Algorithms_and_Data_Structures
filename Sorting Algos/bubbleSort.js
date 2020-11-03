//before we sort we must swap

function swap (arr, idx1, idx2){
    var temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
}

//or es2015

const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

function bubbleSortLeastOptimized(arr){
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr.length; j++){
            if(arr[j] > arr[j+1]){
                //swap
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}

function bubbleSortOptimizedish(arr){
    for(let i = arr.length; i > 0; i--){
        for(let j = 0; j < i - 1; j++){
            if(arr[j] > arr[j+1]){
                //swap
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}

function bubbleSort2015(arr){
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }
    for(let i = arr.length; i > 0; i--){
        for(let j = 0; j < i - 1; j++){
            if(arr[j] > arr[j+1]){
                swap(arr, j, j + 1)
            }
        }
    }
    return arr
}

function bubbleSortWithBreak(arr){
    var noSwaps
    for(let i = arr.length; i > 0; i--){
        noSwaps = true
        for(let j = 0; j < i - 1; j++){
            if(arr[j] > arr[j+1]){
                //swap
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                noSwaps = false
            }
        }
        if(noSwaps) break
    }
    return arr
}

//time complexity is O(n^2) generally