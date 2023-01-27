/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let left=0, right=0;
    for(let i=0; i<nums.length; i++){
        //console.log("Posicion: ", i);
        for(let j=0; j<i; j++){
            right += nums[j];
            //console.log("Right: ", nums[j]);
        }
        for(let k=nums.length-1; k>i; k--){
            left += nums[k];
            //console.log("Left: ", nums[k]);
        }
        //console.log("Suma: ", right, left)
        if(right === left){
            return i;
        }
        right=0, left=0;
    }
    return -1;
};