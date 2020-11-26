const container = document.getElementById("container");
const modal = document.getElementById("modal");
const close = document.getElementById("close");
const deleteModal = document.getElementById("deleteModal");
const closeDelete = document.getElementById("closeDelete");
const commentaries = document.getElementById("commentaries");

const showModal = () =>{
  modal.classList.add("is-visible");
}
const closeModal = () =>{
 modal.classList.remove("is-visible");
}

const showModalDelete = () =>{
  deleteModal.classList.add("is-visible");
}
const closeModalDelete = () =>{
  deleteModal.classList.remove("is-visible");
}

close.addEventListener("click",closeModal);
closeDelete.addEventListener("click",closeModalDelete);

window.addEventListener("click",(event) => {
  if (event.target == modal) {
    closeModal();
  }
  if (event.target == modal) {
    closeModal();
  }
});

const openModal= ()=>  {
  showModal();
};

const openModalDelete= ()=>  {
  showModalDelete();
};

myBtn.addEventListener("click",openModal);



