const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnOpenModal = document.querySelectorAll(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");

const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

for (let i = 0; i < btnOpenModal.length; i++) {
    btnOpenModal[i].addEventListener("click", function () {
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
    });

}
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
});