const temp = document.getElementById("temperature");
const deg = document.getElementById("deg");
async function fetchTemp() {
  const response = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=51.5085&longitude=-0.1257&current=temperature_2m,is_day,rain,showers,snowfall&hourly=temperature_2m&timezone=auto"
  );
  const temperatures = await response.json();
  const currenttemp = temperatures.current.temperature_2m;
  console.log(currenttemp);
  temp.textContent = currenttemp + temperatures.current_units.temperature_2m;


}

fetchTemp();

