const nums = [1, 1, 2];

console.log(removeDuplicates(nums));

function removeDuplicates(nums: number[]): number {
  let idx = 0;
  const set = new Set<number>();
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (set.has(n)) continue;
    set.add(n);
    nums[idx++] = n;
  }

  return set.size;
}
