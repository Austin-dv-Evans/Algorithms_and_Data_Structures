// Reverse a String
// Return a string in reverse
// ex. reverseString('hello') ==='olleh'

function reverseString(str){
    const strArray = str.split('')
    strArray.reverse()
    return strArray.join('')
}

function reverseStringRefac(str){
    return str
        .split('')
        .reverse()
        .join('')
}

function reverseStringDecrementLoopin(str){
    let revString = ''
    for(let i = str.length - 1; i >= 0; i--){
        revString = revString + str[i]
    }
    return revString
}


function reverseStringIncrementLoopin(str){
    let revString = ''
    for(let i = 0; i < str.length; i++){
        revString = str[i] + revString
    }
    return revString
}

function reverseStringOFLoopin(str){
    let revString = ''
    for(let char of str){
        revString = char + revString
    }
    return revString
}

function reverseStringHighOrder(str){
    let revString = ''
    str.split('').forEach(char =>
        revString = char + revString 
    )
    return revString
}

function reverseStringHighOrder2(str){
    return str.split('').reduce((revString, char) =>
        char + revString)
}


console.log(reverseStringHighOrder2('austin evans'))