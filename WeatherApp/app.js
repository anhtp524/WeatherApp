var search = document.querySelector('.search')
var city = document.querySelector('.city')
var country = document.querySelector('.country')
var value = document.querySelector('.value')
var shortDesc = document.querySelector('.short-desc')
var visibility = document.querySelector('.visibility span')
var wind = document.querySelector('.wind span')
var humidity = document.querySelector('.humidity span')
var value = document.querySelector('.value')
var time = document.querySelector('.time')

function changeWeatherUI(city_var) {
    
    let apiURL = `http://api.openweathermap.org/data/2.5/weather?q=${city_var}&appid=46d7e38209466c990ed6015e1ab233d9`
    fetch(apiURL)
        .then(response => response.json())
        .then(function(data){
            city.innerText = data.name;
            country.innerText = data.sys.country;
            value.innerText = Math.floor((data.main.temp - 273))
            visibility.innerText = data.visibility + 'm';
            wind.innerText = data.wind.speed + 'm/s';
            humidity.innerText = data.main.humidity + 'm/s';
            shortDesc.innerText = data.weather[0].main
            time.innerText = new Date().toLocaleString()
        })
}

search.onkeypress = function(e){
    if(e.code === 'Enter') {
        let city_var = search.value.trim()
        changeWeatherUI(city_var)
    }
}
changeWeatherUI('Hanoi');



