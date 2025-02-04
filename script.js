const customCheckbox = document.querySelectorAll(".custom-checkbox");
const check = document.querySelectorAll(".check");
const error = document.querySelector(".error");
const input = document.querySelectorAll("input");
const firstInput = document.querySelector("#firstInput");
const secondInput = document.querySelector("#secondInput");
const thirdInput = document.querySelector("#thirdInput");
const goalContainer = document.querySelector(".goal-container");
const numspan = document.querySelector(".numspan");
const icon = document.querySelectorAll(".icon");
const delIcon = document.querySelectorAll(".delIcon");
const progressValue = document.querySelector(".progress-value");
const progressPara = document.querySelector(".progress-para");

const allquates=[
  'Raise the bar by completing your goal!',
  'well begun is half done!',
'just a step away keep going',
'you just completed your all goals.'
]

let count = 1;
const allGaols = JSON.parse(localStorage.getItem("allgoals")) || {
  firstInput:{
    name:'',
    completed:false
  },
  secondInput:{
    name:'',
    completed:false
  },
  thirdInput:{
    name:'',
    completed:false
  },
};
let completedGoals = Object.values(allGaols).filter(
  (goal) => goal.completed
).length;
progressValue.style.width = `${(completedGoals / 3) * 100}%`;
progressValue.firstElementChild.innerText = `${completedGoals}/3 completed`;
progressPara.innerText=allquates[completedGoals]

customCheckbox.forEach((checkbox) => {
  checkbox.addEventListener("click", () => {
    const allInput = [...input].every((check) => {
      return check.value;
    });
    if (allInput) {
      checkbox.parentElement.classList.toggle("completed");
      const inputId = checkbox.nextElementSibling.id;
      allGaols[inputId].completed = !allGaols[inputId].completed;
      completedGoals = Object.values(allGaols).filter(
        (goal) => goal.completed
      ).length;
      progressValue.style.width = `${(completedGoals / 3) * 100}%`;
      progressValue.firstElementChild.innerText = `${completedGoals}/3 completed`;
      progressPara.innerText=allquates[completedGoals]

      localStorage.setItem("allgoals", JSON.stringify(allGaols));
    } else {
      error.classList.add("blockError");
    }
  });
});

input.forEach((inp) => {
  // console.log(allGaols[inp.id]);
  inp.value = allGaols[inp.id].name;
  if (allGaols[inp.id].completed) {
    inp.parentElement.classList.add("completed");
  }

  inp.addEventListener("focus", () => {
    error.classList.remove("blockError");
  });

  inp.addEventListener("input", (e) => {
    if (allGaols[inp.id].completed) {
      inp.value = allGaols[inp.id].name;
      return;
    }
    allGaols[inp.id] = {
      name: inp.value,
      completed: false,
    };
    localStorage.setItem("allgoals", JSON.stringify(allGaols));
    // console.log(allGaols);
  });
});

// [...icon].every((color)=>{
//     return color.style.color='teal'
// })
const firstpar = document.querySelector(".firstpar");
