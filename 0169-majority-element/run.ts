const nums = [2,2,1,1,1,2,2]
console.log(solution(nums))

function solution(nums:number[]){
    const LENGTH = nums.length;

    if(LENGTH===1)
        return nums[0]

    const map = new Map<number,number>();
    let max = 0;
    let majority = 0;

    for(let i=0;i<LENGTH;i++){
        const num = nums[i];
        const newValue = (map.get(num) ?? 0) + 1
        map.set(num,newValue)

        if(newValue>max){
            max=newValue
            majority=num
        }
    }

    return majority
}