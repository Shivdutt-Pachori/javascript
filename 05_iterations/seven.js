const myNumbers = [1,2,3,4,5,6,7,8,9,10];

// myNumbers.forEach( (num) => { // isme tum sirf number ko ek variable mae store krake uss variable ki value mae 10 add kr rhe hoo
//     num = num + 10;
//    // console.log(num);
// })

// console.log(myNumbers);
// myNumbers.forEach( (num,index,array) => {
//      array[index] = num + 10;
    //console.log(num);


console.log(myNumbers);

// doing above using map function

//const newNums = myNumbers.map( (num) => num+10 );
//console.log(newNums);

const newNums = myNumbers
                .map((num) => num * 10)
                .map((num) => num + 1)
                .filter((num) => num > 40)


console.log(newNums);

