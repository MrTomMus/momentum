const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity')
const weatherError = document.querySelector('.weather-error');

let city = document.querySelector('.city');

if(city.value == ''){
  city.value = 'Минск'
}

async function getWeather() {
    

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
    const res = await fetch(url);
    const data = await res.json();

    
    if(data.cod == 200){
      weatherIcon.style.display = 'inline-block'
      weatherIcon.classList.add(`owf-${data.weather[0].id}`);
      temperature.textContent = `${Math.ceil(data.main.temp)}°C`;
      weatherDescription.textContent = data.weather[0].description;
      wind.textContent = `Wind speed: ${Math.ceil(data.wind.speed)} m/s`;
      humidity.textContent = `Humidity: ${data.main.humidity}%`;
      weatherError.textContent = ``;
    }else{
      weatherError.textContent = `Error! city not found for ${city.value}`;
      temperature.textContent = '';
      weatherDescription.textContent = '';
      wind.textContent = '';
      humidity.textContent = '';
      weatherIcon.style.display = 'none'
    }

   
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