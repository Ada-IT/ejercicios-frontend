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


/* https://dog.ceo/api/breeds/image/random/50 */


var myBlob = new Blob([JSON.stringify({casa:"test"})], {type: 'text/plain'});
 
// (2) CREATE DOWNLOAD LINK
var url = window.URL.createObjectURL(myBlob);
var anchor = document.createElement("a");
anchor.href = url;
anchor.download = "HelloWorld.txt";
anchor.click();
window.URL.revokeObjectURL(url);
document.removeChild(anchor);