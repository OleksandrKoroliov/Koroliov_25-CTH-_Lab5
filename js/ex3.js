console.log("Задача №3: Скласти програму розкладу числа на прості множники.");

function addJsScript(src) {
  let script = document.createElement('script');
  script.src = src;
  script.async = false;
  document.body.appendChild(script);
}

let inputNumbers = prompt("Введіть число:");

if (isNaN(inputNumbers) || inputNumbers <= 1) {
  console.log("Введено некоректне число.");
} 
else {
  let number = parseInt(inputNumbers);
  let primeFactors = [];

  for (let i = 2; i <= number; i++) {
    while (number % i === 0) {
      primeFactors.push(i);
      number /= i;
    }
  }

  console.log("Прості множники числа " + inputNumbers + ": " + primeFactors.join(", "));
  
}

for (let i = 1; i < 2; i++) {
  function ask(question, yes, no) {
      if (confirm(question)) yes()
      else no();
  }

  ask(
      'Ви хочете перейти до розв’язку наступної задачі?',
      function () { addJsScript('./js/ex4.js') },
  );
}