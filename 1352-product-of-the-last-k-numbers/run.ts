class ProductOfNumbers {
    arr:number[]
    resultArr:number[]

    constructor() {
        this.arr = []
        this.resultArr = []
    }

    add(num: number): void {
        this.arr = [num, ...this.arr]
        this.resultArr = []
    }

    getProduct(k: number): number {
        if(this.resultArr.length!==0 && this.resultArr.length >= k){
            return this.resultArr[k-1]
        }

        this.arr.slice(0,k).forEach((num,idx)=>{
            this.resultArr[idx] = num * (idx!==0?this.resultArr[idx-1] : 1)
        })

        return this.resultArr[k-1]
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
