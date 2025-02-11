const str = "axxxxyyyyb"
const part = "xy"

console.log(removeOccurrences(str, part))
function removeOccurrences(s: string, part: string): string {
    let result = s

    while(result.indexOf(part) >= 0){
        const index = result.indexOf(part)
        const prev = result.substring(0, index);
        const next = result.substring(index+part.length,s.length);
        result = prev+next
    }

    return result;
};