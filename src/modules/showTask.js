import delBtn from "./deleteTask";
import doneBtn from "./done";
import priority from "./priority";

function showTask() {
    const mainDiv = document.getElementById("tasks")
    function displayTask(arr) {
        mainDiv.innerHTML = ''
        arr.forEach(element => {
            const task = document.createElement('div');
            task.classList.add('task');
            mainDiv.appendChild(task)
            createDiv(task,element.title, element.description, element.priority, element.date, element.time)
            delBtn.createDeleteBtn(task,element, arr)
            doneBtn(task, element, arr);
            priority.setColor(element, task)
        });
    }
    return { displayTask }
}

function createDiv(task,title, description, priority, date, time) {
    const taskTitle = document.createElement('div');
    taskTitle.classList.add('task__title');
    const taskDescription = document.createElement('div');
    taskDescription.classList.add("task__description");
    const taskPriority = document.createElement('div');
    taskPriority.classList.add("task__priority");
    const taskDate = document.createElement('div');
    taskDate.classList.add('task__date');
    const taskTime = document.createElement('div');
    taskTime.classList.add('task__time');

    task.appendChild(taskTitle);
    task.appendChild(taskDescription);
    task.appendChild(taskPriority);
    task.appendChild(taskDate);
    task.appendChild(taskTime);

    // showing information in the display
    taskTitle.innerHTML = `<h1>${title}</h1>`;
    taskDescription.innerHTML = description;
    taskPriority.innerHTML = priority;
    taskDate.innerHTML = date;
    taskTime.innerHTML = time;

    const editBtn = document.createElement('button');
    editBtn.classList.add('task__editBtn');
    task.appendChild(editBtn);
    editBtn.innerHTML = "EDIT";
}

export default showTask()