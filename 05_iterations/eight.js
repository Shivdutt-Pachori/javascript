const myNums = [1,2,3];

// const myTotal = myNums.reduce(function(acc,currval){
//     return acc+currval;
// },0)
// console.log(myTotal);

const myTotal = myNums.reduce( (acc,currVal) => acc+currVal,0)
console.log(myTotal);

const shoppingCart = [
    {
        courseName: "js course",
        price: 2999
    },
    {
        courseName: "py course",
        price: 999
    },
    {
        courseName: "mobile dev course",
        price: 5999
    },
    {
        courseName: "data science course",
        price: 12999
    }
]

const total = shoppingCart.reduce((acc,currVal) => acc + currVal.price,0);
console.log(total);
