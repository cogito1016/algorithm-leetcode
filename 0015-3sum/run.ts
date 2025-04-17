const nums = [-2,0,1,1,2]
console.log(threeSum(nums))

function threeSum(nums: number[]): number[][] {
    const set = new Set<string>()
    nums.sort((a,b,)=> a-b)

    for(let i=0; i<nums.length; i++){
        const num = nums[i]
        const target = num*-1
        let left = i+1;
        let right = nums.length-1

        while(left<right){
            if(nums[left]+nums[right]===target){
                set.add(`${num},${nums[left]},${nums[right]}`)
            }

            if(nums[left]+nums[right]<target){
                left++;
                continue;
            }

            right--;
        }
    
    }
    return Array.from(set).map((element:string)=>element.split(",").map((value)=>parseInt(value)))
};

// -4  -1  -1  0  1  2 
// left    mid     right