// var c = 300
let a  = 300;
if(true){
    let a = 10;
    const b = 20;
    console.log(`INNER: ${a}`);
}

console.log(a);
 //******** INTERESTING *********\\
 
 addOne(5);
 function addOne(num){
    return num + 1;
 }

addTwo(5); // yae error dega kyuki addTwo humne dusre tarike sae declare kiya hae HOISTING kehte hae isse
 const addTwo = function(num){
    return num + 2
 }