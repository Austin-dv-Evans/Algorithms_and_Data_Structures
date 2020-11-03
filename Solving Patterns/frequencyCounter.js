/* Frequency Counter uses objects or sets to collect values/frequencies 
of values. This can often avoid nested loops with arrays and strings */

/* write a function called same which accepts two arrays
the function should return true if every array in the
array has its corresponding value squared in the second
array. The frequency of values must be the same but dont
need to be in same order */

function same (arr1, arr2) {
    if(arr1.length !== arr2.length){
        return false
    }
    for(let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correctIndex === -1) {
            return false
        }
        arr2.splice(correctIndex, 1)
    }
    return true
}


function sameBest (arr1, arr2) {
    if (arr1.length !== arr2.length){
        return false
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}


/* Anagram: given two strings write a function to determine if the 
second string is an anagram of the first assume all inputs are
single words, no punctuation, all lowercase, no spaces */

function validAnagram (str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let char of str1) {
        frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1
    }
    for (let char of str2) {
        frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1
    }
    for (let key in frequencyCounter1) {
        if(!(key in frequencyCounter2)) {
            return false
        }
    }
    console.log(frequencyCounter1)
    console.log(frequencyCounter2)
    return true
}


function validAnagramBest (str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }
    const lookup = {};
    for (let i = 0; i < str1.length; i++) {
        let letter = str1[i]
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
    }
    for (let i = 0; i < str2.length; i++) {
        let letter = str2[i]
        //cant find letter or letter is zero? then its not an anagram
        if (!lookup[letter]) {
            return false
        }
        else {
            lookup[letter] -= 1
        }
    }
    return true
}
