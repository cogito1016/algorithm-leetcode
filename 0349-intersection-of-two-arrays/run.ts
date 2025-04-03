const nums1 = [1,2,2,1];
const nums2 = [2,2]

console.log(intersection(nums1,nums2))

function intersection(nums1: number[], nums2: number[]): number[] {
   const set1 = new Set(nums1);
   const result = new Set<number>();

   for(const num of nums2){
    if(set1.has(num)){
        result.add(num)
    }
   }
   
   return Array.from(result)
};
