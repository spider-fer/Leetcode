/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = 'aeiouAEIOU';
    let posOfVowel = [];
    let newWord = '';

    for(let i = 0; i<s.length; i++){
        if(vowels.includes(s[i])){
            posOfVowel.push(i);
        }
    }
    
    for(let j = 0; j<s.length; j++){
        if(vowels.includes(s[j])){
            newWord += s[posOfVowel.pop() || 0];
        }
        else{
            newWord += s[j];
        }
    }
    return newWord;
};