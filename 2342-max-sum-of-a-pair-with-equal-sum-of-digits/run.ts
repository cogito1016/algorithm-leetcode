
// @ts-ignore
const nums = [18,43,36,13,7]
console.log(maximumSum(nums))

function maximumSum(nums: number[]): number {
    let max = -1;
    const mapOfsumOfNums:Map<number,number> = new Map<number,number>();

    nums.map((num)=>num.toString().split("").reduce((sum,digit)=>sum+Number(digit),0))
        .forEach((num, index)=> {
                if (mapOfsumOfNums.has(num)) {
                    const sum = nums[index] + nums[mapOfsumOfNums.get(num)]
                    const maximumValue = Math.max(nums[index], nums[mapOfsumOfNums.get(num)])
                    mapOfsumOfNums.set(num, nums.indexOf(maximumValue))
                    max = Math.max(sum, max)
                }else{
                    mapOfsumOfNums.set(num,index)
                }
            }
        )
    return max;
};