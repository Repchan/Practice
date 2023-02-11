// Задание 4.

// Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.

// Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте суммарную потребляемую мощность всех включенных приборов (передайте аргумент). 

// Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

// План:

// Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
// Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
// У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
// Создайте экземпляры каждого прибора.
// Выведите в консоль и посмотрите на результаты работы, можете гордиться собой :)
// Общие требования:

// Имена функций, свойств и методов должны быть информативными
// Соблюдайте best practices:
// использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
// информативные имена (а не a, b);
// четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр — конкретную реализацию);
// использование синтаксиса es6 (кроме функции-конструкторов) и так далее.


function ElectricalAppliances(name , consumption){
	this.name = name;
	this.consumption = consumption;
	this.isPluged = false;
}

ElectricalAppliances.prototype.plugIn = function(){
	console.log(`Прибор ${this.name} включён в розетку`);
	this.isPluged = true;
}

ElectricalAppliances.prototype.unPlug = function(){
	console.log(`Прибор ${this.name} выключен из розетки`);
	this.isPluged = false;
}

ElectricalAppliances.prototype.getConsumption = function(){
	if(this.isPluged == false){
		return 0
	}
	else{
		return this.consumption;
	}
}

const blender = new ElectricalAppliances(`Блендер` , 150);
const computer = new ElectricalAppliances(`Компьютер`, 500);

console.log(`Текущее потребление электричества = ${blender.getConsumption()+computer.getConsumption()}W`);//Ничего не включено

blender.plugIn();//Включаем блендер
console.log(`Текущее потребление электричества = ${blender.getConsumption()+computer.getConsumption()}W`);

computer.plugIn();//Включаем компьютер
console.log(`Текущее потребление электричества = ${blender.getConsumption()+computer.getConsumption()}W`);

computer.unPlug();//Выключаем блендер
console.log(`Текущее потребление электричества = ${blender.getConsumption()+computer.getConsumption()}W`);

blender.unPlug();//Выключаем компьютер 
console.log(`Текущее потребление электричества = ${blender.getConsumption()+computer.getConsumption()}W`);

