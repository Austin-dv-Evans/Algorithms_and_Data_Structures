// Max Character
// Return the character that is most common in a string
// ex. maxCharacter('austin david evans') == 'a'

function maxCharacter(str){
    
    const charMap = {}
    let maxNum = 0
    let maxChar = ''


    str.split('').forEach(function(char){
        if(charMap[char]){
            charMap[char]++
        }
        else {
            charMap[char] = 1
        }
    })

    for(let char in charMap){
        if(charMap[char] > maxNum){
            maxNum = charMap[char]
            maxChar = char
        }
    }
    return maxChar
}

console.log(maxCharacter('austin david evans'))