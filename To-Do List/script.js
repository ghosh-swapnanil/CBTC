document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');
    const completedTaskList = document.getElementById('completedTaskList');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    function addTask(taskText) {
        const taskItem = document.createElement('li');
        taskItem.className = 'flex justify-between items-center p-2 bg-white mb-2 rounded shadow';

        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.className = 'p-1 bg-green-500 text-white rounded';
        completeButton.addEventListener('click', () => {
            completeTask(taskItem, taskText);
        });

        taskItem.appendChild(taskContent);
        taskItem.appendChild(completeButton);
        taskList.appendChild(taskItem);
    }

    function completeTask(taskItem, taskText) {
        taskList.removeChild(taskItem);

        const completedTaskItem = document.createElement('li');
        completedTaskItem.className = 'p-2 bg-gray-300 mb-2 rounded shadow';

        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;

        completedTaskItem.appendChild(taskContent);
        completedTaskList.appendChild(completedTaskItem);
    }
});


