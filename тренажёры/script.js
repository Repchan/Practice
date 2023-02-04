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
