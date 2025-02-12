import { TaskManager } from "./taskmanager.js";

const taskInput = document.getElementaryById('taskInput');
const addTaskButton = document.getElementaryById('addTaskButton');

addTaskButton.addEventListener('click', () => {
    const taskDescription = taskInput.value;
    if (taskDescription){
        TaskManager.addTask(taskDescription);
        taskInput.value = '';
    }
});