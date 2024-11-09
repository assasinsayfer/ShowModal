// * Selectors
const modal = document.querySelector(".modal");
const containerBtn = document.querySelector(".container__btn");

const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");

const displayNone = document.querySelector(".display-none");
const modalContent = document.querySelector(".modal-content");

// * Functions
function functionStart() {
  displayNone.classList.remove("display-none");
  containerBtn.classList.add("filter");
  addModalColor();
}
function addModalColor() {
  modal.setAttribute("class", "modal modal-color");
}

function functionEnd() {
  displayNone.classList.add("display-none");
  containerBtn.classList.remove("filter");
  modal.setAttribute("class", "modal");
}

// * Events
btn1.addEventListener("click", functionStart);
btn2.addEventListener("click", functionStart);
btn3.addEventListener("click", functionStart);

// * Callbacks
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    functionEnd();
  } else {
    alert("Press Escape");
  }
});
