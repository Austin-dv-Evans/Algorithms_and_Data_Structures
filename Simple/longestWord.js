// Longest Word
// Return the longest word of a string
// If more than one longest word, put into an array
// ex longestWord("Hello my name is Austin") === "Austin"
// ex longestWord(Hello friend my name is Austin") === ['friend', 'Austin']


function longestWord (sentenceString) {
    //strip away punctuation
    const wordArr = sentenceString.toLowerCase().match(/[a-z0-9]+/g)

    //sort by length
    const sorted = wordArr.sort((a, b) => 
        b.length - a.length )

    // if multiple words, put into array
    const longestWordAarr = sorted.filter(word => 
        word.length === sorted[0].length)
    
    //check if more than one array value
    if(longestWordAarr.length === 1){
        return longestWordAarr[0]
    }
    else{
        return longestWordAarr
    }
}

console.log(longestWord("Hello, my name is Austin"))