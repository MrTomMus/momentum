let timeDiv = document.querySelector('.time');
let dateDiv = document.querySelector('.date');

let options = {
    month: 'long',
    day: 'numeric', 
    hour: 'numeric', 
    minute: 'numeric', 
    timeZone: 'UTC',
}

let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
let month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']

let currentData = new Date().toLocaleDateString('ru-RU', options);

timeDiv.textContent = new Date().toLocaleTimeString();
dateDiv.textContent = days[new Date().getDay()] + ', ' + new Date().getDate() + ' ' + month[new Date().getMonth()];



function showTime(){
    timeDiv.textContent = new Date().toLocaleTimeString();
    showDate();
}

function showDate(){
    dateDiv.textContent = days[new Date().getDay()] + ', ' + new Date().getDate() + ' ' + month[new Date().getMonth()];
}

setInterval(showTime, 1000);