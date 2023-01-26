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

 var x;
 let typeOf = (x)=>{
 	if(typeof x == "number"){
 		console.log(`${x} - число`)
 	}
 	if(typeof x == "boolean"){
 		console.log(`${x} - булеан`)
 	}
 	if(typeof x == "string"){
 		console.log(`${x} - строка`)
 	}
 }
 typeOf("Утречка")



//Задание 3 модуль

// let str = "Hello";
// console.log(str.split('').reverse().join(''));

//Задание 4 модуль

// let num = Math.random() * 100;
// console.log(Math.round(num));

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
