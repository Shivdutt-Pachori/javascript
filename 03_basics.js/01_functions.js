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