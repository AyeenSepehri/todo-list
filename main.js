//selectors
const inputTodo = document.getElementById("todos");
const submitBtn = document.querySelector(".submit-txt");
const toDoList = document.querySelector(".todo-list");
const clearAll = document.querySelector(".clear-all");

//eventListener of add todos
submitBtn.addEventListener("click", (myFunction) => {
  //create div
  const options = document.createElement("div");
  options.classList.add("options");
  //create paragraph
  const valueOfTodo = document.createElement("p");
  valueOfTodo.classList.add("value-todos");
  valueOfTodo.innerText = inputTodo.value;
  options.appendChild(valueOfTodo);
  //create mark button
  const markBtn = document.createElement("button");
  markBtn.innerHTML = '<i class="fas fa-check"></i>';
  markBtn.classList.add("mark-option");
  options.appendChild(markBtn);
  //create mark button
  const trashBtn = document.createElement("button");
  trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
  trashBtn.classList.add("delete-option");
  options.appendChild(trashBtn);
  //appendind div into parent div
  toDoList.appendChild(options);
  //clear value after submit
  inputTodo.val9ue = "";
});

//set delete check buttons
toDoList.addEventListener("click", function deleteChech(e) {
  const item = e.target;
  const findParent = item.parentNode;
  //delete item button
  if (item.classList[0] === "delete-option") {
    findParent.remove();
  }
  //check item button
  if (item.classList[0] === "mark-option") {
    findParent.classList.toggle("marked");
  }
});
//set modal
function showModal() {
  const modalBox = document.querySelector(".wraper");
  modalBox.style.visibility = "visible";
  return new Promise((resolve, reject) => {
    const noBtn = document.getElementById("no-btn");
    const yesBtn = document.getElementById("yes-btn");
    noBtn.addEventListener("click", (e) => {
      resolve("NO");
    });
    yesBtn.addEventListener("click", (e) => {
      resolve("YES");
    });
  });
}

//set modal's items
clearAll.addEventListener("click", async function modalFunction() {
  const result = await showModal();
  switch (result) {
    case "YES":
      while (toDoList.hasChildNodes()) {
          toDoList.removeChild(toDoList.firstChild);
          const modalBox = document.querySelector(".wraper");
          //in khat
          modalBox.style.visibility = "hidden";
      }
      break;
    case "NO":
      const modalBox = document.querySelector(".wraper");
      //va in khat
      modalBox.style.visibility = "hidden";
      break;
    default:
      console.log("nothing found");
  }
  //bayad bian inja chon b har hal dar har soorati bayad modal baste beshe
  //agar baste nashe ba zadane dobareye dokme yes ya no in tabe farakhani nmishe
});