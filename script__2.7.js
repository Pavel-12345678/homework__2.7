const answer = 'Мороз';
answer.toLocaleUpperCase();

function filterStrings(array, StartStr) {
   return array.filter(item => item.toLowerCase().startWith(StartStr.toLowerCase()));
}

let num1 = Number(32.58884);
Math.floor(num1);

let num2 = Number(32.58884);
Math.ceil(num2); 

let num3 = Number(32.58884);
Math.round(num3);

let currentDate = new Date();
console.log(currentDate);

const j = [52, 53, 49, 77, 21, 32];
console.log(Math.max(...j));
console.log(Math.min(...j));

function RandomOneTen() {
   console.log(Math.floor(Math.random() * 10) + 1);
 };


function randomNumbers(n) {
   let result = [];
   for(let i = 0; i < n/2; i++) {
      result.push(Math.floor(Math.random() * n));
      }
      return result;
 };


 function Random(min, max) {
   return Math.ceil(Math.random() * (max - min + 1) + min);
 };

 console.log(new Date()):

 let currentDate = new Date();
 currentDate.setDate(currentDate.getDate() + 73);
 console.log(currentDate);

 function formatDate(date)  {
   let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
   Let months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']; 
return `Дата: ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} - это ${days[date.getDay()]}\nВремя: ${date.getHours()}:
${date.getMinutes()}:${date.getSeconds()}`;
   } 
console.log(formatDate(new Date()));

let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
fruits = fruits.sort(() => Math.random() - 0.5);
alert(fruits);
let firstGuess = promt('Чему равняется первый элемент массива?');
let lastGuess = prompt('Чему равняется последний элемент массива?');
if (firstGuess === fruits[0] && lastGuess === fruits[fruits.length - 1]) {
   alert('Поздравляем! Вы угадали оба слова');
}
if else(firstGuess === fruits[0] || lastGuess === fruits[fruits.length - 1]) {
   alert('Вы близки к победе!');
}
else {
   alert('Вы не угадали ни одного слова');
}


