const numbers = [2,7,11,15]
const target = 9

console.log(twoSum(numbers,target))

function twoSum(numbers: number[], target: number): number[] {
    const map = new Map<number,number>()
    let result:number[] = []
    for(let i=0; i<numbers.length; i++){
        const num = numbers[i]
        const key = target-num

        if(map.has(num)){
            result = [map.get(num)!+1,i+1]
            break;
        }
        map.set(key,i)
    }

    return result;
};