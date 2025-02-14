class ProductOfNumbers {
    arr:number[]
    resultArr:number[]

    constructor() {
        this.arr = []
        this.resultArr = [1]
    }

    add(num: number): void {
        this.arr.push(num)
        num===0?this.resultArr=[1]:this.resultArr.push(this.resultArr[this.resultArr.length-1]*num)
    }

    getProduct(k: number): number {
        const length = this.resultArr.length;
        if(length<k)
            return 0

        return this.resultArr[length-1]/this.resultArr[length-1-k] || 0
    }
}

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */

var obj = new ProductOfNumbers()
obj.add(3)
obj.add(0)
obj.add(2)
obj.add(5)
obj.add(4)
console.log(obj.getProduct(4))
obj.add(8)
console.log(obj.getProduct(2))
