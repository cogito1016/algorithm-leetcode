const prices:number[] = [4,7,1,2,11]
console.log(solution(prices))

function solution(prices:number[]):number{

    let min = prices[0];
    let maxProfit = 0;
    for(let i=1; i<prices.length; i++){
        const currentValue = prices[i];

        if(min>currentValue)
            min=currentValue

        const profit = currentValue-min
        if(currentValue-min > maxProfit)
            maxProfit = profit
    }

    return maxProfit
}