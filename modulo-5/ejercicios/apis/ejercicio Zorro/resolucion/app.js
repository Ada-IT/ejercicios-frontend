const img = document.getElementById("img");
const button = document.getElementById("btn");

button.addEventListener("click", () => {
  addImg();
});

const addImg = () => {
  fetch("https://randomfox.ca/floof/")
    .then((res) => res.json())
    .then((response) => (img.src = response.image));
};

addImg();
