const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val) {
//     console.log(val);
// })

// coding.forEach( (item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe);

coding.forEach((item,index,arr) => {
   // console.log(arr,index,item);
})

const myCoding = [
    {
        languageName: "javascript",
        languageFIleName: "js"
    },
    {
        languageName: "cpp",
        languageFIleName: "cpp"
    },
    {
        languageName: "python",
        languageFIleName: "py"
    },
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})

