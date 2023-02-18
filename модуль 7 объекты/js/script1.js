// Задание 1.

// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.

// let keysAndValues = function(obj){
// 	for(let key in obj){
// 		if (obj.hasOwnProperty(key)) {
//         	console.log(key +` : ` + obj[key]); 
//    	 	}  
// 	}
// }
// let apple = {
// 	color : `red`,
// 	type : `fruit`
// }
// keysAndValues(apple)

let button = document.getElementById(`btn`);

function click(){
	// button.style.color = `red`;
	// button.style.fontSize = `25px`;
	// button.style.width = `200px`
	// button.style.height = `100px`;
	button.setAttribute('style', 'color:red; border: 1px solid blue; width:200px; height:100px; font-size:25px');
}
button.addEventListener(`click` , click);