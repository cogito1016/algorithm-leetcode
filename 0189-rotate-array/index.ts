/**
 Do not return anything, modify nums in-place instead.
 */

const nums = [1,2,3,4,5,6,7]
const k = 3

rotate(nums,k)
function rotate(nums: number[], k: number): void {
    const len = nums.length

    while(k-->0){
        const last = nums[len-1]
        let target = nums[0]
        for(let i=1;i<len; i++){
            const temp = nums[i]
            nums[i] = target
            target = temp
        }
        nums[0] = last

        console.log(nums)
    }
 };