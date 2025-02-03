const customCheckbox = document.querySelectorAll(".custom-checkbox");
const check = document.querySelectorAll(".check");
const error = document.querySelector(".error");
const input = document.querySelectorAll("input");
const goalContainer = document.querySelector(".goal-container");
const numspan = document.querySelector(".numspan");
const icon = document.querySelectorAll(".icon");
const delIcon = document.querySelectorAll(".delIcon");
const progressValue = document.querySelector(".progress-value");

let count = 1;

customCheckbox.forEach((checkbox) => {
  checkbox.addEventListener("click", () => {
    const allInput = [...input].every((check) => {
      return check.value;
    });
    if (allInput) {
      checkbox.parentElement.classList.toggle("completed");
      progressValue.style.width = "33.33%";
    } else {
      error.classList.add("blockError");
    }
  });
});
input.forEach((inp) => {
  inp.addEventListener("focus", () => {
    error.classList.remove("blockError");
  });
});




