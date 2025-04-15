const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;

rotate(nums, k);

function rotate(nums: number[], k: number): void {
  const len = nums.length;
  const repeatCnt = k % len;

  if (repeatCnt > 0) {
    swap(nums, 0, len - 1);
    swap(nums, 0, repeatCnt - 1);
    swap(nums, repeatCnt, len - 1);
  }
}

function swap(nums: number[], idx1: number, idx2: number): void {
  while (idx1 < idx2) {
    [nums[idx1], nums[idx2]] = [nums[idx2], nums[idx1]];
    idx1++;
    idx2--;
  }
}
