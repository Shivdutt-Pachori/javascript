const marvelHeroes = ["thor","Ironman","Spiderman"];
const dcHeroes = ["superman","flash","batman"];

//marvelHeroes.push(dcHeroes);//not a good way to do bcz it adds dsHeroes array as an element in marvelHeroes array

//console.log(marvelHeroes.push(dcHeroes));
//console.log(typeof marvelHeroes.push(dcHeroes));

console.log(marvelHeroes);
console.log(marvelHeroes.length);

const allHeroes = marvelHeroes.concat(dcHeroes);// concat returns an array by combining 2 arrays
//console.log(marvelHeroes);
//console.log(allHeroes);

const allNewHeroes = [...marvelHeroes, ...dcHeroes];
console.log(allNewHeroes);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const realAnotherArray = anotherArray.flat(Infinity);
console.log(realAnotherArray);

console.log(Array.isArray("Spiderman"));
console.log(Array.from("Spiderman"));
console.log(Array.from({name: "Spiderman"}));//intresting (we need to specify that we want an array of keys or values if we do not specify anything by default it will return empty array)

const score1 = 100;
const score2 = 200;
const score3 = 300;
console.log(Array.of(score1,score2,score3));