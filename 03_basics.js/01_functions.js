function myHero(){
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("K");
    console.log("T");
    console.log("I");
    console.log("M");
    console.log("A");
    console.log("N");
}

//myHero // this is reference of the function
myHero()

// function addnumbers(number1,number2){ // number1 and number2 are known as parameters
//    console.log(number1 + number2)
// }

// function addnumbers(number1,number2){ 
//     let result = number1 + number2;
//     return result;
//  }

function addnumbers(number1,number2){ 
    return number1 + number2;
 }
let ans = addnumbers(2,3) // 2 and 3 are known as arguments
console.log(ans);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Spiderman"))
console.log(loginUserMessage())

// what if we do not know number of parameters beforehand
function calCartPrice (...num1){
    return num1
}
console.log(calCartPrice(200,300,400));

//how to use and handle objects in function

const user = {
    username: "spiderman",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user);

const myNewArray = [200, 400, 500, 100];

function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));