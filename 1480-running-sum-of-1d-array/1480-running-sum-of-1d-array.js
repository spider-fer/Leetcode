/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let array = [];
    let sum = 0;
    for(let i=0; i<nums.length; i++){
        for(let j=0; j<i; j++){
            sum += nums[j];
        }
        sum += nums[i];
        array.push(sum);
        sum=0;
    }
    return array;
};