type Fn = (...params: number[]) => number

function memoize(fn: Fn): Fn {
    
    let map = new Map<number,number[]>
    let a,b :number;
    let newArr:number[] = []
    
    return function(...args) {
        if(args.length==1){
            a = args[0];
            if(!map.has(a)){
                    map.set(a,[])
            }
            
            if(map.get(a)[0]==undefined){
                map.set(a,[fn(...args)])
            }
            
            return map.get(a)[0];
        }else{
            a = args[0];
            b = args[1];
            if(!map.has(a)){
                    map.set(a,[])
            }
            
            if(map.get(a)[b]==undefined){    
                newArr = map.get(a)
                newArr[b]=fn(...args);
                map.set(a, newArr )
            }
            
            return map.get(a)[b];
        }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */