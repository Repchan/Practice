// Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, 
//и выводит простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.

// Здесь вам пригодятся знания из предыдущего модуля — циклы и условные операторы.

 let primeNumber = function(num){
 	if(num<1000){
 		if(num===1 ||num===0 ){
 			return console.log(`Значение ${num} не простое число`);
 		}
 		else if(num===2){
 			return console.log(`Значение ${num} - простое число`)
 		}
 		for(let i = 2;i<num;i++){
 			if(num % i == 0){
 				return console.log(`Значение ${num} не простое число`);
 			}
 		}
 		return console.log(`Значение ${num} - простое число`);
	 }
	 else{
	 	return console.log(`Число больше 1000 , ошибка`)
	 }
 	
 }
 primeNumber(983);
 primeNumber(984);
 primeNumber(1001);
 primeNumber(47)
 primeNumber(1);
 primeNumber(2);
 primeNumber(0);

