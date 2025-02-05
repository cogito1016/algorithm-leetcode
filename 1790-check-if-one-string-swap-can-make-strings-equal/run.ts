const s1 = "bank"
const s2 = "kanb"
console.log(areAlmostEqual(s1,s2))
function areAlmostEqual(s1: string, s2: string): boolean {
    if(s1===s2)
        return true

    let swapIdx = undefined;
    for(let i=0; i<s2.length; i++){
        if(s1.charAt(i)!==s2.charAt(i) && swapIdx === undefined){
            swapIdx = i
            continue
        }
        if(s1.charAt(i)!==s2.charAt(i) && swapIdx !== undefined){
            const temp = s2.split("")
            const tempValue = temp[swapIdx]
            temp[swapIdx] = temp[i]
            temp[i] = tempValue
            let result = ""
            temp.forEach((char)=>{result+=char})
            if(result===s1)
                return true
            else
                return false
        }
    }
    if(swapIdx!==undefined)
        return false
    return true
};