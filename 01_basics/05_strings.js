const name = "haekuch"
const age = 0

//console.log(name + age + "valuekoi");

console.log(`my name is not ${name} and my age is not ${age}`)

const naam = new String("Nirdo-sh-hae");
console.log(naam[0]);
console.log(naam.__proto__);

console.log(naam.length);
console.log(naam.toUpperCase());
console.log(naam.charAt(4));
console.log(naam.indexOf('s'));

const newString = naam.substring(2,4);// 4 will not be included
console.log(newString);

const anotherString = naam.slice(-7,4);
console.log(anotherString);

const newStringOne = "   maee   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://naam.com/naam%20aagekanaam"
console.log(url.replace('%20','-'));
console.log(url.includes('naam.'));
console.log(naam.split('-'));//gives array as a output