const s = "au";

console.log(lengthOfLongestSubstring(s))

function lengthOfLongestSubstring(s: string): number {
    const set = new Set<string>()
    let max = 0;
    let result = 0;
    let left =0, right =1;

    const sLen = s.length

    if(sLen===0)
        return 0
    if(sLen===1)
        return 1
    
    max = 1
    let leftValue = s.charAt(left)
    set.add(leftValue)
    let rightValue = '';
    while(right < sLen){
        console.log(`left : ${left} leftVal : ${leftValue} right : ${right} rightVal : ${rightValue}`)
        console.log(set)
        console.log(max)
        console.log('------')
        rightValue = s.charAt(right)

        if(max>result)
            result=max

        if(set.has(rightValue)){
            leftValue = s.charAt(++left)
            right = left+1
            max = 1
            set.clear()
            set.add(leftValue)
            continue
        }

        set.add(rightValue)
        right++
        max++
    }

    if(max>result)
        result=max
    
    return result    
};