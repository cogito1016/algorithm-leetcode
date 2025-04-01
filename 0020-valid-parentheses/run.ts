const s = "()()())";

console.log(isValid(s))

function isValid(s: string): boolean {
    const stack = [];
    for(const c of s ){
        if (!isCloseBracket(c)){
            stack.push(c)
            continue
        }

        if(stack.length===0)
            return false

        const peek = stack[stack.length-1]

        if(isPair(peek,c)){
            stack.pop()
            continue
        }
        
        return false
    }

    return stack.length===0
};

function isCloseBracket(s:string):boolean{
    return s===']'||s==='}'||s===')'
}

function isPair(oldS:string, newS:string):boolean{
    if(oldS==='[')
        return newS === ']'
    else if(oldS==='{')
        return newS ==='}'
    else if(oldS==='(')
        return newS===')'
    return false;
}