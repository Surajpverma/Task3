let weather={
    "apiKey": "6b3695b63539f9a7defcecc6bce31675",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey)
        .then((response)=>response.json())
        .then((data)=>this.displayWeather(data));
    },
    displayWeather: function(data){
        const { name } = data;
        const { icon,description } = data.weather[0];
        const { temp, humidity, feels_like, pressure, temp_min } = data.main;
        const { speed } = data.wind;
        const { time } = data.timezone;
        console.log(name,icon,description,temp,humidity,speed,time);
        document.querySelector(".city").innerText = "" + name;
        document.querySelector(".icon").src ="https://openweathermap.org/img/wn/" + icon + ".jpg";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText ="  " + temp + "°C";
        document.querySelector(".Feel").innerText = "Feels like: " + feels_like + "°C";
        document.querySelector(".Tmin").innerText = "pressure: " + pressure + " hPa";
        document.querySelector(".Tmax").innerText = "Minimum temp:" + temp_min + "°C" ;
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
        document.querySelector(".details").classList.remove("loading");
        document.getElementById("Left").style.backgroundImage ="url('https://source.unsplash.com/1500x1000/?" + name + "')";
    },
    search: function () {
        this.fetchWeather(document.querySelector(".searchIt").value);
      },
};
document.querySelector(".search-box button").addEventListener("click", function () {
    weather.search();
  });

  document.querySelector(".search-box").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });
   weather.fetchWeather("Sri Ganganagar");
   