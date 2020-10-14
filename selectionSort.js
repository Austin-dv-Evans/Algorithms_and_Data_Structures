// make element to store first item
// compare this item to the next item
// not saving value, save position, then swap
// if a smaller number is found designate that
//smaller number to be the new minimum
//if the minimum is not the value we began with 
//swap it. 

function selectionSort(arr){
    for(var i = 0; i < arr.length; i++){
        var lowest = i
        for(var j = i+1; j < arr.length; j++ ){
            if(arr[j] < arr[lowest]){
                lowest = j
            }
        }
        if(i !== lowest){
            var temp = arr[i]
            arr[i] = arr[lowest]
            arr[lowest] = temp
        }
    }
    return arr
}

selectionSort([34,22,10,19,17])


function selectionSort2015(arr){
    const swap = (arr,idx1,idx2) =>
        ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]])
    for(var i = 0; i < arr.length; i++){
        var lowest = i
        for(var j = i+1; j < arr.length; j++ ){
            if(arr[j] < arr[lowest]){
                lowest = j
            }
        }
        if(i !== lowest) swap(arr, i, lowest)
    }
    return arr
}