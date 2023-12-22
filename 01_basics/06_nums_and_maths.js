const balance = new Number(100)

//const numString = toString(100)
console.log(balance.toString());
console.log(balance.toFixed(2));

const otherNumber = 23.8966

console.log(otherNumber.toPrecision(3));
console.log(otherNumber.toPrecision(4));
console.log(otherNumber.toPrecision(5));

const otherNumber1 = 123.8966
console.log(otherNumber1.toPrecision(3));



const hundreds = 10000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));

// +-% MATHS %-+ \\
console.log(Math.abs(-4));
console.log(Math.round(4.7));
console.log(Math.ceil(5.8));
console.log(Math.floor(3.7));
console.log(Math.min(1,2,3,4,5,6));
console.log(Math.max(1,2,3,4,5,6));
console.log(Math.random());
console.log(Math.random()*10);
console.log((Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);