const longestCommonPrefix = function(strs) {
        let arr = strs[0].split("");
        let count = 0;
        let answer ="";
    if(strs.length === 1 || strs[0] === ""){
        return strs[0]
    }
    for(let index=0; index<arr.length; index++){
        
        count = 0;
        strs.map((item, idx)=> {
            if(idx > 0 && index < item.length){
                if(arr[index] === item[index]){
                    count += 1;   
                }
            }
        })
        
        if(count === strs.length - 1){
            answer+= arr[index];
        }
        else break;
    }
    return answer 
};