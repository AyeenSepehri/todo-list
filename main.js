//selectors
const inputTodo = document.getElementById("todos");
const submitBtn = document.querySelector(".submit-txt");
const valueTodo = document.getElementById(".options");
const toDoList = document.querySelector(".todo-list");
const clearAll = document.querySelector(".clear-all");
//eventListener of add todos
submitBtn.addEventListener("click", myFunction => {
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
});
//set modal
clearAll.addEventListener("click", function modalFunction() {
    const modalBox = document.querySelector(".modal-box");
    modalBox.style.visibility = "visible";
    //set no button
    const noBtn = document.getElementById("no-btn");
    noBtn.addEventListener("click", function closeModal() {
        modalBox.style.visibility = "hidden";
    })
    //set yes button
    const yesBtn = document.getElementById("yes-btn");
    yesBtn.addEventListener("click", function clearList(){
        toDoList.remove();
        modalBox.style.visibility = "hidden";
    })
})