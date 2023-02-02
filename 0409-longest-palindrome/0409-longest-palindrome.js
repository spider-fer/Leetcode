/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let characters = {};
    let letter = '';
    let longest = 0;
    for(let i=0; i<s.length; i++){
        letter = s[i];
        if(!characters[letter]){
            characters[letter] = 1;
            //console.log(characters);
        }
        else{
            characters[letter] = 0;
            longest += 2;
        }
        console.log(longest);
        console.log(characters);
    }
    if(longest < s.length){
        return ++longest;
    }
    return longest;
};