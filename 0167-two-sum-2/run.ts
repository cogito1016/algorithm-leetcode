const numbers = [5, 25, 75]
const target = 100

console.log(twoSum(numbers,target))

//two-sum 1과 동일하게 풀어도 됨, 그러나 문제의 의도는 '투포인터'를 사용하라.
function twoSum(numbers: number[], target: number): number[] {
    let left =0, right =numbers.length-1;
    let result:number[] = []

    while(left<right){
        const pair = target-numbers[left]

        if(pair === numbers[right]){
            result = [left+1, right+1]
            break;
        }

        if(pair < numbers[right])
            right--;

        if(pair > numbers[right])
            left++;
    }

    return result;
};