/**
 Do not return anything, modify nums in-place instead.
 */

const nums = [1,2,3,4,5,6,7]
const k = 3

rotate(nums,k)
function rotate(nums: number[], k: number): void {
    const len = nums.length

    while(k-->0){
        const lastValue = nums[len-1];
        nums = [lastValue, ...nums.slice(0,-1)]
        console.log(nums)
    }
 };