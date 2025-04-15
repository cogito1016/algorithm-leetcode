const nums = [1, 1, 2];

console.log(removeDuplicates(nums));

function removeDuplicates(nums: number[]): number {
  let idx = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[idx] = nums[i];
      idx++;
    }
  }

  return idx;
}
