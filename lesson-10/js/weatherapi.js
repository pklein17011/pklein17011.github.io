const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=ac4a7c570cce008087083e285058e1e6";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
         
       
     document.getElementById('currentCondition').textContent = jsObject.weather[0].description;
     document.getElementById('current-temp').textContent = jsObject.main.temp.toFixed(0);
     document.getElementById('windspeed').textContent = jsObject.wind.speed.toFixed(1);
     document.getElementById('humidity').textContent = jsObject.main.humidity;
    

     function windChill() {
       var temp = parseInt(document.getElementById("current-temp").innerText);
       var speed = parseInt(document.getElementById("windspeed").innerText);
       var result = calculatechill(temp, speed);

       if ((temp <= 50) && (speed >= 3.0)) {
         document.getElementById("chill").innerText = result.toFixed() + " °F";
       } else {
         document.getElementById("chill").innerText = "N/A";
       }
     }

     function calculatechill(temp, speed) {
       var calculatechill = (35.74 + (0.6215 * temp) - (35.75 * (speed**0.16)) + (0.4275 * temp *(speed**0.16)));
       return calculatechill;
     }
     windChill();


       // const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
       // const desc = jsObject.weather[0].description;  // note how we reference the weather array

       // document.getElementById('imagesrc').textContent = imagesrc; // informational specification only
       // document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
        //document.getElementById('icon').setAttribute('alt', desc);
    });

const apiURL2 = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=ac4a7c570cce008087083e285058e1e6";

fetch(apiURL2)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        var dayNames = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

        var day_count = 1;
        for (var day of jsObject.list) {
            if (day.dt_txt.includes("18:00:00")) {
                var date = new Date(day.dt_txt);
                var dayName = dayNames[date.getDay()];
                document.getElementById("day" + day_count).textContent = dayName;

                const f = KtoF(day.main.temp);
                var fahrenheit = f.toFixed(0);
                document.getElementById("temp" + day_count).textContent = fahrenheit;
                const imagesrc = 'https://openweathermap.org/img/w/' + day.weather[0].icon + '.png';  // note the concatenation
                const desc = day.weather[0].description;
                document.getElementById('image' + day_count).setAttribute('src', imagesrc); 
                document.getElementById('image' + day_count).setAttribute('alt', desc);
                day_count = day_count + 1;
            }
        }










    });

    function KtoF(kelvin){
        return (((kelvin - 273.15) * 9) / 5) + 32;
    }
