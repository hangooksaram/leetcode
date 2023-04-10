/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x===1 || x === 0){
        return x;
    }
    let start = 0;
    let end = x;
    while(start <= end){
        const mid = Math.floor((start + end) / 2);
        if(mid * mid <= x && (mid+1) * (mid+1) > x){
            return mid;
        }
        
        if(mid * mid < x){
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
};