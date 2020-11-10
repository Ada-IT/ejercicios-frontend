const containerBeers = document.getElementById("container_beers");
const buttonLow = document.getElementById("btn-low");
const buttonMd = document.getElementById("btn-md");
const buttonHigh = document.getElementById("btn-hg");
const buttonAll = document.getElementById("btn-all");

let allBeers = [];
let lowBeers = [];
let mdBeers = [];
let highBeers = [];

const createCards = (beers) =>{
  containerBeers.innerHTML = "";
  beers.forEach(beer => {
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
    containerBeers.appendChild(card);
  })
}

const getInfo = () => fetch("https://api.punkapi.com/v2/beers").then(res => res.json()).then(response => {

  allBeers = response;
  lowBeers = response.filter(beer => beer.abv <= 5);
  mdBeers = response.filter(beer => beer.abv > 5 && beer.abv <= 7.5);
  highBeers = response.filter(beer => beer.abv > 7.5 && beer.abv <= 50);
  createCards(allBeers);
});  

getInfo();


buttonLow.addEventListener("click",(()=>(createCards(lowBeers))));
buttonMd.addEventListener("click",(()=>(createCards(mdBeers))));
buttonHigh.addEventListener("click",(()=>(createCards(highBeers))));
buttonAll.addEventListener("click",(()=>(createCards(allBeers))));