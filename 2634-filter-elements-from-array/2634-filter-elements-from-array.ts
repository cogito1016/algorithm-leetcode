type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
    const filteredArr = [];
    for(let i=0; i<arr.length; i++){
        if(fn(arr[i],i)){
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
};

/*
정수배열 arr 
필터함수 fn

fn결과는 필터링된arr

fn은 1개 또는 2개 인자를받는다
- arr
- i (arr의 인덱스)


Filtered Arr는 arr부터 값의 맞는지 틀린지를 평가하여 요소를 포함시킨다.
맞는값은 true가 반환되는 value값.


*/