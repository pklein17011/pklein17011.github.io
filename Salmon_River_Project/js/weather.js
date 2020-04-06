const apiURL = "//api.openweathermap.org/data/2.5/weather?zip=83549&APPID=f05cac25ec9fb51538ef2179a949be55&units=imperial"

fetch(apiURL)
    .then((response) => response.json())
    .then((weatherInfo) => {
        console.log(weatherInfo);

        document.getElementById('temp').innerHTML = weatherInfo.main.temp;
        document.getElementById('high').innerHTML = weatherInfo.main.temp_max;
        document.getElementById('humidity').innerHTML = weatherInfo.main.humidity;
        document.getElementById('speed').innerHTML = weatherInfo.wind.speed;
        getWindChill();
    })

function getWindChill() {

    const tempNumber = parseFloat(document.getElementById("temp").textContent);
    console.log(tempNumber);

    const speedNumber = parseFloat(document.getElementById("speed").textContent);
    console.log(speedNumber);

    let windchill = 35.74 + (0.6215 * tempNumber) - (35.75 * Math.pow(speedNumber, 0.16)) + (0.4275 * tempNumber * Math.pow(speedNumber, 0.16));
    windchill = Math.round(windchill);

    if (tempNumber <= 50 && speedNumber > 3) {
        document.getElementById("chill").textContent = "Wind Chill is " + windchill + "\xB0F";
    } else {
        document.getElementById("chill").textContent = "No Wind Chill Today";
    }

}