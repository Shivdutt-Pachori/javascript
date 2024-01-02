const user = {
    username: "spiderman",
    price: 49,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
    }
}
user.welcomeMessage()
user.username = "superman";
user.welcomeMessage();

console.log(this);// if you run this in browser toh output window milega

function chai(){
     let username = "perman";
    console.log(this.username);
}

const chaii = () => {
    let username = "perman";
    console.log(this.username);
}

// const addTwo = (num1, num2) => {         // explicit return
//     return num1+num2;
// }
const addTwo = (num1, num2) => num1+num2; // implicit written

console.log(addTwo(3,4));