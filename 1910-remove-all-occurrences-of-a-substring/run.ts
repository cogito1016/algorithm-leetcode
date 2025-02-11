const str = "axxxxyyyyb"
const part = "xy"

console.log(removeOccurrences(str, part))
function removeOccurrences(s: string, part: string): string {
    let result = s
    let idx = result.indexOf(part);

    while(idx >= 0){
        result = result.replace(part,"")
        idx = result.indexOf(part);
    }

    return result;
};