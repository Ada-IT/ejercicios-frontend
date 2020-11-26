const beers = document.getElementById("beers");

const createCard = (beer) =>{
  const card = document.createElement("div");
  card.classList.add('card');

  const title = document.createElement("h2");
  title.innerText=beer.name;

  const img = document.createElement("img");
  img.src = beer.image_url;
  img.alt =beer.name;
  img.height =180;

  const description = document.createElement("p");
  description.classList.add('card__description')
  description.innerText = beer.description;
  
  card.appendChild(title);
  card.appendChild(img);
  card.appendChild(description);

  return card
}

const generateCard = () => fetch("https://api.punkapi.com/v2/beers").then(res => res.json()).then(response => {
  beers.innerHTML="";
  response.forEach(beer =>{
    const card = createCard(beer);
    beers.appendChild(card);
  })
});  


generateCard();
