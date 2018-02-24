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
    // add task event
    form.addEventListener('submit', addTask);

    //remove task event
    taskList.addEventListener('click', removeTask);

    // clear tasks
    clearBtn.addEventListener('click', clearTasks);

    // filter tasks
    filter.addEventListener('keyup', filterTasks);

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
    taskList.appendChild(li);
    // clear input
    taskInput.value = '';

    e.preventDefault();
}

// remove task
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are You Sure?')) {
            e.target.parentElement.parentElement.remove();
        }
    }
}

// clear tasks
function clearTasks() {
    // taskList.innerHTML = '';

    // faster
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}

function filterTasks(e) {
    let text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function (task) {
        if(task.firstChild.textContent.toLowerCase().indexOf(text) !== -1){
            task.style.display = 'block';
        }else{
            task.style.display = 'none';
        }
    });
}





















