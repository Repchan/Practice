// Задание 1

// var num = prompt("Введите значение");
// num = +num;
// if(typeof num == "number"){
// 	if(num % 2 == 0){
// 		console.log(`Число ${num} чётное`);
// 	}
// 	else if(num % 2 == 1){
// 		console.log(`Число ${num} нечётное`);
// 	}
// 	else if(num == "NaN"){
// 		console.log(`Число ${num} равняется NaN , ошибка`);
// 	}
// 	else{
// 		console.log(`Неверное значение , ошибка`);
// 	}
// }



// Задание 2

// var x;
// let typeOf = (x)=>{
// 	if(typeof x == "number"){
// 		console.log(`${x} - число`)
// 	}
// 	if(typeof x == "boolean"){
// 		console.log(`${x} - булеан`)
// 	}
// 	if(typeof x == "string"){
// 		console.log(`${x} - строка`)
// 	}
// }
// typeOf("Утречка")

//Задание из тренажёра 4

// a = 12;
// b = 'number';
// c = false;
// d = null;
// e = undefined;
// f = 123.34;
// g = '1' + 1;
// h = 15 / 0;
// i = -'5';
// j = 5 == '5'

// at = typeof a === 'number'; // true
// bt = typeof b === 'string'; // false, а нужно чтобы все были true
// ct = typeof c === 'boolean';
// dt = typeof d === 'object';
// et = typeof e === 'undefined';
// ft = typeof f === 'number';
// gt = typeof g === 'string';
// ht = typeof h === 'number';
// it = typeof i === 'number';
// jt = typeof j === 'boolean';
// alert(at && bt && ct && dt && et && ft && gt && ht && it && jt);

//Т ренажёр задание 5

// const NDS = 0.20
// const NDFL = 0.13
// const EXCISE = 0.1
// let RENT = 40000
// let FOOD = 15000
// let OTHER = 15000
// let MY_SALARY = 120000

// let ndflTax = MY_SALARY * NDFL;
// let mySalaryNet = MY_SALARY - ndflTax;
// let otherTaxes = mySalaryNet * (NDS + EXCISE);
// let totalAvailable = mySalaryNet - otherTaxes;
// totalAvailable -= FOOD + OTHER + RENT
// alert('Зарплата ' + MY_SALARY + ' рублей')
// alert('Уплачено налогов на сумму ' + (ndflTax + otherTaxes) + ' рублей')
// alert('Осталось ' + totalAvailable + ' рублей')

//Задание 3 модуль

// let str = "Hello";
// console.log(str.split('').reverse().join(''));

//Задание 4 модуль

// let num = Math.random() * 100;
// console.log(Math.round(num));

//Задание 1 тренажёр условия

// let a = prompt("Введите сторону а");
// let b = prompt("Введите сторону b");
// let c = prompt("Введите сторону c");
// if(a == b && b == c){
// 	alert(`Стороны треугольника равны`);
// }
// else{
// 	alert(`Стороны треугольника не равны`);
// }

//Задание 2 тренажёр условия

// let a = prompt("Введите число а");
// let b = prompt("Введите число b");
// let c = prompt("Введите число c");

// if(a > b){
// 	if(a > c){
// 		alert(`Число a = ${a} больше чем ${b} и ${c}`);
// 	}
// 	else{
// 		alert(`Число c =${c} больше чем ${a} и ${b}`);
// 	}
// }
// else if(b > c){
// 	alert(`Число b = ${b} больше чем ${a} и ${c}`);
// }
// else{
//  	alert(`Число c =${c} больше чем ${a} и ${b}`);
// }

//Задание 3 тренажёр условия

// let N = prompt(`Введите число `);
// N = +N
// if(typeof N == `number`){
// 	if(N % 2 == 0){
// 		alert(`Число ${N} чётное`);
// 	}
// 	else if(N % 2 == 1){
// 		alert(`Число ${N} нечётное`);
// 	}
// 	else{
// 		alert(`Вы допустили ошибку`)
// 	}
// }

//Задание 1 циклы 

// for(let i = 0; i<=10; i++){
// 	if(i % 2 == 1 && i <= 5){
// 		console.log(i);
// 	}
// 	else if(i >= 5 && i % 2 == 0){
// 		console.log(i);
// 	}
// }

//Задание 2 циклы

// let b = 0;
// let a;
// while(a != 0){
// 	a = prompt("Введите число");
// 	a = +a;
// 	b = b + a;
// 	if(a == 0){
// 		alert(`Сумма всех чисел = ${b}`);
// 	}
// }

//Задание 3 циклы

// let n = 0;
// let res = 0;

// while(n < 100){
// 	n = prompt(`Введите ${n + 10}`);
// 	n = +n;
// 	if(n == 100){
// 		alert(`Спасибо!`);
// 	}
// 	else if(res + 10 == n){
// 		res = n;
// 	}
	
// 	else if(n != res + 10){
// 		n = res;
// 	}
// }

//Задание 5 массивы 

// let arr = [23 , 41, "Привет" , "Hello world!" , 12];
// console.log(`Длинна масива = ${arr.length}`);
// for(let i = 0; i < arr.length;i++){
// 	console.log(`${i+1} елемент массива - ${arr[i]}`);
// }

//задание 6 циклы

// function equalArr(arr){
// 	let equal = true;
// 	for(let i = 0;i<arr.length - 1 && equal;i++){
// 		if(arr[i] != arr[i+1] && i ){
// 			equal = false;
// 			return console.log(`Елементы масива не одинаковые. Equal = ${equal}`);
// 		}
// 		else{
// 			equal = true;
// 		}
// 	}
// 	return console.log(`Елементы масива одинаковые. Equal = ${equal}`);
// }
// equalArr([1,1,1,1,1]);
// equalArr([1,1,1,1,11]);
// equalArr([`Привет`,`Привет`]);

//Задание 7 циклы

// function evenOrOdd(arr){
// 	let even = 0;
// 	let odd = 0;
// 	let zero = 0;
// 	for(let i = 0;i<arr.length;i++){
// 		if(arr[i] % 2 == 0 && arr[i] != 0){
// 			even++;
// 		}
// 		else if(arr[i] % 2 == 1 && arr[i] != 0){
// 			odd++;
// 		}
// 		else if(arr[i] == 0){
// 			zero++;
// 		}
// 	}
// 	return console.log(`Количество чётных чисел = ${even}, Количество нечётных = ${odd}, Количество нулей = ${zero}`);
// }
// evenOrOdd([1,23,44,25,60,81,0,2,33,0,28,12,98,0,24]);
// evenOrOdd([1,2,3,4,5,6,7,8,9,0]);

//Задание 8 Ассоциативные массивы

// let map = new Map();
// map.set(`name` , 'Misha');
// map.set(`lastName` , `Reprintsev`);
// map.set(`age` , 20);
// for(let keys of map.keys()){
// 	console.log(`Ключ — ${keys}, значение — ${map.get(keys)}`);
// }

//Функции тренажёр 1

// let countDown = function(n){
// 	for(;n > 0;n--){
// 		console.log(n);
// 	}
// }
// countDown(5)

//Функции тренажёр 2

// let getPercents = function(percent, number){
// 	console.log(number * (percent/100));
// }
// getPercents(30, 200)

//Функции тренажёр 3

// let repeatWord = function(word, count){
// 	for(let i = 1;i<=count;i++){
// 		console.log(word + i)
// 	}
// }
// repeatWord('слово', 3)

//Функции тренажёр 4

// function createAdder(a){
// 	return function addA(b){
// 		return(a+b);
// 	}
// }
	
// const add5 = createAdder(5);
// console.log(add5(5));
// console.log( add5(12) )

//Функции тренажёр 5

// let monthArr = [`январь` , `февраль`, `март`, `апрель`, `май`, `июнь`, `июль`, `август`, `сентябрь`, `октябрь`, `ноябрь`, `декабрь`]
// function getMonth(m){
// 	if(m>0 && m<=12){
// 		return console.log(monthArr[m-1]);
// 	}
// 	else{
// 		return console.log(`Неверное значение`);
// 	}
// }
// getMonth(10)

//5. Стрелочные функции, дефолтные аргументы и шаблонные строки

//1 Задание 

// Напишите функцию sayHello(name, surname, age, greeting), которая принимает в качестве аргументов имя, фамилию, возраст и приветствие. Каждый аргумент должен иметь дефолтное значение, функция должна быть стрелочной и не иметь ключевого слова return.
// Например, при вызове sayHello('Дима') функция должна вернуть строку: "Привет, Дима Иванов, тебе 10 лет", а при вызове sayHello('Евгений', 'Петров', 25, 'Здравствуйте, ') функция должна вернуть строку: "Здравствуйте, Евгений Петров, тебе 25 лет". А при вызове без аргументов она должна вернуть: "Привет, Иван Иванов, тебе 10 лет".

// Исходный код:

 // const sayHello = (name = `Иван` , lastName = `Иванов` , age = `10` , greeting = `Привет ,`) => `${greeting} ${name} ${lastName}, тебе ${age} лет`

 // alert( sayHello() );
 // alert( sayHello('Дима') );
 // alert( sayHello('Евгений', 'Петров', 25, 'Здравствуйте, ') );

//2 Задание 

// Это задание повторяет предыдущее, но для его решения необходимо использовать шаблонные строки.

// const sayHello = (name = `Иван` , lastName = `Иванов` , age = `10` , greeting = `Привет ,`) => `${greeting} ${name} ${lastName}, тебе ${age} лет`

// alert( sayHello() );
// alert( sayHello('Дима') );
// alert( sayHello('Евгений', 'Петров', 25, 'Здравствуйте, ') );

// Задание 1
// Напишите функцию match, которая принимает 2 строки и возвращает true, если эти строки равны без учета регистра. Например, match('hEllO', 'HELLo') должен вернуть true.

// let equalCheck = function(first , second){
//     if(typeof first == `string` && typeof second == `string`){
//         if(first.toLowerCase() == second.toLowerCase()){
//             return true;
//         }
//         else{
//             return false;
//         }
//     }
//     else{
//         if(first == second){
//             return true;
//         }
//         else {
//             return false;
//         }
//     }
    
// }
// console.log(equalCheck(`hello` , `heLlo`))
// console.log(equalCheck(123 , 123));
// console.log(equalCheck(`hello` , `helo`));
// console.log(equalCheck(1234 , 123));

//

// function extractSubredditName(url) {
//   const parsedUrl = new URL(url);
//   const pathParts = parsedUrl.pathname.split('/');
//   console.log(pathParts);
//   const subredditName = pathParts[2];
//   return subredditName;
// }

// const subredditUrl = 'https://reddit.com/r/javascript';
// const subredditName = extractSubredditName(subredditUrl);
// console.log(subredditName);

// Напишите функцию reverseAndNegate(arr), которая принимает массив чисел и возвращает перевернутый отрицательный массив.

// function reverseAndNegate(arr){
//     for(let i = 0;i<arr.length;i++){
//         arr[i] = arr[i] * (-1)
//     }
//     return arr.reverse();
// }

// console.log(reverseAndNegate([1,-4,22,15,-2,0,-3]));

// Напишите функцию, которая принимает массив чисел и сначала к каждому чётному числу прибавляет 4,
//  у каждого нечётного отнимает 2, потом убирает из массива числа, делящиеся на 13 без остатка и возвращает сумму оставшихся чисел.

// function calculate(arr){
//     let sum = 0;
//     for(let i = 0;i<arr.length;i++){
//         if(arr[i]%2 == 0){
//             arr[i] +=4;
//             if(arr[i]%13 == 0){
//                 arr.splice(i , 1);
//                 i--;
//             }
//         }
//         else{
//             arr[i] -=2;
//             if(arr[i]%13 == 0){
//                 arr.splice(i , 1);
//                 i--;
//             }
//         }
//     }
//     for(let i = 0;i<arr.length;i++){
//         sum +=arr[i];
//     }
//     return sum;
// }
// console.log(calculate([15, 2, 3, 5, 6]));

// Напишите функцию transformUpvotes(arr),
//  которая принимает массив сокращенных записей количества лайков ['10k', '2.3k', '5k', '32', '28.4k'] и возвращает массив чисел [10000, 2300, 5000, 32, 28400].

// function transformUpvotes(arr){
//     for(let i = 0;i<arr.length;i++){
//         arr[i] = parseInt(arr[i] , 10) * 1000;
//     }
//     return arr;
// }

// console.log(transformUpvotes(['10k', '2.3k', '5k', '32', '28.4k']))

// Напишите функцию getInfo(persons), которая принимает массив объектов, описывающих человека, 
// имеющих поля {name, age}, и возвращает объект со средним возрастом и именем самого старшего человека.

 //  function getInfo(persons){
 //      let ageS = 0;
 //      let old = 0;
 //      for(let i = 0;i<persons.length;i++){
 //          ageS += persons[i][`age`];
 //          if(persons[old][`age`] < persons[i][`age`]){
 //                  old = i; 
 //          }
 //      }
 //      return `Средний возраст = ${ageS/persons.length}, Самый старый человек - ${persons[old][`name`]} и ему ${persons[old][`age`]}`
 //  }

 // console.log(getInfo([{name : `Alfred`,age: 25} , {name:`Gerald` , age: 14} , {name : `Stas`,age: 20} , {name : `Ded`,age: 70}]));

// Напишите функцию, которая принимает массив массивов вида 
// [['ключ1', 'значение1'], ['ключ2', 'значение2']] и возвращает объект вида: {ключ1: 'значение1', ключ2: 'значение2'}.

 // function objFromArr(arr){
 //     let obj = new Object();
 //       for(let i = 0;i<arr.length;i++){
 //         obj[arr[i][0]] = arr[i][1];
 //     }
 //     return obj;
 // }
 // console.log(objFromArr([[`name`,`German`],[`age`,15]]));

//Xhr + localStorage

// let xhr = new XMLHttpRequest();
// let myJSON = localStorage.getItem(`myJSON`);
// if(myJSON){  
//     myJSON = JSON.parse(myJSON);
//     console.log(myJSON);
// }
// else{
//     xhr.open(`GET` , `https://picsum.photos/v2/list/?limit=1`);
//     xhr.onload = function(){
//         let result = JSON.parse(xhr.response);
//        localStorage.setItem(`myJSON` , JSON.stringify(result))
    
//     }
//     xhr.send();
//     console.log(`Перезапусти`);

// }

// Напишите функцию random(min, max), которая принимает минимальное и максимальное значение и 
// возвращает целое случайное число n, такое, что: min ≤ n ≤ max. Эта функция понадобится нам для следующих заданий.

// Используйте Math.random(), умножение и сложение.

function random(min, max){
  let n = Math.round(Math.random() * (max - min) + min);
  return n;
}

// Сверстайте 5 параграфов с текстом. С помощью JS меняйте цвет фона каждого параграфа на случайный каждую секунду. 
// Создайте массив с названиями цветов 
// ['blue', 'cyan', ...] и с помощью функции из предыдущего задания выбирайте случайный цвет из массива.

// let colorP = document.querySelectorAll(`.color`);
// console.log(colorP);
// let practise = document.getElementById(`practise`);
// let colors = ['blue', 'cyan' , `red` , `green` , `yellow` , `white` , `lime` , `grey`]
// let timer = setInterval(function (){
//   colorP[`0`].style.backgroundColor = `${colors[random(0,colors.length)]}`
//   colorP[`1`].style.backgroundColor = `${colors[random(0,colors.length)]}`
//   colorP[`2`].style.backgroundColor = `${colors[random(0,colors.length)]}`
//   colorP[`3`].style.backgroundColor = `${colors[random(0,colors.length)]}`
//   colorP[`4`].style.backgroundColor = `${colors[random(0,colors.length)]}`
// },1000)

// Напишите функцию, которая принимает HTML в виде строки и возвращает HTML без элементов div (и всего, что внутри), 
// все остальные элементы сохраняются. Используйте createElement, querySelectorAll и innerHTML.

// const removeDivs = html => {
//   const root = document.createElement('span');
//   root.innerHTML = html;
//   const divs = root.querySelectorAll('div');
//   divs.forEach(div => {
//     div.parentNode.removeChild(div);
//   })
//   return root.innerHTML;
// }

// const html = '<div></div>Hello<div><div><p>Hello world</p></div></div> <b>World!</b>';

// alert( removeDivs(html));
// alert( removeDivs(html) === 'Hello <b>World!</b>');

// Создайте кнопку, которая при клике создает другую кнопку, которая, в свою очередь, создаёт другую кнопку, и т.д.

// Пояснение: Используйте HTML, JS и CSS.

// let buttonsDiv = document.getElementById(`buttons`);
// let btn = document.getElementById(`btn`);

// let createNewButton = (text) => {
//   let newButton = document.createElement('button');
//   newButton.innerHTML = text;
//   newButton.type = 'button';
//   newButton.addEventListener('click', () => createNewButton(text));
//   buttonsDiv.appendChild(newButton);
// };

// btn.addEventListener(`click` , createNewButton(`Hажми меня`))

// Создайте раскрывающийся блок (accordion). Сверху блок с заголовком, 
// при нажатии на который снизу показывается блок с текстом, при повторном нажатии блок с текстом скрывается.

