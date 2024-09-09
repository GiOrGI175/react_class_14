// const aphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

// const numbers = [1, 2, 3, 4, 5];

// console.log(aphabet[0]);

// console.log(aphabet[1]);

// console.log(aphabet[2]);

//! დესტრუქტორიზაცია

// const [first, second, , four, ...rest] = aphabet;

// console.log(first);

// console.log(four);

// console.log(rest);

const aphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

const numbers = [1, 2, 3, 4, 5];

const group3 = [...aphabet, ...numbers];

console.log(group3);
