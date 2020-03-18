const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=ac4a7c570cce008087083e285058e1e6";

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

    });

const apiURL2 = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&APPID=ac4a7c570cce008087083e285058e1e6";

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

    fetch('https://byui-cit230.github.io/weather/data/towndata.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const towns = jsonObject['towns'];
    var town = towns.find(town => town.name === "Soda Springs");
    var list = document.createElement('ul');
    for (var event of town.events) {
    let item = document.createElement('li');
    item.textContent = event;
    list.appendChild(item);
    }

    document.querySelector('div.townevents').appendChild(list);

  });