function lengthOfLastWord(s: string): number {
    let length = 0;
    const N = s.length

    for(let i=N-1; i>=0; i--){
        if(s[i]!==" "){
            length++;
            continue
        }

        if(length>0)
            break;
    }

    return length;
};