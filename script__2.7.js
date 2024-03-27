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