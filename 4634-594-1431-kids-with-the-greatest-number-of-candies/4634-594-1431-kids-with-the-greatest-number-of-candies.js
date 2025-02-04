/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let numberOfKids = candies.length;
    let maxCandies = Math.max(...candies);
    let sum = 0;
    let result = [];

    for(let i = 0; i< numberOfKids; i++){
        sum = candies[i] + extraCandies;
        if(sum >= maxCandies){
            result.push(true)
        }
        else {
            result.push(false)
        }
    }
    return result
};