class ProductOfNumbers {
    arr:number[]
    constructor() {
        this.arr = []
    }

    add(num: number): void {
        this.arr = [num, ...this.arr]
    }

    getProduct(k: number): number {
        return this.arr.slice(0,k).reduce((num,digit)=> num*digit,1)
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
