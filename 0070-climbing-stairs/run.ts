const n = 3
console.log(solution(6))
function solution(n:number): number{
    const dp :number[] = Array(46).fill(0)
    dp[1] = 1 // 1
    dp[2] = 2 // 1 , 2
    dp[3] = 3 // 1 1 1, 1 2, 2 1
    dp[4] = 5 // 1 1 1 1, 1 1 2, 1 2 1, 2 1 1, 2 2
    dp[5] = 8 // 1 1 1 1 1, 1 1 1 2, 1 1 2 1, 1 2 1 1, 2 1 1 1, 2 2 1, 2 1 2, 1 2 2,

    for(let idx=6; idx<46; idx++){
        dp[idx] = dp[idx-1] + dp[idx-2]
    }

    return dp[n];
}