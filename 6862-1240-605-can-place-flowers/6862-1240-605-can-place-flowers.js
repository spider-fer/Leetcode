/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let len = flowerbed.length;
    let leftspace;
    let rightspace;

    for(let i = 0; i < len; i++){
        if(i === 0 || flowerbed[i - 1] === 0){
            leftspace = true
        }
        else{
            leftspace = false
        }

        if(i === len-1 || flowerbed[i +  1] === 0){
            rightspace = true
        }
        else{
            rightspace = false
        }

        if (leftspace && rightspace && flowerbed[i] === 0) {
            flowerbed[i] = 1;
            n--;
        }
    }
    return n<= 0;
};