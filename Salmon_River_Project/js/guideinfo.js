const requestURL = 'https://github.com/krobi28/krobi28.github.io/blob/master/Salmon_River_Project/guide.json';


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); 
        const guides = jsonObject['guides'];
        console.log(guides);



        for (let i = 0; i < guides.length; i++) {
                let card = document.createElement('section');
                card.classList.add('hover');
                let div = document.createElement('div');

                let h2 = document.createElement('h2');
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');
                let h3 = document.createElement('h3');
                let img = document.createElement('img');


                h2.textContent = guides[i].name;
                p1.textContent = "Certification Level: " + guides[i].certLevel;
                p2.textContent = "Years Experience: " + guides[i].yearsExp;
                p3.textContent = "Email: " + guides[i].emailAddress;
                h3.textContent = guides[i].biography;
                img.setAttribute('src', 'images/' + guides[i].photo);
                img.setAttribute('alt', guides[i].name);

                div.appendChild(h2);
                div.appendChild(p1);
                div.appendChild(p2);
                div.appendChild(p3);
                div.appendChild(h3);

                card.appendChild(div);
                card.appendChild(img);

                document.querySelector('div.cards').appendChild(card);
        }
    });