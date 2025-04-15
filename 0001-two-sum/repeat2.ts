const nums = [2,7,11,15]
const target = 9

console.log(twoSum(nums, target))

function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number,number>()
    let result:number[]= [];

    for(let i=0; i<nums.length; i++){
        const num = nums[i]
        const key = target-num
        const value = i

        if(map.has(num)){
            result = [map.get(num)!,i]
            break;
        }

        map.set(key,value)
    }

    return result
};