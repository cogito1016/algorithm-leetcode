const nums:number[] = [1,3,5,7];
const target:number = 4;
console.log(searchInsert(nums,target))

function searchInsert(nums: number[], target: number): number {
    let left:number,right:number,mid:number;
    left = 0;
    right = nums.length;
    mid = Math.floor((left+right)/2)

    while(nums[mid]!==target){
        let midValue = nums[mid];
        if(midValue>=target){
            right = mid
        }else{
            left = mid
        }
        mid = Math.floor((left+right)/2)
        if(midValue===nums[mid]){
            if(target>nums[mid]){
                return mid+1
            }

            return mid
        }
    }
    return mid
}