// Selecting elements
const newTaskInput = document.getElementById('new-task');
const addTaskBtn = document.getElementById('add-task');
const todoList = document.getElementById('todo-list');

// Function to add a new task
function addTask() {
    const taskText = newTaskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    // Creating a new list item (task)
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span>${taskText}</span>
        <button>Delete</button>
    `;

    // Mark task as completed
    listItem.addEventListener('click', () => {
        listItem.classList.toggle('completed');
    });

    // Deleting a task
    listItem.querySelector('button').addEventListener('click', (e) => {
        e.stopPropagation();  // Prevent marking as completed when deleting
        todoList.removeChild(listItem);
    });

    // Adding the new task to the list
    todoList.appendChild(listItem);
    newTaskInput.value = '';  // Clear input after adding
}

// Add task on button click
addTaskBtn.addEventListener('click', addTask);

// Add task on 'Enter' key press
newTaskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
