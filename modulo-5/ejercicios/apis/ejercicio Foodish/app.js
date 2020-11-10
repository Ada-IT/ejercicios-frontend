const img = document.getElementById("img");
const buttonBirtani = document.getElementById("btn-biryani");
const buttonBurger = document.getElementById("btn-burger");
const buttonDosa = document.getElementById("btn-dosa");
const buttonIdly = document.getElementById("btn-idly");
const buttonPizza = document.getElementById("btn-pizza");
const buttonAll = document.getElementById("btn-all");


const changeImage = (url = "") => fetch(`https://foodish-api.herokuapp.com/api${url?"/images/"+url:""}`).then(res => res.json()).then(response => img.src=response.image);  

buttonBirtani.addEventListener("click",()=>{
    changeImage("biryani")
})


buttonAll.addEventListener("click",()=>{
    changeImage()
})