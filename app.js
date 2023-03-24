const form = document.querySelector('#addTask');
const input = document.querySelector('#newToDo');
const toDoList = document.querySelector('#toDoList');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let newTask = document.createElement('li');
    newTask.innerText = document.getElementById("task").value;
    //let removeBtn = document.createElement('button');
    //removeBtn.innerText = 'Remove Task';
    //removeBtn.addEventListener('click', function (e){ 
    //  e.target.parentElement.remove();
    
    //adding the form inputs to document
    
    //newTask.appendChild(removeBtn);
    toDoList.appendChild(newTask);
    // reset the input value
    form.reset();
})

//remove tasks and strikethrough tasks
toDoList.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
    }
    else if (e.target.tagName === 'LI') {
        e.target.classList.toggle('finished');
    }
})


