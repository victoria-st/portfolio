const removeBtn = `<svg
    width="38"
    height="38"
    viewBox="0 0 38 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="38" height="38" rx="10" fill="#999999" />
    <path
      d="M28.7969 10.9844H9.20312"
      stroke="#222222"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.3282 16.3281V23.4531"
      stroke="#222222"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21.6719 16.3281V23.4531"
      stroke="#222222"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M27.0156 10.9844V27.9062C27.0156 28.1425 26.9218 28.369 26.7547 28.536C26.5877 28.703 26.3612 28.7969 26.125 28.7969H11.875C11.6388 28.7969 11.4122 28.703 11.2452 28.536C11.0782 28.369 10.9843 28.1425 10.9843 27.9062V10.9844"
      stroke="#222222"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M23.4531 10.9844V9.20313C23.4531 8.73071 23.2655 8.27764 22.9314 7.94359C22.5974 7.60954 22.1443 7.42188 21.6719 7.42188H16.3281C15.8557 7.42188 15.4026 7.60954 15.0686 7.94359C14.7345 8.27764 14.5469 8.73071 14.5469 9.20313V10.9844"
      stroke="#222222"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
`;

const addTaskBtn = document.querySelector(".add-btn");
const taskInput = document.querySelector("input");
const tasksList = document.querySelector("ul");
const incompleteBtn = document.getElementById("incomplete-btn");
const completedBtn = document.getElementById("completed-btn");
const allTasksBtn = document.getElementById("all-btn");

let i = 0;

// Functia ce creeaza list item cu paragraf si buton Delete,
// se adauga eventListener pentru paragraf si buton Delete

function addTask() {
  let newTask = taskInput.value;
  const listItem = document.createElement("li");
  listItem.innerHTML = `<p class='item-${i} text-styling'>${newTask}</p>`;
  tasksList.appendChild(listItem);
  const listItemStyle = listItem.classList;

  // La list item se adauga aceeasi clasa ca si la paragraf item-${i}
  listItemStyle.add(`item-${i}`, "incomplete");
  listItem.innerHTML += `<div class="remove-btn">${removeBtn}</div>`;
  addMarkEvent(listItem, i);
  addDeleteEvent(listItem, i);
  taskInput.value = "";
  i++;
}

// Functia ce modifica starea list item din incomplete in complete si viceversa
function addMarkEvent(listItem, i) {
  let addedTask = document.querySelector(`p.item-${i}`);
  addedTask.addEventListener("click", () => {
    listItem.classList.toggle("incomplete");
    listItem.classList.toggle("completed");
  });
}

// Functia ce adauga event pentru butonul Delete
function addDeleteEvent(listItem, i) {
  let currentTask = document.querySelector(`li.item-${i} > div`);
  currentTask.addEventListener("click", () => {
    listItem.remove();
  });
}

// Functia ce afiseaza doar taskurile incomplete
function displayIncompleteTasks() {
  let incompleteTasks = document.querySelectorAll(".incomplete");
  for (let i = 0; i < incompleteTasks.length; i++) {
    incompleteTasks[i].classList.remove("hidden");
  }
  let completedTasks = document.querySelectorAll(".completed");
  for (let i = 0; i < completedTasks.length; i++) {
    completedTasks[i].classList.add("hidden");
  }
}

// Functia ce afiseaza doar taskurile complete
function displayCompletedTasks() {
  let incompleteTasks = document.querySelectorAll(".incomplete");
  for (let i = 0; i < incompleteTasks.length; i++) {
    incompleteTasks[i].classList.add("hidden");
  }
  let completedTasks = document.querySelectorAll(".completed");
  for (let i = 0; i < completedTasks.length; i++) {
    completedTasks[i].classList.remove("hidden");
  }
}

// Functia ce afiseaza toate taskurile
function displayAllTasks() {
  let allTasks = document.querySelectorAll("li");
  for (let i = 0; i < allTasks.length; i++) {
    allTasks[i].classList.remove("hidden");
  }
}

addTaskBtn.addEventListener("click", addTask);
incompleteBtn.addEventListener("click", displayIncompleteTasks);
completedBtn.addEventListener("click", displayCompletedTasks);
allTasksBtn.addEventListener("click", displayAllTasks);
