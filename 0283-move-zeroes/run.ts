const nums = [0,1,0,3,12]
solution(nums)
console.log(nums)
function solution(nums:number[]):void{
    let zeroIdx = 0;

    const LENGTH = nums.length

    for(let i=0;i<LENGTH; i++){
        const target = nums[i]
        if(target===0)
            continue

        swap(nums,i,zeroIdx)
        zeroIdx++;
    }
}

function swap(arr:number[],idx1:number,idx2:number):void{
    const temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
}