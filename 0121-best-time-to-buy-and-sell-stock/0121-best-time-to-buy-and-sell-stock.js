/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length === 1) return 0;
    let min = 1000001;
    let profit = 0;
    prices.forEach((price, index)=> {
        if(price < min) min = price;
        if(profit < price-min) profit = price-min;
    })
    return profit
};