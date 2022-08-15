const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity')

let city = document.querySelector('.city');

async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
    const res = await fetch(url);
    const data = await res.json();

    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.ceil(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `Wind speed: ${Math.ceil(data.wind.speed)} m/s`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
}


function setLocalStorage() {
    localStorage.setItem('city', city.value);
  }
  window.addEventListener('beforeunload', setLocalStorage);

  function getLocalStorage() {
    if(localStorage.getItem('city')) {
      city.value = localStorage.getItem('city');
      getWeather()
    }
  }
  window.addEventListener('load', getLocalStorage)

  city.addEventListener('change', getWeather);

  getWeather();