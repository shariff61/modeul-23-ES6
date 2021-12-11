// template bolte 3 type function ke bujhay

// 1 declaration function
const arr1 = function (num) {
  return num * 2;
};
const total = arr1(5);
console.log(total);
//2 expression function
function arr2(num1) {
  return num1 * 3;
}
const total1 = arr2(54);
console.log(total1);
// 3. arrow function
const arr3 = (num3) => num3 * 3;
const total2 = arr3(12);
console.log(total2);
//////////
const arr4 = (num4, num5) => {
  const number1 = num4 + num5 / 2;
  const number2 = num4 - num5 / 2;
  const total3 = number1 + number2;
  return total3;
};
const arr5 = arr4(2, 5);
console.log(arr5);
