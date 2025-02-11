// @ts-ignore
const str ="abc"
console.log(clearDigits(str))

function clearDigits(s: string): string {
    let result = s;

    let i = 1;

    while(i<result.length){
        const code = result.charCodeAt(i)
        const isAlpha = isAlphabet(code)

        if(isAlpha){
            i++
            continue
        }

        if(!isAlpha && !isAlphabet(result.charCodeAt(i-1))){
            i++
            continue
        }

        const prev = result.substring(0,i-1)
        const next = result.substring(i+1,result.length)
        result = prev+next
        i -= 2
    }

    return result
};

function isAlphabet(askiCode: number):boolean{
    if(askiCode>=97 && askiCode<=122){
        return true
    }
    return false
}