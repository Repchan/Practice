let btn = document.getElementById(`btn`);
let image = document.getElementById(`img`);
let images = [`images/arrow-down-left-circle.svg` , `images/arrow-down-left-circle-fill.svg`];

btn.addEventListener(`click` , function(){
	if(image.classList.contains('active')){
		image.classList.remove(`active`);
		image.src = images[0];
	}
	else{
		image.classList.add(`active`);
		image.src = images[1]
	}
	
})