function map(arr: number[], fn: (n: number, m: number) => number): number[] {
    const result = [];
    
    for(let i=0; i<arr.length; i++){
        result.push(fn(arr[i],i));
    }
    
    return result;
};