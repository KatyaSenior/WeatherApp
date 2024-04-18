// const temp = document.getElementById("temperature");
const deg = document.getElementById("deg");
const dateTime = document.getElementById("date-time");
const icon = document.getElementById("weather-icon");
const selectLocations = document.getElementById("locations");
const location = document.getElementById("location");
// const comment = document.getElementById("comment");
const formLocation = document.getElementById("form-location");
const commentButton = document.getElementById("comment-submit");
const commentBox = document.getElementById("comment-section");

async function fetchComments() {
  const response = await fetch("http://localhost:8080/comments");
  const comments = await response.json();
  commentBox.innerHTML = "";

  comments.forEach((comment) => {
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    h2.textContent = comment.username;
    // console.log(h2.textContent);
    h3.textContent = comment.location;
    // console.log(h3.textContent);
    p.textContent = comment.message;
    // console.log(p.textContent);
    commentBox.appendChild(h2);
    commentBox.appendChild(h3);
    commentBox.appendChild(p);
  });
}

fetchComments();

//getting user location and 'reverse geocoding' - see MDN docs
async function userLocationAndTemp() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showCity);
    navigator.geolocation.getCurrentPosition(tempAtLocation);
    navigator.geolocation.getCurrentPosition(changeIcon);
  } else {
    console.log("Geolocation is not supported!");
  }
}

async function showCity(position) {
  console.log("showCity", position);
  const latitude = await position.coords.latitude;
  const longitude = await position.coords.longitude;
  const response = await fetch(
    `https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}&api_key=661ec76e017ed191642069iou9250c1`
  );
  const fetchCity = await response.json();
  const city = fetchCity.address.city;
  location.textContent = city;
}

async function tempAtLocation(position) {
  console.log("tempAtLocation", position);
  const temp = document.getElementById("temperature");
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,is_day,rain,showers,snowfall&hourly=temperature_2m&timezone=auto`
  );
  const temperatures = await response.json();
  const currentTemp = temperatures.current.temperature_2m;
  temp.textContent = currentTemp + temperatures.current_units.temperature_2m;
}

async function changeIcon(position) {
  console.log("changeIcon", position);
  const icon = document.getElementById("weather-icon");
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,is_day,rain,showers,snowfall&hourly=temperature_2m&timezone=auto`
  );
  const weatherStatus = await response.json();
  const currentStatus = weatherStatus.current;
  let newUrl = "https://cdn-icons-png.flaticon.com/128/2698/2698194.png";
  if (weatherStatus.current.is_day) {
    icon.src = newUrl;
  } else if (weatherStatus.current.rain) {
    newUrl = "https://cdn-icons-png.flaticon.com/128/4088/4088981.png";
    icon.src = newUrl;
  } else if (weatherStatus.current.snowfall) {
    newUrl = "https://cdn-icons-png.flaticon.com/128/6363/6363108.png";
    icon.src = newUrl;
  } else {
    newUrl = "https://cdn-icons-png.flaticon.com/128/704/704845.png";
    icon.src = newUrl;
  }
}

userLocationAndTemp();

