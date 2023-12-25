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