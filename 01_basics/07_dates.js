let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toJSON());

let myCreatedDate = new Date(2023, 11, 22)
console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

myDate.toLocaleString('default',{
    weekday: "short"
})
console.log(myDate);
