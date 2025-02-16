/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    nums.sort((a, b) => a - b);
    let right = nums.length -1;
    let left = 0;
    let operations = 0;

    while (left < right){
        const sum = nums[left] + nums[right];

        if(sum === k){
            operations++;
            left ++;
            right --;
        }
        else if(sum < k){
            left ++
        }
        else{
            right--;
        }
    }
    return operations;
};