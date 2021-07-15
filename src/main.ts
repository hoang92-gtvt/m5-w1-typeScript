function getFibonacyList(n:number):Array<number> {
    let arr = new Array(1,1);
    let index=2;
    while(index<n){
        arr.push(arr[index-2]+arr[index-1]);
        index++;
    }

    return arr;

}

function getSum(arr:Array<number>) :number {
    let sum = 0;
    for (const number of arr) {
        sum+= number;
    }
    return sum;
}

let arr= getFibonacyList(10);
let sum = getSum(arr);
console.log(arr);
console.log(sum);