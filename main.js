const input = document.getElementById("input-box");
const menu = document.getElementById("menu");

function Add_item() {
  if (input.value !== "") {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    menu.appendChild(li);
  }
  input.value = "";
  saveData();
}

menu.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", menu.innerHTML);
}

function showTask() {
  menu.innerHTML = localStorage.getItem("data");
}
showTask();
