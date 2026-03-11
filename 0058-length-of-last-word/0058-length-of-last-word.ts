function lengthOfLastWord(s: string): number {
    let result = 0;
    const N = s.length

    for(let i=N-1; i>=0; i--){
        if(s[i]===" "){
            if(result!==0)
                break
            
            continue
        }
        result++
    }
    return result
};