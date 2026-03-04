function plusOne(digits: number[]): number[] {
    const lastIdx = digits.length-1;

    for(let i = lastIdx; i>=0; i--){
        if(digits[i]===9){
            digits[i] = 0
        }else{
            digits[i] = digits[i]+1
            break;
        }

        if(i===0 && digits[i]===0)
            digits = [1,...digits]
    }

    return digits
};