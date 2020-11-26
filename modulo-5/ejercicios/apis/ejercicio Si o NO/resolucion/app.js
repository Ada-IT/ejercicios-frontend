const img = document.getElementById("img");
const res = document.getElementById("res");
const button = document.getElementById("btn");

const changeResult = () =>
  fetch(`https://yesno.wtf/api`)
    .then((res) => res.json())
    .then((response) => {
      img.src = response.image;
      res.innerHTML = response.answer;
    });

button.addEventListener("click", () => {
  changeResult();
});

changeResult();
