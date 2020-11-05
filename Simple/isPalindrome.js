// Validate a Palindrome
// Retrun true if plaindrom and false if not
// ex. racecar === true
//ex. rats live on no evil star === true
// ex. austin === false


//use reverse string functions then compare

function isPalindrome(str){
    const revString = str.split('').reverse().join('')
    return revString === str
}

function isPalindrome2(str){
    let revString = ''
    for(let i = 0; i < str.length; i++){
        revString = str[i] + revString
    }
    // vvv could be simplified as return revString === str
    if(revString === str){
        return true
    }
    else{
        return false
    }
}

console.log(isPalindrome2('racecar'))