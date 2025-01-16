const n = 3
console.log(solution(6))
function solution(n:number): number{
    if(n===1) return 1;
    if(n===2) return 2;

    let first = 1 // 1
    let second = 2 // 1 , 2
    let now = 0;

    for(let i=3; i<=n; i++){
        now = first + second;
        first = second;
        second = now;
    }

    return now;
}