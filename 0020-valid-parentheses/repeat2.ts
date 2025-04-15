const s = "()[]{}"
console.log(isValid(s))

function isValid(s: string): boolean {
    let map = new Map<string, string>()
    map.set(")","(")
    map.set("}","{")
    map.set("]","[")

    const stack1 = [];

    for(const c of s){
      if(stack1.length===0){
        stack1.push(c)
        continue;
      }  

      const peek = stack1[stack1.length-1]

      if(map.get(c)===peek){
        stack1.pop();
        continue;
        }

        stack1.push(c)
    }

    return stack1.length===0
};