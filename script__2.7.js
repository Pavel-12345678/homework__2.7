const answer = 'Мороз';
answer.toLocaleUpperCase();

function filterStrings(array, startStr) {
   return array.filter(item => item.toLowerCase().startWith(StartStr.toLowerCase()));
}

let num1 = 32.58884;
Math.floor(num1);
Math.ceil(num1); 
Math.round(num1);

let currentDate = new Date();
console.log(currentDate);

const j = [52, 53, 49, 77, 21, 32];
console.log(Math.max(...j));
console.log(Math.min(...j));

function randomOneTen() {
   console.log(Math.floor(Math.random() * 10) + 1);
 };


function randomNumbers(n) {
   let result = [];
   for(let i = 0; i < n/2; i++) {
      result.push(Math.floor(Math.random() * n));
      }
      return result;
 };


 function random(min, max) {
   return Math.ceil(Math.random() * (max - min + 1) + min);
 };

 console.log(new Date()):

 let currentDate = new Date();
 currentDate.setDate(currentDate.getDate() + 73);
 console.log(currentDate);

 function formatDate(date)  {
   let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
   let months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']; 
return `Дата: ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} - это ${days[date.getDay()]}\nВремя: ${date.getHours()}:
${date.getMinutes()}:${date.getSeconds()}`;
   } 
console.log(formatDate(new Date()));

let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
let fruits1 = фрукты;
if (fruits.toLowerCase() === fruits1.toLowerCase()) {
   alert ('Правильный ответ!');
} else {
   alert ('Не угадал.Правильный ответ: ${fruits1}');
}
fruits = fruits.sort(() => Math.random() - 0.5);
alert(fruits);
let firstGuess = prompt('Чему равняется первый элемент массива?');
let lastGuess = prompt('Чему равняется последний элемент массива?');
if (firstGuess === fruits[0] && lastGuess === fruits[fruits.length - 1]) {
   alert('Поздравляем! Вы угадали оба слова');
}
else if (firstGuess === fruits[0] || lastGuess === fruits[fruits.length - 1]) {
   alert('Вы близки к победе!');
}
else {
   alert('Вы не угадали ни одного слова');
}


