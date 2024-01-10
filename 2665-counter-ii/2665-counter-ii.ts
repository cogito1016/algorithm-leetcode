type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {
    let initNum = init;
    let num = init;
    return {
        increment: ():number =>{
            num = num+1
            return num;
        } ,
        decrement: ():number =>{
            num = num-1
            return num;
        } ,
        reset: ():number =>{
            num=initNum;
            return num;
        } ,
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */