// const temp = document.getElementById("temperature");
const deg = document.getElementById("deg");
const dateTime = document.getElementById("date-time");
const icon = document.getElementById("weather-icon");
const selectLocations = document.getElementById("locations");
const location = document.getElementById("location");
const form = document.getElementById("comments-form");
// const comment = document.getElementById("comment");
const formLocation = document.getElementById("form-location");
const commentButton = document.getElementById("comment-submit");
const commentBox = document.getElementById("comment-section");

async function commentsHandler(event) {
  event.preventDefault();
  const username = event.target.username.value;
  const location = event.target.location.value;
  const comment = event.target.comment.value;
  const response = await fetch("http://localhost:8080/comments", {
    method: "POST",
    body: JSON.stringify({
      username: username,
      location: location,
      message: comment,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(await response.json());
  fetchComments();
  form.reset();
}
async function fetchComments() {
  const response = await fetch("http://localhost:8080/comments");
  const comments = await response.json();
  console.log(comments);
  commentBox.innerHTML = "";

  comments.forEach((comment) => {
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    h2.textContent = comment.username;
    console.log(h2.textContent);
    h3.textContent = comment.location;
    console.log(h3.textContent);
    p.textContent = comment.message;
    console.log(p.textContent);
    commentBox.appendChild(h2);
    commentBox.appendChild(h3);
    commentBox.appendChild(p);
  });
}

form.addEventListener("submit", commentsHandler);
fetchComments();

// dateTime.textContent = Intl.DateTimeFormat().resolvedOptions().timeZone;

// test data
// const locationLondon = {
//   lat: 51.5072,
//   lon: 0.1276,
// };
// const locationBerlin = {
//   lat: 52.52,
//   lon: 13.405,
// };
// const locationParis = {
//   lat: 48.8566,
//   lon: 2.3522,
// };
// async function fetchTemp() {

//   const response = await fetch(
//     `https://api.open-meteo.com/v1/forecast?latitude=${locationLondon.lat}&longitude=${locationLondon.lon}&current=temperature_2m,is_day,rain,showers,snowfall&hourly=temperature_2m&timezone=auto`
//   );
//   const temperatures = await response.json();
//   console.log(temperatures);
//   const currentTemp = temperatures.current.temperature_2m;
//   console.log(currentTemp);
//   temp.textContent = currentTemp + temperatures.current_units.temperature_2m;

// }

// fetchTemp();

//found this code which picks up users location - prompt appears to confirm if user wants google to know their location - https://www.shecodes.io/athena/8323-how-to-get-latitude-and-longitude-coordinates-in-javascript

//getting user location and 'reverse geocoding' - see MDN docs
async function userLocationAndTemp() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showCity);
  } else {
    console.log("Geolocation is not supported!");
  }
  // showCity(position);

  async function showCity(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const response = await fetch(
      `https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}&api_key=661ec76e017ed191642069iou9250c1`
    );
    const fetchCity = await response.json();
    console.log(fetchCity);
    const city = fetchCity.address.city;
    console.log(`Your city is ${city}.`);
    location.textContent = city;
    tempAtLocation(position);
  }

  async function tempAtLocation(position) {
    const temp = document.getElementById("temperature");
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,is_day,rain,showers,snowfall&hourly=temperature_2m&timezone=auto`
    );
    const temperatures = await response.json();
    console.log(temperatures);
    const currentTemp = temperatures.current.temperature_2m;
    console.log(currentTemp);
    temp.textContent = currentTemp + temperatures.current_units.temperature_2m;
  }
  async function changeIcon() {
    const icon = document.getElementById("weather-icon");
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,is_day,rain,showers,snowfall&hourly=temperature_2m&timezone=auto`
    );
    const wetherStatus = await response.json();
    console.log(wetherStatus);
    const currentStatus = wetherStatus.current;
    console.log(currentStatus);
    const newUrl ="client/assets/sun.png"
    if(currentStatus.is_day){
      icon.src=newUrl;
    
    }else if(currentStatus.rain){
    newUrl ="client/assets/cloudy (3).png"
         icon.src=newUrl;
  }
  else if(currentStatus.snowfall){
    newUrl ="client/assets/cloudy (3).png"
              icon.src=newUrl;
  }else {
    newUrl ="";
    icon.src=newUrl;
  }
   
  }
  changeIcon();

  //function to try and change icon depending on sun/rain/snow
  // async function changeIcon(position) {
  //   const latitude = position.coords.latitude;
  //   const longitude = position.coords.longitude;
  //   const response = await fetch(
  //     `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,is_day,rain,showers,snowfall&hourly=temperature_2m&timezone=auto`
  //   );
  //   const icon = await response.json();
  //   console.log(icon);
  //   const rainIcon = icon.current.rain;
  //   console.log(rainIcon);
  //   icon.textContent = rainIcon;
  // }
  // changeIcon();
  // tempAtLocation(position);
}

// showCity();

userLocationAndTemp();
