
// @ts-ignore
const nums = [18,43,36,13,7]
console.log(maximumSum(nums))

function maximumSum(nums: number[]): number {
    let max = -1;
    let sumOfNums = nums.map((num)=>num.toString().split("").reduce((sum,digit)=>sum+Number(digit),0))

    for(let i=0; i<nums.length; i++){
        const iNum = nums[i]

        for(let j=i+1; j<nums.length; j++){
            const jNum = nums[j]

            if(sumOfNums[i]===sumOfNums[j])
                max = Math.max(max,iNum+jNum)
        }
    }
    return max;
};