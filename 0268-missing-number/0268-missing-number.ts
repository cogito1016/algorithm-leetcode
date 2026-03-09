function missingNumber(nums: number[]): number {
    const len = nums.length
    let result = len

    for(let i=0;i<len;i++){
        result += i - nums[i]
    }

    return result
};