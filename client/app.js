const temp = document.getElementById("temperature");

async function fetchTemp(){
    const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m");
    const temperatures = await response.json();
    const currenttemp =temperatures.current.temperature_2m;
    console.log(currenttemp);
    temp.textContent =currenttemp;
}



fetchTemp();



