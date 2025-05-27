const nums = [1,2,3];
console.log(jump(nums))

function jump(nums: number[]): number {
    let destination = nums[0]

    if(destination===0 || nums.length===1)
        return 0

    let switchCount = 1;
    let max = destination
    for(let i=0; i<=destination; i++){

        if(destination>=nums.length-1)
            break
        if(i+nums[i] > max){
            max = i+nums[i]
        }

        if(i===destination){
            destination=max;
            switchCount++
        }
    }

    return switchCount;
};