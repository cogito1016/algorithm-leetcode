type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    let result = init;
    
    nums.forEach((element)=>{
        result = fn(result,element);
    })
    
    return result;
};
/*
정수 배열 nums
리듀서 함수 fn
초기화 값 init

배열의 각 엘리먼트에 대해 fn을 실행한 최종 결과를 반환한다.

*/
