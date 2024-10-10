class Stack{
    //초기화
    arr:number[]=[]
    pointer:number = -1

    constructor(length:number){
        this.arr = new Array(length).fill(0) // 0으로 초기화하지않으면 undefined로 초기화된다.
    }

    push(number:number):void{
        this.pointer++
        this.arr[this.pointer] = number
    }

    pop():number|null{
        if(this.isEmpty()){
            return null
        }
        const result = this.arr[this.pointer]
        this.pointer--;
        return result
    }

    size():number{
        for(let i=0; i<this.arr.length; i++){
            if(this.arr[i]==0){
                return i
            }
        }
        return this.arr.length
    }

    isEmpty():boolean{
        return this.size()==0
    }

    isFull():boolean{
        return this.size() == this.arr.length
    }

    printInfo():void{
        console.log(this.arr)
        console.log(`This stack size is ${this.size()}
        and Stack empty : ${this.isEmpty()}
        and Stack full : ${this.isFull()}
        and Stack size : ${this.size()}`)
    }
}

const stack = new Stack(5)
stack.printInfo();
stack.push(1)
stack.push(2)
stack.printInfo();
stack.pop()
stack.printInfo();
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.printInfo();

/**
 * 
 * [ 0, 0, 0, 0, 0 ]
This stack size is 0
        and Stack empty : true
        and Stack full : false
        and Stack size : 0
[ 1, 2, 0, 0, 0 ]
This stack size is 2
        and Stack empty : false
        and Stack full : false
        and Stack size : 2
[ 1, 2, 0, 0, 0 ]
This stack size is 2
        and Stack empty : false
        and Stack full : false
        and Stack size : 2
[ 1, 2, 3, 4, 5 ]
This stack size is 5
        and Stack empty : false
        and Stack full : true
        and Stack size : 5
 * 
 */