import set = Reflect.set;

let money = 10000;
const buyACar = (car: any) => {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if (money >= 10000) {
                resolve("can buy " + car);
            } else {
                reject("Do not enough money");
            }
        }, 100);
    }))
}

money = 8000;
const promise = buyACar("Vinfast").then(value => {
    console.log(value);
}, error => {
    console.log(error);
})

function handleTimeout(timeout:any){
    return new Promise(function(resolve,reject){
        setTimeout(resolve,timeout);
    });
}

var xxx= handleTimeout(5000);
xxx.then(function (){
    console.log("Lập");
})
.then(function(){
    return handleTimeout(3000);
})
.then(function(){
    console.log("Trình");
})
.then(function(){
    return handleTimeout(2000);
})
.then(function(){
    console.log("JaVa");
});