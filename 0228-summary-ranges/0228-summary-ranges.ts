function summaryRanges(nums: number[]): string[] {
    let result :string[] = []
    const len = nums.length;

    if(len===0)
        return []

    let prev = nums[0]
    let startNum = nums[0]
    for(let i=1; i<=len; i++){
        if(i===len){
            result.push(getRangebyTwoNumber(startNum, prev))
            break;
        }

        if(nums[i]===prev+1){
            prev=nums[i]
            continue
        }

        result.push(getRangebyTwoNumber(startNum, prev))
        prev=nums[i]
        startNum=nums[i]
    }

    return result
};

function getRangebyTwoNumber(startNum:number, prev:number):string{
    let str :string = ""
    if(prev===startNum){
        str = `${startNum}`
    }else{
        str = `${startNum}->${prev}`
    }

    return str;
}