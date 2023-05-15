/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    const title = columnTitle.split("");
    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let answer = 0;
    if(columnTitle.length === 1){
        return alphabets.findIndex(item=> item === columnTitle) + 1; 
    }
    for(let i=0; i<title.length; i++){
        if(i === title.length - 1){
            answer += alphabets.findIndex(item=> item === title[i]) +1;
            break;
        }
        for(let j=0; j<alphabets.length ;j++){
            if(title[i] === alphabets[j]){
                answer += 26 ** (title.length - i - 1) * (j + 1);
            }
        }
    }

    return answer;
};