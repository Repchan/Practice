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
function getMiddle(s)
{
  if(s.length % 2 == 0){
    return( s[s.length/2-1] + s[s.length/2])
  }
  else{
    return(s[Math.floor(s.length/2)])
  }
}
