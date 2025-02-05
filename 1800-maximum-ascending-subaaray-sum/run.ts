const nums = [3,6,10,1,8,9,9,8,9]

console.log(maxAscendingSum(nums))

function maxAscendingSum(nums: number[]): number{
    let maximum = 0;
    let prevNum = 101;

    let temp = 0;
    for(const num of nums){
        if(prevNum>=num){
            temp = 0
        }

        temp += num;
        prevNum = num;

        if(temp>maximum)
            maximum=temp
    }

    return maximum
};