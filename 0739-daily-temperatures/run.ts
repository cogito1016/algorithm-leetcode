const temperatures = [73,74,75,71,69,72,76,73]
console.log(dailyTemperatures(temperatures))

function dailyTemperatures(temperatures: number[]): number[] {
    const stack:number[] = []
    const result:number[] = Array(temperatures.length).fill(0)
    
    if(temperatures.length===1)
        return [0]

    stack.push(0)
    for(let i=1; i<temperatures.length; i++){
        const present = temperatures[i]

        let beforeIdx = stack.pop()!
        while(temperatures[beforeIdx] < present){
            result[beforeIdx] = i-beforeIdx
            if(stack.length===0)
                break
            beforeIdx = stack.pop()!
        }

        if(temperatures[beforeIdx] >= present){
            stack.push(beforeIdx)
        }

        stack.push(i)
    }

    return result
};



/**
 * 
 * 
 * 그럼 [73,74,75,71,69,72,76,73]일때

stack 0 (value73) 
stack 0 (value73) < 1(value74) res[0] = 1-0 = 1
stack 
stack 1 (value74) < 2(value75)  res[1] = 2-1 = 1
stack 
stack 2(value75) > 3(value 71) 
stack 2 3(value 71) > 4(value 69)
stack 2 3 4(value 69) < 5(value 72) res[4] = 5-4 =1
stack 2 3(value 71) < 5(value 72) res[3] = 5-3 = 2
stack 2 (value 75) > 5(value 72) 
stack 2 5 (value 72) < 6(value 76) res[5] = 6-5 =1
stack 2 (value 75) < 6(value 76) res[2] = 6-2 =4
stack 
stack 6(value 76) > 7(value 73)
stack 6 7(value 73)
end

res = 1 1 4 2 1 1 0 0  
 */