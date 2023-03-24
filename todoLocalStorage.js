const toDoForm = document.getElementById('addTask');
const myToDoList = document.getElementById('toDoList');

const savedToDos = JSON.parse(localStorage.getItem("todos")) || [];
for (let i = 0; i < savedToDos.length; i++) {
    let newToDo = document.createElement("li");
    newToDo.innerText = savedToDos[i].task;
    newToDo.isCompleted = savedToDos[i].isCompleted ? true : false;
    if (newToDo.isCompleted) {
        newToDo.style.textDecoration = "line-through";
    }
    myToDoList.appendChild(newToDo);
}

toDoForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let newToDo = document.createElement("li");
    let taskValue = document.createElement("task").value;
    newToDo.innerText = document.getElementById("task").value;
    newToDo.isCompleted = false;
    toDoForm.reset();
    myToDoList.append(newToDo);

    //add new task to local storage
    savedToDos.push({ task: newToDo.innerText, isCompleted: false});
    localStorage.setItem("todos", JSON.stringify(savedToDos));
});

myToDoList.addEventListener("click", function(event) {
    let clickedListItem = event.target;

    if (!clickedListItem.isCompleted) {
        clickedListItem.style.textDecoration = "line-through";
        clickedListItem.isCompleted = true;
      } else {
        clickedListItem.style.textDecoration = "none";
        clickedListItem.isCompleted = false;
      }    
}
)


    
  
