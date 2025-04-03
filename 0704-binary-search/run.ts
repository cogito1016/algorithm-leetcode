const nums = [2,5];
const target = 5;

console.log(search(nums,target))

function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length-1;
    let mid = parseInt( (left+right)/2+"" )

    while(left <= right){
        if(nums[mid]===target)
            return mid
        else if(nums[mid]<target)
            left = mid+1
        else
            right = mid-1
        mid = Math.floor((left+right)/2)
    }

    return -1;
};