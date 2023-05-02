/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let arr = [[1], [1, 1]];
    for(let i = 2; i<= rowIndex; i++){
        arr.push([]);
        arr[i][0] = 1;
        for(let j = 0; j < i-1; j++){
            arr[i].push(arr[i-1][j] + arr[i-1][j+1])
        }
        arr[i][i] = 1;
    }
    return arr[rowIndex];
};