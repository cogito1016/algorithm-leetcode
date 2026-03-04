function plusOne(digits: number[]): number[] {
    const lastIdx = digits.length-1;

    for(let i = lastIdx; i>=0; i--){
        if(digits[i]<9){
            digits[i]++
            return digits
        }
        digits[i] = 0;
    }

    return [1,...digits]
};