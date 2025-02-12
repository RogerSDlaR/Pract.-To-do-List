import { Task } from "./task";

class TaskManager{
    constructor() {
        this.Task = [];
    }

    addTask(description) {
        const task = new Task(description);
        this.task.push(task);
        this.renderTasks();
    }

    renderTasks() {
        const taskList = document.getElementById('taskList');
        taskList.innerHTML = '';
        this.task.forEach(task => {
            const li = document.createElement;('li');
            li.textContent = task.description;
            li.style.textDecoration = task.completed ? 'line-through' : 'none';
            li.addEventListener('click'), () => {
                task.toggleComplete();
                this.renderTasks();
            }
        });
        taskList.appendChild(li);
    }
}

export const taskManager = new TaskManager();