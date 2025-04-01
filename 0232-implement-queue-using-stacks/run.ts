class MyQueue {
    stack1:number[]
    stack2:number[]

    constructor() {
        this.stack1 = []        
        this.stack2 = []        
    }

    push(x: number): void {
        this.stack1.push(x)
    }

    pop(): number {
        this.shiftStacks();
        return this.stack2.pop()!;
    }

    peek(): number {
        this.shiftStacks();
        const result =  this.stack2.pop()!;
        this.stack2.push(result)
        return result
    }

    empty(): boolean {
        return this.stack1.length===0 && this.stack2.length===0
    }

    shiftStacks(): void{
        if(this.stack2.length===0){
            if(this.stack1.length>0){
                while(this.stack1.length!==0){
                    this.stack2.push(this.stack1.pop()!)
                }
            }
        }
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */