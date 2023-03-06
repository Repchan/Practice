// Реализовать чат на основе эхо-сервера wss://echo-ws-service.herokuapp.com.
// Интерфейс состоит из input, куда вводится текст сообщения, и кнопки «Отправить».

// При клике на кнопку «Отправить» сообщение должно появляться в окне переписки.

// Эхо-сервер будет отвечать вам тем же сообщением, его также необходимо выводить в чат:

// Добавить в чат механизм отправки гео-локации:

// При клике на кнопку «Гео-локация» необходимо отправить данные серверу и в чат вывести ссылку на
//  https://www.openstreetmap.org/ с вашей гео-локацией. Сообщение, которое отправит обратно эхо-сервер, не выводить.

// Удачи!

let textArea = document.getElementById(`text`);
let chat = document.getElementById(`chat-area`);
let btnSend = document.getElementById(`btn-send`);
let btnGeo = document.getElementById(`btn-geo`);
let webSocket = new WebSocket(`wss://echo-ws-service.herokuapp.com/`);
function writeToScreen(message , role) {
  let msg = document.createElement("p");
  msg.classList.add(`${role}`)
  msg.innerHTML = message;
  chat.appendChild(msg);
}
btnSend.addEventListener(`click` , function() {
	webSocket.onopen = function(){
		console.log(`Conected`)
	};
	let message = textArea.value;
	writeToScreen(message , `client`)
	webSocket.send(message);
	webSocket.onmessage = function(evt) {
		writeToScreen(evt.data , `server`)
		textArea.value = ``
	}

})
btnGeo.addEventListener(`click` , function(){
	if ("geolocation" in navigator) {
 	 	navigator.geolocation.getCurrentPosition(
 	 	(position) => {
    	const { coords } = position;
    	let message = `<a href = "https://www.openstreetmap.org/#map=18/${coords.latitude}/${coords.longitude}" target = "_blank">Геолокация</a>`;
    	writeToScreen(message , `client`);
    	} , 
    	(error) => {
    		alert(`Местоположение недоступно`)
    	});
	}	
	else{
 	 	console.log(`Geo is not available`)
 	}
})