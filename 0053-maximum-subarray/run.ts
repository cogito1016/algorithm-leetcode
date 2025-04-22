const nums = [-2,1,-3,4,-1,2,1,-5,4];

console.log(maxSubArray(nums)) 

function maxSubArray(nums: number[]): number {
  const numsLen = nums.length;
  let max = -10001;
  let sum = 0;
  for(let i=0; i<numsLen; i++){
    sum = Math.max(sum+nums[i],nums[i])
    if(sum > max)
        max = sum
  }
  return max
};