const myArr = [1,2,3,4,5]
const myHeroes = ["shkatiman", "naagraj"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[0]);

// Array Methods
myArr.push(6)
console.log(myArr);

myArr.unshift(9)
console.log(myArr);

myArr.shift()
console.log(myArr);

myArr.shift()
console.log(myArr);

console.log(myArr.includes(7));
console.log(myArr.indexOf(4));
console.log(myArr.indexOf(7));

const newArr = myArr.join();
console.log(newArr);
console.log(typeof newArr);


// Slice Splice
console.log("A",myArr);

const myn1 = myArr.slice(1,3)
console.log("B",myArr);
console.log(myn1);


const myn2 = myArr.splice(1,3)
console.log("C",myArr);
console.log(myn2);