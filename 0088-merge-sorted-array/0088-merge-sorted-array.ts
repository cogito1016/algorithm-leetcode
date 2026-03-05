/**
 Do not return anything, modify nums1 in-place instead.
 무식이 방법으로 처리
 통과, 그러니 0MS수준이아니라 1MS수준으로 느리다. 
 */
// function merge(nums1: number[], m: number, nums2: number[], n: number): void {
//     const nums1ExceptZero :number[]= nums1.splice(0,m)
//     const nums2ExceptZero :number[]= nums2.splice(0,n)

//     nums1.splice(0,nums1.length,...(nums1ExceptZero.concat(nums2ExceptZero)).sort((a,b)=>a-b))
// };



function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i=m-1,j=n-1,k=nums1.length-1
    while(k>=0){

        if(j<0)
            break;

        if(nums1[i]>nums2[j]){
            nums1[k]=nums1[i]
            i--
        }else{
            nums1[k]=nums2[j]
            j--
        }

        k--
    }
};