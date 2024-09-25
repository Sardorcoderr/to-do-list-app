document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('task-input');
    const taskDatetime = document.getElementById('task-datetime');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    const toggleThemeBtn = document.getElementById('toggle-theme-btn');

    addTaskBtn.addEventListener('click', addTask);
    toggleThemeBtn.addEventListener('click', toggleTheme);
    loadTasks();

    function addTask() {
        const taskText = taskInput.value.trim();
        const taskDatetimeValue = taskDatetime.value;

        if (taskText !== '' && taskDatetimeValue !== '') {
            const listItem = document.createElement('li');
            const span = document.createElement('span');
            span.textContent = taskText;
            span.classList.add('edit-task');

            const timeSpan = document.createElement('span');
            timeSpan.textContent = taskDatetimeValue.replace('T', ' ');
            timeSpan.classList.add('time');

            const editBtn = document.createElement('button');
            editBtn.innerHTML = '<i class="fas fa-pencil-alt"></i>';
            editBtn.classList.add('edit-btn');
            editBtn.addEventListener('click', () => editTask(listItem, span, timeSpan));

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'X';
            deleteBtn.addEventListener('click', () => deleteTask(listItem));

            listItem.appendChild(span);
            listItem.appendChild(timeSpan);
            listItem.appendChild(editBtn);
            listItem.appendChild(deleteBtn);
            taskList.appendChild(listItem);

            saveTasks();

            taskInput.value = '';
            taskDatetime.value = '';
        }
    }

    function editTask(listItem, span, timeSpan) {
        const newText = prompt('Edit your task:', span.textContent);
        const newTime = prompt('Edit your time:', timeSpan.textContent.replace(' ', 'T'));

        if (newText !== null && newText.trim() !== '') {
            span.textContent = newText.trim();
        }

        if (newTime !== null && newTime.trim() !== '') {
            timeSpan.textContent = newTime.trim().replace('T', ' ');
        }

        saveTasks();
    }

    function deleteTask(listItem) {
        taskList.removeChild(listItem);
        saveTasks();
    }

    function toggleTheme() {
        document.body.classList.toggle('dark-theme');
    }

    function saveTasks() {
        const tasks = [];
        taskList.querySelectorAll('li').forEach(item => {
            const task = item.querySelector('span.edit-task').textContent;
            const time = item.querySelector('span.time').textContent;
            tasks.push({ task, time });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(({ task, time }) => {
            const listItem = document.createElement('li');
            const span = document.createElement('span');
            span.textContent = task;
            span.classList.add('edit-task');

            const timeSpan = document.createElement('span');
            timeSpan.textContent = time;
            timeSpan.classList.add('time');

            const editBtn = document.createElement('button');
            editBtn.innerHTML = '<i class="fas fa-pencil-alt"></i>';
            editBtn.classList.add('edit-btn');
            editBtn.addEventListener('click', () => editTask(listItem, span, timeSpan));

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'X';
            deleteBtn.addEventListener('click', () => deleteTask(listItem));

            listItem.appendChild(span);
            listItem.appendChild(timeSpan);
            listItem.appendChild(editBtn);
            listItem.appendChild(deleteBtn);
            taskList.appendChild(listItem);
        });
    }
});
