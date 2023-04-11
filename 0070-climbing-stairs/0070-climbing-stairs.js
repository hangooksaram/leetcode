/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let memo = [1,1]; //memoization
    
    let dp = function(n){
        if(memo[n] !== undefined){
            return memo[n]
        }
        memo[n] = dp(n-1) + dp(n-2);
        return memo[n]   
            
    }
    
    return dp(n)
};