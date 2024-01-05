const userEmail = "123@youtube.com";
if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Don'thave user email");
}

// falsy values
//false, 0, -0, BigInt 0n, "", null, undefined, NaN //inke alwa sun truthy values

// truthy values
//"0", 'false', " ", [], {}, function(){}

const emptyObj = {};

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

//Nullish Coalescing Operator (??): null undefined

let val1;
//val1 = 5 ?? 10;
val1 = null ?? 5;
val1 = null ?? 10 ?? 20;

// Terniary  Operator   
// condition ? true : false

const teaPrice = 100;
teaPrice >= 80 ? console.log("price greater than 80") : console.log("price less than 80")

console.log(val1);