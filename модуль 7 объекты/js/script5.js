// Переписать консольное приложение из предыдущего юнита на классы.

// Общие требования:

// Имена классов, свойств и методов должны быть информативными;
// Соблюдать best practices;
// Использовать синтаксис ES6.

class ElectricalAppliances{
	constructor(name){
		this.name = name;
	}
}

class ElectricalAppliancesFunctions extends ElectricalAppliances{
	constructor(name , consumption , isPluged){
		super(name);
		this.consumption = consumption;
		this.isPluged = false;
	}
	plugIn(){
		this.isPluged = true;
		console.log(`Прибор ${this.name} включён в розетку`);
	}
	unplug(){
		this.isPluged = false;
		console.log(`Прибор ${this.name} выключен из розетки`)
	}
	getConsumption(){
		if(this.isPluged == true){
			return this.consumption;
		}
		else{
			return 0;
		}
	}
}

//Незнал как правильней будет , написал два варианта 


// class ElectricalAppliances{
// 	constructor(name , consumption , isPluged){
// 		this.name = name;
// 		this.consumption = consumption;
// 		this.isPluged = false;
// 	}
// 	plugIn(){
// 		this.isPluged = true;
// 		console.log(`Прибор ${this.name} включён в розетку`);
// 	}
// 	unplug(){
// 		this.isPluged = false;
// 		console.log(`Прибор ${this.name} выключен из розетки`)
// 	}
// 	getConsumption(){
// 		if(this.isPluged == true){
// 			return this.consumption;
// 		}
// 		else{
// 			return 0;
// 		}
// 	}
// }

const blender = new ElectricalAppliancesFunctions(`Блендер` , 150);
const computer = new ElectricalAppliancesFunctions(`Компьютер`, 500);

console.log(`Текущее потребление электричества = ${blender.getConsumption()+computer.getConsumption()}W`);//Ничего не включено

blender.plugIn();//Включаем блендер
console.log(`Текущее потребление электричества = ${blender.getConsumption()+computer.getConsumption()}W`);

computer.plugIn();//Включаем компьютер
console.log(`Текущее потребление электричества = ${blender.getConsumption()+computer.getConsumption()}W`);

computer.unplug();//Выключаем блендер
console.log(`Текущее потребление электричества = ${blender.getConsumption()+computer.getConsumption()}W`);

blender.unplug();//Выключаем компьютер 
console.log(`Текущее потребление электричества = ${blender.getConsumption()+computer.getConsumption()}W`);
