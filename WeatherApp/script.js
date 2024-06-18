document.addEventListener('DOMContentLoaded', () => {
  const searchBar = document.querySelector('.search-bar');
  const searchButton = document.querySelector('button');
  const weatherDiv = document.querySelector('.weather');

  const getWeather = async (city) => {
    const apiKey = '0f128b05e362bcc142b3f983b2d39fb9'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    
    if (response.ok) {
      displayWeather(data);
    } 
  };

  const displayWeather = (data) => {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    
    document.querySelector('.city').innerHTML = `Weather in ${name}`;
    document.querySelector('.temp').innerHTML = `${temp.toFixed(1)}°C`;
    document.querySelector('.icon').src = `https://openweathermap.org/img/wn/${icon}.png`;
    document.querySelector('.description').innerHTML = description.charAt(0).toUpperCase() + description.slice(1);
    document.querySelector('.humidity').innerHTML = `Humidity: ${humidity}%`;
    document.querySelector('.wind').innerHTML = `Wind speed: ${speed.toFixed(1)} km/h`;
    
    weatherDiv.classList.remove('loading');
    weatherDiv.classList.add('loaded');
  };

  searchButton.addEventListener('click', () => {
    const city = searchBar.value;
    weatherDiv.classList.remove('loaded');
    weatherDiv.classList.add('loading');
    getWeather(city);
  });

  searchBar.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      const city = searchBar.value;
      weatherDiv.classList.remove('loaded');
      weatherDiv.classList.add('loading');
      getWeather(city);
    }
  });

  // getWeather('{}'); // For default
});
