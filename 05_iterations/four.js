const myObject = {
    js: 'Javascript',
    cpp: 'c++',
    rb: 'Ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
   //console.log(myObject[key]);
}

const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    console.log(key);// for in loop mae variable takes values of index
}                    // for of loop mae variable takes values of VALUE at index