// Сверстайте кнопку, клик на которую будет выводить данные о размерах экрана с помощью alert. 

// Удачи!

let btn = document.getElementById(`btn`);

btn.addEventListener(`click` , function() {
	alert(`Ширина экрана:${window.screen.width} , Длинна экрана:${window.screen.height} `);
})