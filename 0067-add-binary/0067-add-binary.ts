function addBinary(a: string, b: string): string {
    const N = a.length
    const M = b.length

    let result = ""
    let max = Math.max(N,M);

    if(N>M){
        let appendZeroStr = ""

        for(let i=0; i<N-M; i++){
            appendZeroStr+="0"
        }

        b = appendZeroStr+b
    }else{
        let appendZeroStr = ""

        for(let i=0; i<M-N; i++){
            appendZeroStr+="0"
        }

        a = appendZeroStr+a
    }

    let upper = 0;

    for(let i=max-1; i>=0; i--){
        const sum = parseInt(a[i]) + parseInt(b[i]) + upper

        if(sum===1){
            upper = 0;
            result = "1"+result
        }else if(sum===2){
            upper = 1;
            result = "0"+result
        }else if(sum===3){
            upper = 1;
            result = "1"+result
        }else{
            upper = 0;
            result = "0"+result
        }
    }

    if(upper===1){
        result = "1"+result
    }else if(upper===2){
        upper = 1;
        result = "11"+result
    } 
    
    return result
};