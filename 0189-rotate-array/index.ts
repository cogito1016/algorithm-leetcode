/**
 Do not return anything, modify nums in-place instead.
 */

const nums = [1,2,3,4,5,6,7]
const k = 3

rotate(nums,k)
function rotate(nums: number[], k: number): void {
    
    // while(k-->0){
        const len = nums.length
        k = k%len;
        swap(nums,0,len-1)
        swap(nums,0, k-1)
        swap(nums,k,len-1)

        nums
        console.log(nums)
    // }
};

function swap(nums:number[], start:number, end:number){
    while(start<end){
        [nums[start], nums[end]] = [nums[end], nums[start]]
        start++
        end--
    }
}

// 1 2 3 4 5
// 5 1 2 3 4
// 4 5 1 2 3


// 1 2 3 4 5
// 5 4 3 2 1

// 4 5 3 2 1
// 4 5 1 2 3 