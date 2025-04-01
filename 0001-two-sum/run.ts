const nums:number[] = [3,2,4]
const target:number = 6 

console.log(twoSum(nums,target))

function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number,number>();
    const reusltIdxList = [];

    for(let i=0; i<nums.length; i++){
        const num = nums[i]
        const key = target-num

        if(map.has(num)){
            reusltIdxList.push(map.get(num)!)
            reusltIdxList.push(i)
            continue
        }
        map.set(key, i)
    }

    return reusltIdxList
};