let timeDiv = document.querySelector('.time');
let dateDiv = document.querySelector('.date');

timeDiv.textContent = new Date().toLocaleTimeString();

function showTime(){
    timeDiv.textContent = new Date().toLocaleTimeString()
}

setInterval(showTime, 1000);