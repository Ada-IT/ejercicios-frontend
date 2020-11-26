const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const button = document.getElementById("btn");

button.addEventListener("click", () => {
  addImg();
});

const addImg = async () => {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((res) => res.json())
    .then((response) => {
      img1.src = response[0].url;
    });
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((res) => res.json())
    .then((response) => {
      img2.src = response[0].url;
    });
};

addImg();
