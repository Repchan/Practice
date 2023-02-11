// Задание 3.

// Написать функцию, которая создает пустой объект, но без прототипа.

let newObj = function(){
	const emptyObj = Object.create(null)
}
newObj();