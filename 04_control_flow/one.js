//if

if(2 == "2"){
    console.log("executed");
}

if(2 === "2"){ // '===' this checks data type also
    console.log("not executed");
}

const score = 200;
if(score > 100){
    const power = "fly";
    console.log(`User power: ${power}`);

}
//console.log(`User power: ${power}`

if(score > 100){
    var powerr = "swim"; // var nhi use krna chahiye varna variable ka scope defined scope kae bahar bhi chala jata hae
    console.log(`User power: ${powerr}`);

}
console.log(`User power: ${powerr}`);
