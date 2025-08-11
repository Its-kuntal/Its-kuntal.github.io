document.addEventListener('DOMContentLoaded', () => {

    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    const addTask = () => {
        
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert("Please enter a task!");
            return;
        }

        const li = document.createElement('li');

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        li.appendChild(taskSpan);
        li.appendChild(removeBtn);

        taskList.appendChild(li);

        taskInput.value = '';
        taskInput.focus();
    };

    const handleTaskClick = (event) => {
        const clickedElement = event.target;

        
        if (clickedElement.classList.contains('remove-btn')) {
            const taskItem = clickedElement.parentElement;
            taskList.removeChild(taskItem);
        }
        else if (clickedElement.tagName === 'LI' || clickedElement.tagName === 'SPAN') {
            const taskItem = clickedElement.closest('li');
            taskItem.classList.toggle('completed');
        }
    };

    addTaskBtn.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    taskList.addEventListener('click', handleTaskClick);
});