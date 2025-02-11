// @ts-ignore
const str ="cb34"
console.log(clearDigits(str))

function clearDigits(s: string): string {
    let result = s.split("")
    let i = 1;

    while(i<result.length){
        const char = result[i]
        const isAlpha = isAlphabet(char)

        if(!isAlpha && isAlphabet(result[i-1])){
            result.splice(i-1,2);
            i -= 2
        }
        i++
    }

    return result.join("")
};

function isAlphabet(c: string):boolean{
    return c>="a" && c<="z"
}