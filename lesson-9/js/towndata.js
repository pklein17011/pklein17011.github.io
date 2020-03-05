const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const towns = jsonObject['towns'];

    let preston = towns.find(town => town.name === "Preston");
    let fishHaven = towns.find(town => town.name === "Fish Haven");
    let sodaSprings = towns.find(town => town.name === "Soda Springs");
    //for (let i = 0; i < towns.length; i++ ) {
        //console.log(towns);
    for (let town of [preston, fishHaven, sodaSprings]) {      
        let card = document.createElement('section');
        let title = document.createElement('h3');
        let motto = document.createElement('h4');
        let founded = document.createElement('p');
        let population = document.createElement('p');
        let rainfall = document.createElement('p');
        let subdiv = document.createElement('div');
        let image = document.createElement('img');

        title.textContent = town.name;
        motto.textContent = town.motto;
        founded.textContent = "Year Founded: " + town.yearFounded;
        population.textContent = "Current Population: " + town.currentPopulation;
        rainfall.textContent = "Average Rainfall: " +  town.averageRainfall;
        image.setAttribute('src', "./images/" + town.photo);
        image.setAttribute('alt', town.photo);

        subdiv.appendChild(title);
        subdiv.appendChild(motto); 
        subdiv.appendChild(founded);
        subdiv.appendChild(population);
        subdiv.appendChild(rainfall);
        card.appendChild(subdiv);
        card.appendChild(image);
        document.querySelector('div.townstats').appendChild(card);
        
    }
  });