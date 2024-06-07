import { API_KEY } from "./env.js";

const getCurrentWeather = (latitude, longitude) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

  fetch(URL)
    .then((response) => response.json())
    .then((data) => console.log(data));
};
const getPosition = (position) => {
  const { latitude, longitude } = position.coords;
  getCurrentWeather(latitude, longitude);
};

const errorHandler = (error) => {
  console.log(error.message);
  const noti = document.querySelector(".noti");
  noti.style.display = "block";
};
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(getPosition, errorHandler);
} else {
  console.log("geolocation IS NOT available");
}
