
// @ts-ignore
const nums = [18,43,36,13,7]
console.log(maximumSum(nums))

function maximumSum(nums: number[]): number {
    let max = -1;
    const mapOfsumOfNums:Map<number,number> = new Map<number,number>();

    nums.forEach((num,index)=> {
        const sumOfPartOfNums = num.toString().split("").reduce((sum,digit)=>sum+Number(digit),0)

        if (mapOfsumOfNums.has(sumOfPartOfNums)) {
            const sum = nums[index] + mapOfsumOfNums.get(sumOfPartOfNums)
            const maximumValue = Math.max(nums[index], mapOfsumOfNums.get(sumOfPartOfNums))
            mapOfsumOfNums.set(sumOfPartOfNums, maximumValue)
            max = Math.max(sum, max)
        }else{
            mapOfsumOfNums.set(sumOfPartOfNums,nums[index])
        }
    })
    return max;
};