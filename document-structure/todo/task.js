document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('tasks__form');
    const input = document.getElementById('task__input');
    const taskList = document.getElementById('tasks__list');

    function addTask(taskContent) {
        const task = document.createElement('div');
        task.classList.add('task');

        const taskTitle = document.createElement('div');
        taskTitle.classList.add('task__title');
        taskTitle.textContent = taskContent;

        const removeButton = document.createElement('a');
        removeButton.classList.add('task__remove');
        removeButton.innerHTML = '&times;';
        removeButton.href = '#';

        removeButton.addEventListener('click', function (event) {
            event.preventDefault();
            task.remove();
        });

        task.appendChild(taskTitle);
        task.appendChild(removeButton);

        taskList.appendChild(task);
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const taskContent = input.value.trim();
        if (taskContent !== '') {
            addTask(taskContent);
            input.value = '';
        }
    });
});
