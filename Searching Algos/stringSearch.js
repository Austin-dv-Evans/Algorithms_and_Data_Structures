// how many times does sequence of letters in short string
// appear in long string?

function naiveStringSearch(longStr, shortStr){
    var count = 0
    for(var i = 0; i < longStr.length; i++){
        for(var j = 0; j < shortStr.length; j++){
            console.log(shortStr[j], longStr[i+j])
            if(shortStr[j] !== longStr[i+j]){
                console.log("break")
                break
            }
            if(j === shortStr.length - 1) {
                count++
            }
        }
    }
    return count
}

// naiveSearch refactor


function stringSearchRefac(long, short){
    var count = 0
    for(var i = 0; i < long.length; i++){
        for(var j = 0; j < short.length; j++){
            if(short[j] !== long[i+j]) break
            if(j === short.length - 1) count++
        }
    }
    return count
}

naiveStringSearch("lorie loled lol", "lol")
stringSearchRefac("lorie loled lol", "lol")