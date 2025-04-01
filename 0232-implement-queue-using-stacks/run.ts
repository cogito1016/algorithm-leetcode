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
        while(this.stack1.length!==0){
            const popNum = this.stack1.pop()
            if(!popNum)
                break
            this.stack2.push(popNum)
        }

        const result = this.stack2.pop()!;

        while(this.stack2.length!==0){
            const popNum = this.stack2.pop()
            if(!popNum)
                break
            this.stack1.push(popNum)
        }

        return result;
    }

    peek(): number {
        return this.stack1[0]
    }

    empty(): boolean {
        return this.stack1.length===0
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