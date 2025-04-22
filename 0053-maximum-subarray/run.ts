const nums = [-2,1,-3,4,-1,2,1,-5,4];

console.log(maxSubArray(nums)) 

function maxSubArray(nums: number[]): number {
  const numsLen = nums.length;
  let max = nums[0];
  for(let i=0; i<numsLen; i++){
    const iNum = nums[i]
    let sum = iNum;
    if(sum>max)
        max=sum

    for(let j=i+1; j<numsLen; j++){
        sum+=nums[j]
        if(sum>max)
            max=sum
    }
  }
  return max
};