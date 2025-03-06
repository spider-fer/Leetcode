/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let vowels = new Set(["a", "e", "i", "o", "u"]);
    let max = calculateVowelsCount(s.slice(0, k), vowels);

    let currentFirst = vowels.has(s[0]);
    let newCount = max;

    for(let i = k; i < s.length; i++){
        if(currentFirst) newCount--;

        if(vowels.has(s[i])) newCount++;
        currentFirst = vowels.has(s[i-k + 1]);

        max = Math.max(newCount, max);
    }
    return max;
};

const calculateVowelsCount = (str, vowels) => {
    let count = 0;
    for(let i =0; i<str.length; i++){
        if(vowels.has(str[i])) count++;
    }
    return count;
}