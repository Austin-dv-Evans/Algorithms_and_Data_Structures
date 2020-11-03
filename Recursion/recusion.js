// count down with recursion

function countDown (num) {
    if(num <= 0){
        console.log("All done!")
        return
    }
    console.log(num)
    num--
    countDown(num)
}

// count down without recursion

function countDownNonRecursivley(num) {
    for(var i = num; i > 0; i--){
        console.log(i)
    }
    console.log("All Done")
}

// sum the range with recursion

function sumRange(num) {
    if (num === 1) return 1
    return num + sumRange(num-1)
}

// factorial without recursion

function factorial (num) {
    let total = 1
    for(let i = num; i > 0; i--){
        total *= i
    }
    return total
}

// factorial with recursion

function factorialR (num) {
    if(num === 1) return 1
    return num * factorial(num-1)
}

// collect odd values with helper method recursion

function collectOddValues(arr){
    let result = []

    function helper(helperInput){
        if(helperInput.length === 0){
            return
        }
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1))
    }
    helper(arr)

    return result
}

//collect odd values with "pure" recursion

function collectOddValuesPure(arr) {
    let newArr = []
    if(arr.length === 0){
        return newArr
    }
    if (arr[0] % 2 !== 0){
        newArr.push(arr[0])
    }

    newArr = newArr.concat(collectOddValuesPure(arr.slice(1)))
    return newArr
}

