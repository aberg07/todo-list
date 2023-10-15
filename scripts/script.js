const taskListDiv = document.getElementById('task-list');

function addTask() {
    if (document.getElementById('task-input').value == '') {
        alert('The task name cannot be empty.');
    }
    else {
        //Creating a new task div for the tasklist div
        const newTask = document.createElement('div');
        newTask.className = 'task';
        taskListDiv.appendChild(newTask);

        //Creating a p element for the task div and adding it to the task div
        const taskName = document.createElement('p');
        taskName.className = 'task-name';
        const node = document.createTextNode(document.getElementById('task-input').value);
        taskName.appendChild(node);
        newTask.appendChild(taskName);

        //Create a button that accompanies the task to edit it
        const editButton = document.createElement('button');
        editButton.className = 'edit-button';
        editButton.innerText = 'Edit';
        editButton.setAttribute('onclick', 'editTask(this)');
        newTask.appendChild(editButton);

        //Create the button that accompanies the task to take it off the list
        const clearButton = document.createElement('button');
        clearButton.className = 'clear-button';
        clearButton.innerText = 'Complete';
        clearButton.setAttribute('onclick', 'clearTask(this)');
        newTask.appendChild(clearButton);
        
        //Clear the input box after submission so user will not have to manually clear it
        document.getElementById('task-input').value = "";
    }
}

function editTask(button) {
    //Creates a prompt asking the user for input
    let newTaskName = prompt("Please enter the new text for this task");
    if (newTaskName == '') {
        alert('The task name cannot be empty.');
    }
    else {
        button.parentElement.getElementsByClassName('task-name')[0].innerText = newTaskName;
    }
}

function clearTask(button) {
    button.parentElement.remove();
}
