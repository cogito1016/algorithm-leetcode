const nums = [1,2,3];
console.log(jump(nums))

function jump(nums: number[]): number {
    let max = nums[0]

    if(max===0 || nums.length===1)
        return 0

    let switchCount = 1;
    for(let i=0; i<=max; i++){

        if(max>=nums.length-1)
            break
        if(i+nums[i] > max){
            max = i+nums[i]
            switchCount++
        }
    }

    return switchCount;
};