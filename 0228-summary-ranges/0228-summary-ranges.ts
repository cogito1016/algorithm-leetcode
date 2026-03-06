function summaryRanges(nums: number[]): string[] {
    let result :string[] = []

    if(nums.length===0){
        return []
    }

    let startIdx = 0;

    for(let i=1; i<nums.length; i++){
        if(nums[i-1]-nums[i]===-1){
            if(startIdx===-1)
                startIdx=i-1
            continue;
        }

        let str = ""
        if(startIdx===i-1){
            str = `${nums[startIdx]}`
        }else{
            str = `${nums[startIdx]}->${nums[i-1]}`
        }
        startIdx=i
        result.push(str)
    }

    if(startIdx!==-1){
        let str = ""
        if(startIdx===nums.length-1){
            str = `${nums[startIdx]}`
        }else{
            str = `${nums[startIdx]}->${nums[nums.length-1]}`
        }
        result.push(str)
    }
    return result
};