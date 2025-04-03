const nums1 = [1,2,2,1];
const nums2 = [2,2]

console.log(intersection(nums1,nums2))

function intersection(nums1: number[], nums2: number[]): number[] {
   const set1 = new Set<number>();
   const set2 = new Set<number>();
   const result:number[] = [];

   nums1.forEach((element)=>{
    set1.add(element)
   })

   nums2.forEach((element)=>{
    set2.add(element)
   })

   set1.forEach((element)=>{
    if(set2.has(element)){
        result.push(element)
    }
   })

   return result
};
