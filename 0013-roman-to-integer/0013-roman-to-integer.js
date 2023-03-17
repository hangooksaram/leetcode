const obj = {
    "I" : 1,
    "V" : 5,
    "X" : 10,
    "L":50,
    "C":100,
    "D":500,
    "M":1000
}

const romanToInt = (str)=>{
    const arr = str.split("");
    let answer=0;
    arr.map((a, idx)=> {
        const currentSymbol = a;
        const nextSymbol =arr[idx+1];
        const current = parseInt(obj[a]);
        const next= parseInt(obj[arr[idx+1]]);
        if(a === "already merged") return false;
        if(idx < arr.length-1){
            if(currentSymbol === "I" && (nextSymbol === "V" || nextSymbol === "X")){
                answer += next - 1;
                arr[idx+1] = "already merged";
            }
            else if (currentSymbol === "X" && (nextSymbol === "L" || nextSymbol === "C")){
                answer += next - 10;
                arr[idx+1] = "already merged";
            }
            else if (currentSymbol === "C" && (nextSymbol === "D" || nextSymbol === "M")){
                answer += next - 100;
                arr[idx+1] = "already merged";
            }
            else {
                answer +=current;
            }
        }
        else {
            answer +=current;
        }
    })
    return answer
}
