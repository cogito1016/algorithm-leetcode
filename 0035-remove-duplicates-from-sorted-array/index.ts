let nums:number[] = [0,0,1,1,1,2,2,3,3,4]

console.log(removeDuplicates(nums))

function removeDuplicates(nums: number[]): number {
    const result = new Set<number>()
    
    nums.forEach((num)=>result.add(num))
    nums = Array.from(result)

    return result.size;
};