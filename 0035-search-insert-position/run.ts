const nums:number[] = [1,3,5,7];
const target:number = 6;
console.log(searchInsert(nums,target))

function searchInsert(nums: number[], target: number): number {
    let left:number,right:number,mid:number;
    left = 0;
    right = nums.length;

    while(left<right){
        const mid = Math.floor((left+right)/2)

        if(nums[mid]===target){
            return mid
        }else if(nums[mid]<target){
            left = mid+1
        }else{
            right = mid;
        }
    }

    return left
}