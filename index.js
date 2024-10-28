const apiKey= "ccf3fe852253a36bae102d82c721e68c";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search label i");
const weathericon = document.querySelector(".weather-icon");

async function checkWeather(city){
  const response = await fetch(apiURL + city + `&appid=${apiKey}`);
  if(response.status == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }else {
    let data= await response.json();

document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

if(data.weather[0].main == "Clouds"){
  weathericon.src = "images/cloudy.png";
}
else if(data.weather[0].main == "Clear"){
  weathericon.src = "images/clear.png";
}
else if(data.weather[0].main == "Rain"){
  weathericon.src = "images/rain.png";
}
else if(data.weather[0].main == "Drizzle"){
  weathericon.src = "images/drizzle.png";
}
else if(data.weather[0].main == "Mist"){
  weathericon.src = "images/mist.png";
}
else if(data.weather[0].main == "Haze"){
  weathericon.src = "images/haze.png";
}

document.querySelector(".weather").style.display ="block";
document.querySelector(".error").style.display = "none";
}

  }

  searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
  });
  
