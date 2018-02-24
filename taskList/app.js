// define UI variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// load all event listeners
loadAllEventListeners();

// load all event listeners
function loadAllEventListeners() {

    // DOM load event
    document.addEventListener('DOMContentLoaded', getTasks);

    // add task event
    form.addEventListener('submit', addTask);

    //remove task event
    taskList.addEventListener('click', removeTask);

    // clear tasks
    clearBtn.addEventListener('click', clearTasks);

    // filter tasks
    filter.addEventListener('keyup', filterTasks);

}

// get tasks from local storage
function getTasks() {
   let tasks;

   tasks = checkLocalStorage(tasks);

       tasks.forEach(function (task) {
        // create li element
        const li = document.createElement('li');
        // add class
        li.className = 'collection-item';
        // create a text node add append to li
        li.appendChild(document.createTextNode(task));
        // create new link element
        const link = document.createElement('a');
        // add class
        link.className = 'delete-item secondary-content';
        // add icon html
        link.innerHTML = '<i class="fa fa-remove"></i>';
        // append the link to li
        li.appendChild(link);
        // append li to ul
        taskList.appendChild(li);
        // clear input
        taskInput.value = '';
    })
}

// add task
function addTask(e) {
    if (taskInput.value === '') {
        alert('Add a task');
    }

    // create li element
    const li = document.createElement('li');
    // add class
    li.className = 'collection-item';
    // create a text node add append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // create new link element
    const link = document.createElement('a');
    // add class
    link.className = 'delete-item secondary-content';
    // add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // append the link to li
    li.appendChild(link);
    // append li to ul

    // store in local storage
    storeTaskInLocalStorage(taskInput.value);

    taskList.appendChild(li);
    // clear input
    taskInput.value = '';

    e.preventDefault();
}

// store task
function storeTaskInLocalStorage(task) {
    let tasks;

    tasks = checkLocalStorage(tasks);

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// remove task
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are You Sure?')) {
            e.target.parentElement.parentElement.remove();

            // remove from local storage
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}

// rempve from local storage
function removeTaskFromLocalStorage(taskItem) {
    let tasks;

    tasks = checkLocalStorage(tasks);

    tasks.forEach(function (task, index) {
        if(taskItem.textContent === task){
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// clear tasks
function clearTasks() {
    // taskList.innerHTML = '';

    // faster
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }

    // clear from local storage
    clearTasksFromLocalStorage();
}

// clear from local storage
function clearTasksFromLocalStorage() {
    localStorage.clear();
}

function filterTasks(e) {
    let text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function (task) {
        if(task.firstChild.textContent.toLowerCase().indexOf(text) !== -1){
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}





















