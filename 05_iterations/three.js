const arr =[1,2,3,4,5]

for (const num of arr) {
   // console.log(num);
}

const greetings = "Hello world!"
for(const greet of greetings){
    //console.log(greet);
}

// MAP
const map = new Map();
map.set('IN',"INDIA");
map.set('USA',"United States Of America");
map.set('FR', "France");

//console.log(map);

for (const [Key, value] of map) {
    // console.log(Key,':-', value);
}

const myObject ={
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}
for (const [Key, value] of myObject) {
    console.log(Key,':-', value);
}