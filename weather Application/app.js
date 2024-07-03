let input = document.querySelector("#search-city");
let searchBtn = document.querySelector(".btn");
let temp = document.querySelector(".temp");
let city = document.querySelector(".city");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".Wind");
let weatherIcon = document.querySelector(".weather-icon");
let weather= document.querySelector(".weather");


// collect data from api URL in promise
async function getData(cityName){
    let promise = await fetch(` http://api.weatherapi.com/v1/current.json?key= 5807d24e4424401ead763714242306 &q=${cityName}&aqi=yes`);

    if(promise.status == 400){
        document.querySelector(".error").style.display = "block";
        weather.style.display = "none"
    }
    console.log(promise.status);

    return await promise.json();
}

searchBtn.addEventListener("click",async ()=>{
    let value = input.value;
    const result =await getData(value)
    temp.innerHTML = Math.round( result.current.temp_c)+ "°C";  
    city.innerHTML = result.location.name  ;  
    humidity.innerHTML = result.current.humidity +"%" ;  
    wind.innerHTML = result.current.wind_kph+" km/hr" ;  

    console.log(result)
    // change the weathor icon

    if(result.current.condition.text == "Light rain shower"){
        weatherIcon.src = "/weather Application/images/drizzle.png";

    }
    else if(result.current.condition.text == "Partly cloudy"){
        weatherIcon.src = "/weather Application/images/clouds.png";

    }
    else if(result.current.condition.text == "Clear"){
        weatherIcon.src = "/weather Application/images/clear.png";

    }
    else if(result.current.condition.text == "Sunny"){
        weatherIcon.src = "/weather Application/images/mist.png";

    }
    else if(result.current.condition.text == "Moderate or heavy rain shower"){
        weatherIcon.src = "/weather Application/images/rain.png";

    }
    else if(result.current.condition.text == "Moderate or heavy rain with thunder"){
        weatherIcon.src = "/weather Application/images/rain.png";

    }
    else if(result.current.condition.text == "Overcast"){
        weatherIcon.src = "/weather Application/images/snow.png";

    }else{
        weatherIcon.src = "/weather Application/images/mist.png";

    }
    weather.style.display = "block";
    document.querySelector(".error").style.display = "none";

})