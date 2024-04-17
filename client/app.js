// const temp = document.getElementById("temperature");
const deg = document.getElementById("deg");
const dateTime = document.getElementById("date-time");
const icon = document.getElementById("weather-icon");
const selectLocations = document.getElementById("locations");
const location = document.getElementById("location");

// dateTime.textContent = Intl.DateTimeFormat().resolvedOptions().timeZone;

// test data
const locationLondon = {
  lat: 51.5072,
  lon: 0.1276,
};
const locationBerlin = {
  lat: 52.52,
  lon: 13.405,
};
const locationParis = {
  lat: 48.8566,
  lon: 2.3522,
};
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
showCity(position);

async function showCity(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const response = await fetch(`https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}&api_key=661ec76e017ed191642069iou9250c1`);
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
  const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,is_day,rain,showers,snowfall&hourly=temperature_2m&timezone=auto`);
  const temperatures = await response.json();
  console.log(temperatures);
  const currentTemp = temperatures.current.temperature_2m;
  console.log(currentTemp);
  temp.textContent = currentTemp + temperatures.current_units.temperature_2m;
  
  
  
}
// tempAtLocation(position);

  
 
  
  
}

// showCity();


userLocationAndTemp();

