const numbers = [5, 25, 75]
const target = 100

console.log(twoSum(numbers,target))

//two-sum 1과 동일하게 풀어도 됨, 그러나 문제의 의도는 '투포인터'를 사용하라.
function twoSum(numbers: number[], target: number): number[] {
    let left =0, right =1;
    let result:number[] = []

    while(left<numbers.length){
        const num = numbers[left]
        const pair = target-num

        if(numbers[right]===pair){
            result = [left+1,right+1]
            break;
        }else if(numbers[right] < pair){
            right++
        }else if(numbers[right] > pair){
            left++;
            right=left+1;
        }

        if(right >= numbers.length){
            left++;
            right=left+1;
        }
    }

    return result;
};