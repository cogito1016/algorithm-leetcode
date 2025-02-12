
// @ts-ignore
const nums = [18,43,36,13,7]
console.log(maximumSum(nums))

function maximumSum(nums: number[]): number {
    let max = -1;

    for(let i=0; i<nums.length; i++){
        const iNum = nums[i]
        let sumPartOfI = iNum.toString().split("").reduce((sum,digit)=>sum+Number(digit),0)


        for(let j=i+1; j<nums.length; j++){
            const jNum = nums[j]
            let sumPartOfJ = jNum.toString().split("").reduce((sum,digit)=>sum+Number(digit),0)

            if(sumPartOfI===sumPartOfJ)
                max = Math.max(max,iNum+jNum)
        }
    }
    return max;
};