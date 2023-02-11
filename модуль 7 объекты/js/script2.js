// Задание 2.

// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

let getKey = function(obj , str){
	for(let key in obj){
		if(key === str){
			return true;
		}
		
	}
	return false;	
}
let apple = {
	color : `red`,
	type : `fruit`,
	weight : 300,
}
console.log(getKey(apple , `color`));
console.log(getKey(apple , `name`));
console.log(getKey(apple , `weight`));