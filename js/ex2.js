console.log("Задача №2: Задано чотирикутник координатами своїх вершин. Знайти найбільшу з його сторін (її довжину).");

function addJsScript(src) {
  let script = document.createElement('script');
  script.src = src;
  script.async = false;
  document.body.appendChild(script);
}

let vertex1, vertex2, vertex3, vertex4;

vertex1 = prompt("Введіть координату x1 y1 першої вершини (через пробіл):");
vertex2 = prompt("Введіть координату x2 y2 другої вершини (через пробіл):");
vertex3 = prompt("Введіть координату x3 y3 третьої вершини (через пробіл):");
vertex4 = prompt("Введіть координату x4 y4 четвертої вершини (через пробіл):");

let [x1, y1] = vertex1.split(" ");
let [x2, y2] = vertex2.split(" ");
let [x3, y3] = vertex3.split(" ");
let [x4, y4] = vertex4.split(" ");

x1 = Number(x1);
y1 = Number(y1);
x2 = Number(x2);
y2 = Number(y2);
x3 = Number(x3);
y3 = Number(y3);
x4 = Number(x4);
y4 = Number(y4);

function calculateDistance(x1, y1, x2, y2) {

  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function findLargestSide(x1, y1, x2, y2, x3, y3, x4, y4) {

  const side1 = calculateDistance(x1, y1, x2, y2);
  const side2 = calculateDistance(x2, y2, x3, y3);
  const side3 = calculateDistance(x3, y3, x4, y4);
  const side4 = calculateDistance(x4, y4, x1, y1);


  const largestSide = Math.max(side1, side2, side3, side4);

  return largestSide;
}

if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2) || isNaN(x3) || isNaN(y3) || isNaN(x4) || isNaN(y4)) {
  console.log("Введено некоректні координати.");
} 
else {
  const largestSide = findLargestSide(x1, y1, x2, y2, x3, y3, x4, y4);
  console.log("Найбільша сторона чотирикутника: " + largestSide);
}

for (let i = 1; i < 2; i++) {
  function ask(question, yes, no) {
      if (confirm(question)) yes()
      else no();
  }

  ask(
      'Ви хочете перейти до розв’язку наступної задачі?',
      function () { addJsScript('./js/ex3.js') },
  );
}