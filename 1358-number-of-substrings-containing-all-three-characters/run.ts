// @ts-ignore
const s = "ababbbc"
console.log(numberOfSubstrings(s))

function numberOfSubstrings(s: string): number {
    const length = s.length
    let total = 0;

    for(let i=0; i<length-2; i++){
        for(let k=0; k<length-1; k++){
            const lastIdx = i+3+k
            if(lastIdx > length)
                break;
            const str = s.substring(i,lastIdx)
            if(str.includes("a")&&
                str.includes("b")&&
                str.includes("c")){
                total += length - lastIdx +1

                if(i>0){
                    let j = i-1;
                    let appendedStr = s.substring(i-1,lastIdx)
                    while(j>=0){
                        appendedStr += s.charAt(j)
                        if(appendedStr.includes("a")&&
                            appendedStr.includes("b")&&
                            appendedStr.includes("c")){
                            break;
                        }
                        total++;
                        j--
                    }
                }
                break
            }
        }

    }

    return total;
};