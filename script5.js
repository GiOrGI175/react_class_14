const numbersss = [1, 2, 3, 4, 5, 6];

const square = numbersss.map((num) => {
  return num * num;
});

console.log(square);

let sum = 0;

const sumfun = numbersss.map((num) => {
  sum = sum + num;
  console.log(sum);
});

const score = [10, 20, 30, 40, 50];

const hightScore = score.filter((score) => score > 30);

console.log(hightScore);

const squad = [
  { name: 'giorigi', isHero: true },
  { name: 'beqa', isHero: true },
  { name: 'gio', isHero: false },
  { name: 'levani', isHero: true },
];

const heroList = squad
  .filter((hero) => hero.isHero)
  .map((hero) => `hello ${hero.name}`);

console.log(heroList);

const users = [
  { name: 'giorigi', score: '10' },
  { name: 'beqa', score: '20' },
  { name: 'gio', score: '40' },
  { name: 'levani', score: '100' },
];

const agred = users.filter((score) => score.score > 30);

console.log(agred);

const notagred = users.filter((score) => score.score < 30);

console.log(notagred);

const rate = agred.map((niceScore) => {
  let grade;
  if (niceScore.score > 50) {
    grade = 'dzaan magria';
  } else {
    grade = 'arcise kargia';
  }
  // return { name: niceScore.name, grades: grade };
});

// console.log(rate);

// const person = { name: 'John', age: 30 };

// console.log(person.name);

// const { age } = person;

// console.log(age);

// const [a, , b] = [1, 2, 3];
// console.log(b);

// const words = ['apple', 'banana', 'grape', 'plum'];
// const result = words.filter((word) => word.includes('p'));
// console.log(result);

// const superheroes = ['Spider-Man', 'Iron Man', 'Black Widow', 'Hulk', 'Thor'];

// const amazingSuperheroes = superheroes.map((hero) => `The Amazing ${hero}`);
// console.log(amazingSuperheroes);

// const fruits = ['apple', 'banana', 'orange', 'apple', 'mango', 'apple', 'kiwi'];
// const safeFruits = fruits.filter((fruit) => fruit !== 'apple');
// console.log(safeFruits);

// const powerLevels = [42, 17, 76, 29, 64, 33, 58];
// const evenPowerLevels = powerLevels.filter((level) => level % 2 === 0);
// console.log(evenPowerLevels);

// const myUser = {
//   name: 'girogi',
//   age: 15,
//   email: 'nozadze@gmail.com',
//   country: 'georgia',
// };

// let role = 'Admin';

// const newuser = { ...myUser, role };

// const squad2 = [
//   { name: 'giorigi', isHero: true },
//   { name: 'beqa', isHero: true },
//   { name: 'gio', isHero: false },
//   { name: 'levani', isHero: true },
// ];

// const statuss = squad2.filter((hero) => hero.isHero);

// const statuss = squad2.map((status) => {
//   let statusf;
//   if (status.isHero) {
//     statusf = 'hero';
//   } else {
//     statusf = 'antiHero';
//   }

//   return { ...status, statusf };
// });

// console.log(statuss);

//! martibi

// const statuss = squad2.map((status) => {
//   let statusf = status.isHero ? 'hero' : 'anti';

//   return { ...status, statusf };
// });

// console.log(statuss);

const squad1 = [
  { name: 'Thor', isHero: true },
  { name: 'Loki', isHero: false },
  { name: 'Captain America', isHero: true },
  { name: 'Red Skull', isHero: false },
  { name: 'Black Panther', isHero: true },
];

const newSquad = squad1.filter((isHero) => isHero.isHero);

console.log(newSquad);

const user = { name: 'John', email: 'john@example.com' };
const role = 'Admin';

const newUser = { ...user, role };

console.log(newUser);
