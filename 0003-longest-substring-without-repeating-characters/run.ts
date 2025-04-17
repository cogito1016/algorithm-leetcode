const s = "abcabcbb";

console.log(lengthOfLongestSubstring(s))

function lengthOfLongestSubstring(s: string): number {
    const set = new Set<string>()
    let max = 1;
    let left =0, right =1;

    const sLen = s.length

    if(sLen===0)
        return 0
    if(sLen===1)
        return 1
    
    let leftValue = s.charAt(left)
    set.add(leftValue)
    let rightValue = '';
    while(right < sLen){
        rightValue = s.charAt(right)

        while(set.has(rightValue)){
            set.delete(leftValue)
            left++
            leftValue=s.charAt(left)
        }

        set.add(rightValue)
        right++;

        if(max<set.size)
            max=set.size

    }
    return max
};