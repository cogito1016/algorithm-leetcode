let nums:number[] = [0,0,1,1,1,2,2,3,3,4]

console.log(removeDuplicates(nums))

function removeDuplicates(nums: number[]): number {
    const len = nums.length
    let targetIdx = 1;
    let prevValue = nums[0];

    for(let i=1; i<len; i++){
        const currentValue = nums[i]

        if(prevValue!==currentValue){
            nums[targetIdx] = currentValue
            prevValue=currentValue
            targetIdx++;
        }
    }

    console.log(nums)
    return targetIdx;
};