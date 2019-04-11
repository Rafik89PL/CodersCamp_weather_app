"use strict";
(function() {
  const apiKey = "eeeb1c75b8f4906d80f9f61ff892648a";
  const urlData =
    "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
  const getDataBtn = document.getElementById("get-data");
  const cityName = document.getElementById("city-name");
  const dataName = document.getElementById("data-name");
  const dataIcon = document.getElementById("data-icon");
  const dataDesc = document.getElementById("data-desc");
  const dataTemp = document.getElementById("data-temp");
  const dataWind = document.getElementById("data-wind");
  const dataPress = document.getElementById("data-press");
  const dataHumi = document.getElementById("data-humi");

  const findCityWeather = () => {
    const cityName = document.getElementById("city-name").value;
    if (!cityName.length) cityName = "Warsaw";
    fetch(urlData + cityName + "&APPID=" + apiKey)
      .then(resp => resp.json())
      .then(resp => {
        showWeather(resp);
      });
  };

  const showWeather = resp => {
    dataName.innerHTML = "City name: " + resp.name;
    dataIcon.src =
      "https://openweathermap.org/img/w/" + resp.weather[0].icon + ".png";
    dataDesc.innerHTML = "Short description: " + resp.weather[0].description;
    dataTemp.innerHTML = "Temperature: " + resp.main.temp + " °C";
    dataWind.innerHTML = "Wind speed: " + resp.wind.speed + " m/s";
    dataPress.innerHTML = "Air pressure: " + resp.main.pressure + " hPa";
    dataHumi.innerHTML = "Humidity: " + resp.main.humidity + " %";
  };

  getDataBtn.addEventListener("click", findCityWeather);
  getDataBtn.addEventListener("touchstart", findCityWeather);
  cityName.addEventListener("keyup", event => {
    event.preventDefault();
    if (event.keyCode === 13) {
      findCityWeather();
    }
  });
})();