/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let first = Infinity;
    let second = Infinity;

    for(let actualnum of nums) {
        if(actualnum < first){
            first = actualnum;
        }
        else if(actualnum < second && actualnum > first){
            second = actualnum;
        }
        else if(actualnum > first && actualnum > second){
            return true;
        }
    }

    return false;
    
};