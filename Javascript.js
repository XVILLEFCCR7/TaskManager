function addTask() {
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');


    if (newTaskInput.value.trim() !== '') {
        const taskItem = document.createElement('li');
        taskItem.textContent = newTaskInput.value;
        taskItem.addEventListener('click', function() {
            editTask(this);
        });


        // Add delete functionality
        taskItem.addEventListener('contextmenu', function(event) {
            event.preventDefault(); // Prevent the default context menu
            deleteTask(this);
        });


        // Set the font color to black for the saved task
        taskItem.style.color = '#000';


        taskList.appendChild(taskItem);
        newTaskInput.value = '';
    }
}


function editTask(taskItem) {
    const newText = prompt('Edit task:', taskItem.textContent);
    if (newText !== null) {
        taskItem.textContent = newText;
    }
}


function deleteTask(taskItem) {
    taskItem.remove();
}