<<<<<<< HEAD
const n = 2


//1 = 1
//2 = 2
//3 = 4
//4 = 7
// 1 1 1 1 , 1 3, 3 1, 1 2 1, 2 1 1, 1 1 2, 2 2,

// 이건 DP일까?
function solution(n:number):number {
    const dic = [1,2,4,7]
=======
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
>>>>>>> 71520c48969bd5b641f250b565333bfe2e3f4bef
}