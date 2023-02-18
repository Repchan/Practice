let img = [`asset/23.jpg` , `asset/24.jpg` , `asset/how-to-make-a-planet-with-photoshop-16.jpg` ,`asset/Planet00.jpg` ,`asset/planet2.jpg` ,`asset/planet_01.jpg` ,`asset/planet_lightemboss.jpg`];
let sliderImg = document.querySelector(`.slider__img`);
let buttonPrevious = document.getElementById(`previous`);
let buttonNext = document.getElementById(`next`);
let q = 0;
function previous(){
	if(img.at(q) == img[0]){
		q = 0
	}
	q--
	sliderImg.src = img.at(q);

}
function next(){
	if(img.at(q) == img.at(-1)){
		q = -1;
	}
	q++
	sliderImg.src = img.at(q);
}
buttonPrevious.addEventListener(`click` , previous);
buttonNext.addEventListener(`click`, next);