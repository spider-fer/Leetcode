/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = 0;
    let sell = 1 ;
    let maxprofit =0;

    for(let sell = 1; sell<prices.length; sell++){
        
        if(prices[sell]>prices[buy]){
            if(maxprofit < prices[sell]-prices[buy]){
                maxprofit =prices[sell]-prices[buy];
            }
        }
        else{
            buy= sell;
        }
    }
    return maxprofit
    
};