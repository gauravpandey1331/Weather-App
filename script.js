const apiKey = "11207130f77b09425bf7a9f5cf932085";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// for input and search button.

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const wheatherIcon = document.querySelector(".wheather-icon");   


async function checkWeather(city){   // this class city is used to display the weather after typing on input.
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);                  // '``' this is a backtick.
    var data = await response.json();     // this will contains the temp. data of that particular city.

    console.log(data);

      // innerHTML will update the text written into this element automatically.
  // document.querySelector(".city") --> this will select the city element.
document.querySelector(".city").innerHTML = data.name;

// to update the temp of the given city we select the temp by its class name. later on using innerHtml we will update it.
document .querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";

// same for the humidity
document.querySelector(".Humidity").innerHTML = data.main.humidity + "%";

// same for the wind speed
 document.querySelector(".Wind").innerHTML = data.wind.speed + " Km/h";

 //*** now to change the wheather condition images accordingly
  
 if(data.weather[0].main == "Clouds"){
 wheatherIcon.src = "images/clouds.png";   // wheatherIcon.src ---> it will update the source file.
 
}
else if(data.weather[0].main == "Clear"){
 wheatherIcon.src = "images/clear.png";   // wheatherIcon.src ---> it will update the source file.
}
else if(data.weather[0].main == "Rain"){
 wheatherIcon.src = "images/rain.png";   // wheatherIcon.src ---> it will update the source file.
}
else if(data.weather[0].main == "Drizzle"){
 wheatherIcon.src = "images/drizzle.png";   // wheatherIcon.src ---> it will update the source file.
}
else if(data.weather[0].main == "Mist"){
 wheatherIcon.src = "images/mist.png";   // wheatherIcon.src ---> it will update the source file.
}
else if(data.weather[0].main == "Snow"){
    wheatherIcon.src = "images/snow.png";   // wheatherIcon.src ---> it will update the source file.
   }

document.querySelector(".weather").style.display = "block";    // to display the weather condition when we clicked on search icon.
  
}

searchBtn.addEventListener("click", ()=>{    // whenever anyone will click on searchButton then function will be called. (FUNCTION is below)
 checkWeather(searchBox.value);   // calling the function.
})
