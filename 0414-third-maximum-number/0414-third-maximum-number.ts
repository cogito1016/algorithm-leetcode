function thirdMax(nums: number[]): number {
  const N = nums.length
  if(N===1)
    return nums[0]
  if(N===2)
    return Math.max(nums[0],nums[1])

  let first = nums[0]
  let second = -Infinity;
  let third = -Infinity;
  let compareCount = 1;

  for(let i=1; i<N; i++){
    compareCount++;

    if(nums[i]===first || nums[i]===second || nums[i]===third){
        compareCount--
        continue;
    }

    if(nums[i]>first){
        third = second
        second = first
        first = nums[i]
        continue;
    }

    if(nums[i]>second){
        third = second
        second = nums[i]
        continue
    }

    if(nums[i]>third){
        third=nums[i];
    }
  }

  if(compareCount<3)
    return first

  return third
};