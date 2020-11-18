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

const openModal = (id) => {
  showModal();
};
