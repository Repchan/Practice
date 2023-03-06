let img = [`asset/23.jpg` , `asset/24.jpg` , `asset/how-to-make-a-planet-with-photoshop-16.jpg` ,`asset/Planet00.jpg` ,`asset/planet2.jpg` ,`asset/planet_01.jpg` ,`asset/planet_lightemboss.jpg`];
let sliderImg = document.querySelector(`.slider__img`);
let buttonPrevious = document.getElementById(`previous`);
let buttonNext = document.getElementById(`next`);
let q = 0;
function showElement(element) {
  element.style.opacity = 0;
  element.style.display = 'block';
  let timerId = setInterval(element.style.opacity += 0.1, 200);
  // if(element.style.opacity == 1){
   	setTimeout(clearInterval(timerId), 2000);
  // }
}
function hideElement(element) {
  element.style.opacity = 1;
  let timerId = setInterval(element.style.opacity -= 0.1, 200);
 // if(element.style.opacity == 0){
   	setTimeout(clearInterval(timerId), 2000);
 //  }
function previous(){
	hideElement(sliderImg);
	if(img.at(q) == img[0]){
		q = 0
	}
	q--
	sliderImg.src = img.at(q);
	setTimeout(() => showElement(sliderImg), 500);
}
function next(){
	hideElement(sliderImg);
	if(img.at(q) == img.at(-1)){
		q = -1;
	}
	q++
	sliderImg.src = img.at(q);
	setTimeout(() => showElement(sliderImg), 500);
}
buttonPrevious.addEventListener(`click` , previous);
buttonNext.addEventListener(`click`, next);