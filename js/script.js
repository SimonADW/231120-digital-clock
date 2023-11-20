const hoursContainer = document.querySelector(".hours");
const minutesContainer = document.querySelector(".minutes");
const secondsContainer = document.querySelector(".seconds");



const loadTime = ()=> {
	const currentTime = new Date();

	const hours = currentTime.getHours();
	const minutes = currentTime.getMinutes();
	const seconds = currentTime.getSeconds();

	hoursContainer.textContent = (hours < 10) ? "0"+hours : hours;
	minutesContainer.textContent = (minutes < 10) ? "0"+minutes : minutes;
	secondsContainer.textContent = (seconds < 10) ? "0"+seconds : seconds;

}

window.addEventListener("DOMContentLoaded", ()=>{
	loadTime()
	setInterval((loadTime), 1000);
});
