const img = document.getElementById("img");
const button = document.getElementById("btn")

button.addEventListener("click",()=>{
    fetch('https://randomfox.ca/floof/').then(res => res.json()).then(response => img.src=response.image);
})