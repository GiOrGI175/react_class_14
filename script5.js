// const numbersss = [1, 2, 3, 4, 5, 6];

// const square = numbersss.map((num) => {
//   return num * num;
// });

// console.log(square);

// let sum = 0;

// const sumfun = numbersss.map((num) => {
//   sum = sum + num;
//   console.log(sum);
// });

// const score = [10, 20, 30, 40, 50];

// const hightScore = score.filter((score) => score > 30);

// console.log(hightScore);

// const squad = [
//   { name: 'giorigi', isHero: true },
//   { name: 'beqa', isHero: true },
//   { name: 'gio', isHero: false },
//   { name: 'levani', isHero: true },
// ];

// const heroList = squad
//   .filter((hero) => hero.isHero)
//   .map((hero) => `hello ${hero.name}`);

// console.log(heroList);

// const users = [
//   { name: 'giorigi', score: '10' },
//   { name: 'beqa', score: '20' },
//   { name: 'gio', score: '40' },
//   { name: 'levani', score: '100' },
// ];

// const agred = users.filter((score) => score.score > 30);

// console.log(agred);

// const notagred = users.filter((score) => score.score < 30);

// console.log(notagred);

// const rate = agred.map((niceScore) => {
//   let grade;
//   if (niceScore.score > 50) {
//     grade = 'dzaan magria';
//   } else {
//     grade = 'arcise kargia';
//   }
//   return { name: niceScore.name, grades: grade };
// });

// console.log(rate);

const myUser = {
  name: 'girogi',
  age: 15,
  email: 'nozadze@gmail.com',
  country: 'georgia',
};

let role = 'Admin';

const newuser = { ...myUser, role };

const squad2 = [
  { name: 'giorigi', isHero: true },
  { name: 'beqa', isHero: true },
  { name: 'gio', isHero: false },
  { name: 'levani', isHero: true },
];

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

const statuss = squad2.map((status) => {
  let statusf = status.isHero ? 'hero' : 'anti';

  return { ...status, statusf };
});

console.log(statuss);
