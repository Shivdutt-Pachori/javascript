//Singleton
//Object.create


const mySym = Symbol("Key1")
//Object literals
const JsUser = {
    name: "Shaktiman",
    "full name": "Shaktiman bhaiya",
    [mySym]: "myKey1",
    age: 18,
    location: "Bharat",
    email: "shaktiman@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);// both gies same output but it youshould always use this one instead of using dot
// i inserted "full name" key in obj ,now in these kind of situation you cannot use dot method to access the "full name" you have to use the second method
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "shaktiman@microsoft.com";//to change object value
console.log(JsUser["email"]);
//Object.freeze(JsUser);//now any changes made will not be applicable to the object

JsUser.greeting = function(){
    console.log("Hello JS user");
}
console.log(JsUser.greeting);
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello JS user:  ${this.name}`);
}
console.log(JsUser.greetingTwo());