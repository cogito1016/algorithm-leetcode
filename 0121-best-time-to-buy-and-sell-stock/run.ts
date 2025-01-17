const prices:number[] = [7,1,5,3,6,4]
console.log(solution(prices))

function solution(prices:number[]):number{
    const LENGTH = prices.length;
    let max = 0;
    for(let i=0;i<LENGTH; i++){
        for(let j=i+1; j<LENGTH; j++){
            if(prices[j]-prices[i] > max){
                max = prices[j]-prices[i]
            }
        }
    }

    return max
}