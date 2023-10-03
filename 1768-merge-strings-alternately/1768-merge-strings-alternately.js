/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let result = "";
    let longitud1 = word1.length;
    let longitud2 = word2.length;

    const maxLongitud = Math.max(longitud1, longitud2);

    for(let i=0; i<maxLongitud; i++){
        if(i < longitud1) result +=word1[i];
        if(i < longitud2) result +=word2[i];
    }
     return result
};