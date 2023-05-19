console.log("Задача №4: Знайти НСК двох двоцифрових натуральних чисел.");

let num1 = prompt("Введіть перше двоцифрове натуральне число:");
let num2 = prompt("Введіть друге двоцифрове натуральне число:");

if (
  num1.length !== 2 ||
  num2.length !== 2 ||
  isNaN(num1) ||
  isNaN(num2)
) {
  console.log("Введено некоректні числа.");
} 
else {
  num1 = Number(num1);
  num2 = Number(num2);

  let gcd = findGCD(num1, num2);
  let lcm = (num1 * num2) / gcd;

  console.log("Результат:","НСК(" + num1 + ", " + num2 + ") = " + lcm);
}

function findGCD(a, b) {
  if (b === 0) {
    return a;
  }
  return findGCD(b, a % b);
}