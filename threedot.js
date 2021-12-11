const arr = [12, 23, 5, 65, 76, 87, 9];
const arr1 = [11, 14, 57, 89, 43, 22];
const total = [...arr, ...arr1];
console.log(...total);
const maximum = Math.max(...total);
console.log(maximum);
