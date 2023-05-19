console.log("Задача №1: Знайти остачу від ділення першої цифри на останню у заданому 5-ти цифровому натуральному числі.");

function addJsScript(src) {
  let script = document.createElement('script');
  script.src = src;
  script.async = false;
  document.body.appendChild(script);
}

let inputNumber = prompt("Введіть 5-ти цифрове натуральне число:");

if (inputNumber.length !== 5 || isNaN(inputNumber)) {
  console.log("Введено некоректне число.");
} 
else {
  let firstDigit = Number(inputNumber.charAt(0));
  let lastDigit = Number(inputNumber.charAt(4));

  let remainder = firstDigit % lastDigit;
  console.log("Результат виконання скрипта: " + remainder);
}

for (let i = 1; i < 2; i++) {
  function ask(question, yes, no) {
      if (confirm(question)) yes()
      else no();
  }

  ask(
      'Ви хочете перейти до розв’язку наступної задачі?',
      function () { addJsScript('./js/ex2.js') },
  );
}