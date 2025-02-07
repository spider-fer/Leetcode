/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let words = s.split(' ');
    let reversedWords = words.reverse();
    let result = [];

    for(let i = 0; i< reversedWords.length; i ++){
        if (reversedWords[i]){
            result.push(reversedWords[i]);
        }
    }
    return result.join(' ');
};