const nums = [-1,0,3,5,9,12]
console.log(solution(nums,2))

function solution(nums:number[],target:number):number{
    let left=0;
    let right = nums.length-1
    let mid = 0;
    let result = -1

    if(nums.length===1 && nums[0]===target)
        return 0

    while(left<=right){
        mid = Math.floor((left+right)/2)
        const current = nums[mid]

        if(current===target){
            result = mid;
            break
        }else if(current<target){
            left = mid+1
        }else{
            right = mid-1
        }
    }

    return result
}