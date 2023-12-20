// primitive - pass by value
// non - primitive -> pass by reference eg:- arrays,function


const id = Symbol('123')
const anotherId = Symbol('123')
//console.log(id)
console.log(id === anotherId)

//Array
const heros = ["shaktiman", "nagraj", "doga"];

//Object
{
    name: "shaktiman";
    age: 34;
}
//another way
let myObj = {
    name: "shaktiman",
    age: 34,
}

//function
const myFunction = function(){
    console.log("Hello world");
}
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

//************MEMORY*****************\\
//stack(primitive) ,Heap(non - primitive)

let myName = "don";
let nameMine = myName;
nameMine = "nod"

console.log(myName)
console.log(nameMine)




let userOne = {
    email: "mine@yours.com",
    upi: "money@sdf",
}
console.log(userOne.email)

let userTwo = userOne;
userTwo.email = "yours@mine.com"

console.log(userOne.email)