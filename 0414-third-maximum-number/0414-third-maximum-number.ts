function thirdMax(nums: number[]): number {
    const N = nums.length

    let first = -Infinity;
    let second = -Infinity;
    let third = -Infinity;
    let uniqueCount = N;

    for(let i=0; i<N; i++){
        const num = nums[i]

        if(num===first || num===second || num===third){
            uniqueCount--
            continue
        }

        if(num>first){
            third = second
            second = first
            first = num
            continue;
        }

        if(num>second){
            third = second
            second = num
            continue;
        }

        if(num>third){
            third = num
            continue;
        }
    }

    if(uniqueCount<3)
        return first

    return third
};