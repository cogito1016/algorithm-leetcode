const nums=[1,2,3,4,5]
console.log(solution(nums))

function solution(nums:number[]):number[][]{
    const results:number[][] = [[]]
    const LENGTH = nums.length

    for(let i=1;i<=LENGTH;i++){
        results.push(...getCombination(nums,i))
    }


    return results;
}

function getCombination(arr:number[], len:number):number[][]{
    const results:number[][] = []

    function combine(combination:number[],idx:number){
        if(len===combination.length){
            results.push([...combination])
            return;
        }

        for(let i=idx; i<arr.length; i++){
            combination.push(arr[i])
            combine(combination,i+1)
            combination.pop()
        }
    }

    combine([],0)
    return results
}