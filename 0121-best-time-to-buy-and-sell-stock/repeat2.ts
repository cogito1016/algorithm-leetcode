const prices = [7,1,5,3,6,4];

console.log(maxProfit(prices))
//7,1,5,3,6,4의 경우 1에서사서 6에서팔면됨
function maxProfit(prices: number[]): number {
    let result = 0;
    let min = prices[0]
    
    for(let i=1;i<prices.length;i++){
        const price = prices[i]
        if(min>price){
            min = price
            continue
        }
        const cost = price-min;
        if(result<cost)
            result = cost
    }
    return result
};