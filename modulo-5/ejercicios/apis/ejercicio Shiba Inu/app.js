const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const button = document.getElementById("btn")

button.addEventListener("click",()=>{
    fetch('http://shibe.online/api/shibes?count=2').then(res => res.json()).then(response => {
        img1.src=response[0];
    img2.src=response[1]}
    );
})