const nums = [100,10,1]

console.log(maxAscendingSum(nums))

function maxAscendingSum(nums: number[]): number{
    let prevNum = nums[0];
    let maximum = prevNum;
    let temp = prevNum;

    for(let i=1; i<nums.length; i++){
        const num = nums[i]

        if(num<=prevNum)
            temp = 0

        temp += num
        prevNum = num

        maximum = Math.max(temp, maximum)
    }

    return maximum
};