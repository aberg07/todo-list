const taskListDiv = document.getElementById('task-list');

function addTask() {
    if (document.getElementById('task-input').value === '') {
        alert('The task name cannot be empty.');
    }
    else {
        //Creating a new task div for the tasklist div
        const newTask = document.createElement('div');
        newTask.className = 'task';
        taskListDiv.appendChild(newTask);

        //Creating a p element for the task div and adding it to the task div
        const taskName = document.createElement('p');
        const node = document.createTextNode(document.getElementById('task-input').value);
        taskName.appendChild(node);
        newTask.appendChild(taskName);

        //Create the button that accompanies the task to take it off the list
        const clearButton = document.createElement('button');
        clearButton.className = 'clear-button';
        clearButton.innerText = 'Complete';
        clearButton.setAttribute('onclick', 'clearTask(this)')
        newTask.appendChild(clearButton);
        
        //Clear the input box after submission so user will not have to manually clear it
        document.getElementById('task-input').value = "";
    }
}

function clearTask(button) {
    button.parentElement.remove();
}