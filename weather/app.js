// const api = 'ceb1ef4c45452a5d0011cf308cc35453';
const input = document.querySelector('input');
const btn = document.getElementById('btn');
const weather = document.querySelector('.weather');
const weatherBox = document.querySelector('.weather-box');
const icon = document.querySelector('.icon');
const temperaturer = document.querySelector('.temperaturer');
const description = document.querySelector('.description');

btn.addEventListener('click', () => {
    let city = input.value.trim(); // Trim spaces
    if (city === '') {
        // If the input is empty, hide the weather box
        weatherBox.style.display = 'none';
    } else {
        // If there is a city name, fetch the weather
        getWeather(city);
    }
})

function getWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'ceb1ef4c45452a5d0011cf308cc35453'}&units=metric`)
    .then(response =>response.json())
    .then(data =>{
    
        // Display the weather box if hidden
        weatherBox.style.display = 'block';  // Ensuring it's visible after data is loaded

        const iconCode = data.weather[0].icon;
        icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${iconCode}.png" alt ="weather Icon"/>`

        const weatherCity = data.name;
        const weatherCountry = data.sys.country;

        weather.innerHTML =`${weatherCity} , ${weatherCountry}`;
        const weathertemp = data.main.temp;
        temperaturer.innerHTML =`${weathertemp}°C`

        const descriptionCity = data.weather[0].description
        ;
        description.innerHTML = `${descriptionCity}`
    })
}

    








