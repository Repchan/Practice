// Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить в консоль, начиная от первого и заканчивая вторым. Используйте setInterval.

// Например, пользователь ввёл числа 5 и 15. Каждую секунду в консоль должно печататься число, начиная с 5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).

// (function(a , b){
// 	let num = a;
// 	const intervalId = setInterval(function (a, b) {
// 	console.log(num);
// 	num++
// }, 1000, a,  b); 
// const timeoutId = setTimeout(function(){clearInterval(intervalId)}, (b+1)*1000 - a *1000);
// })(5, 15)
function isPangram(string){
  let arr = Array.from(string.toUpperCase());
   for(let x =0;x<arr.length;x++){
    	if(arr[x] == ` ` || arr[x] == `.` || parseInt(arr[x])>= 0 || arr[x] == `,`){
    		arr.splice(x, 1);
    		x--
    	}
    }
  const obj = Object.assign({}, arr); 
  console.log(Array.from(obj))
  if(arr.length == 26){
  	return true
  }
  else{
  	return false;
  }
}
isPangram("ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ");