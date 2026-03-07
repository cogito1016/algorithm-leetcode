function summaryRanges(nums: number[]): string[] {
    let result :string[] = []
    const len = nums.length;

    if(len===0)
        return []

    let prev = nums[0]
    let startNum = nums[0]
    for(let i=1; i<len; i++){
        if(nums[i]===prev+1){
            prev=nums[i]
            continue
        }

        result.push(formatRange(startNum, prev))
        prev=nums[i]
        startNum=nums[i]
    }

    result.push(formatRange(startNum, prev))
    return result
};

function formatRange(startNum:number, prev:number):string{
    return prev===startNum? `${startNum}` : `${startNum}->${prev}`;
}