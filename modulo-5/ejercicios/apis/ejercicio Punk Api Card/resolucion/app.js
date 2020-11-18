const card = document.getElementById("card");
const button = document.getElementById("btn-random");


const generateCard = () => fetch("https://api.punkapi.com/v2/beers/random").then(res => res.json()).then(response => {
    
const beer = response[0]
card.innerHTML=`  
<h2 class="card__title">${beer.name}</h2>
<img
  id="img"
  src="${beer.image_url}"
  alt="beer"
  height="180"
/>
<p class="card__description">
${beer.description}
</p>`});  

button.addEventListener("click",generateCard)