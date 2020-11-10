const container = document.getElementById("container");
const modal = document.getElementById("myModal");
const span = document.getElementById("close");
const commentaries = document.getElementById("commentaries");

const showModal = () => {
  modal.classList.add("is-visible");
};
const closeModal = () => {
  modal.classList.remove("is-visible");
};

span.addEventListener("click", closeModal);

window.addEventListener("click", (event) => {
  if (event.target == modal) {
    closeModal();
  }
});

const generateCard = () =>
  fetch("http://my-json-server.typicode.com/matiasbenary/dbJsonDogs/dogs")
    .then((res) => res.json())
    .then((response) => {
      container.innerHTML = response.reduce((acc, dog) => {
        return (
          acc +
          `<div class="card" onclick="openModal(${dog.id})">
          <img src="${dog.img}" alt="${dog.name}">
          <h2>${dog.name}</h2>
          <div class="card__footer"><i class="fas fa-paw"></i> ${dog.like}</div>
      </div>
      `
        );
      }, "");
    });

generateCard();

const openModal = (id) => {
  commentaries.innerHTML = "";
  showModal();
  fetch(
    `http://my-json-server.typicode.com/matiasbenary/dbJsonDogs/dogs/${id}/comments`
  )
    .then((res) => res.json())
    .then((response) => {
      commentaries.innerHTML = response.reduce(
        (acc, comment) =>
          acc +
          ` <div class="commentary">
    <img class="commentary__img" src="${comment.avatar}" alt="imagen de ${comment.user}">
    <div>
      <h4>${comment.user}</h4>
      <p>${comment.commentary}</p>
    </div>
  </div>`,
        ""
      );
    });
};
