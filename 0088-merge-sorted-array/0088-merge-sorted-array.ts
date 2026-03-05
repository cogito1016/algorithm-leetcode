/**
 Do not return anything, modify nums1 in-place instead.
 무식이 방법으로 처리
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    const nums1ExceptZero :number[]= nums1.splice(0,m)
    const nums2ExceptZero :number[]= nums2.splice(0,n)

    nums1.splice(0,nums1.length,...(nums1ExceptZero.concat(nums2ExceptZero)).sort((a,b)=>a-b))
};