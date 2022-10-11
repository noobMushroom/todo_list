import delBtn from "./deleteTask";
import doneBtn from "./done";
import setPriority from "./priority";
import editBtn from "./editTask";

// this function create task card and shows them on the display
function showTask() {
    // main div all the task card will add to this.
    const mainDiv = document.getElementById("tasks")
    // it displays the card in the display
    function displayTask(arr) {
        // initially setting mainDiv innerHtml to empty
        mainDiv.innerHTML = ''
        console.log(arr)
        arr.forEach(element => {
            // creating task card
            const task = document.createElement('div');
            task.classList.add('task');
            mainDiv.appendChild(task)

            // creating div for button inside to task card
            const btns=document.createElement('div');
            btns.classList.add('task__btn')
            task.appendChild(btns)
            // calling created div to append the info in the task card
            task.appendChild(createDiv(element.title, element.description, element.priority, element.date, element.time))

            // creating different buttons in each card
            doneBtn(btns, element, arr);
            editBtn.createEditBtn(btns, element , arr)
            delBtn.createDeleteBtn(btns,element, arr);
            setPriority.setColor(element, task)
        });
    }
    return { displayTask }
}


// this function create divs and write information in them 
function createDiv(title, description, priority, date, time) {
    const taskInfo=document.createElement('div')
    taskInfo.classList.add("task__taskInfo");
    const taskTitle = document.createElement('div');
    taskTitle.classList.add('title');
    const taskDescription = document.createElement('div');
    taskDescription.classList.add("description");
    const taskPriority = document.createElement('div');
    taskPriority.classList.add("priority");
    const taskDate = document.createElement('div');
    taskDate.classList.add('date');
    const taskTime = document.createElement('div');
    taskTime.classList.add('time');

    taskInfo.appendChild(taskTitle);
    taskInfo.appendChild(taskDescription);
    taskInfo.appendChild(taskPriority);
    taskInfo.appendChild(taskDate);
    taskInfo.appendChild(taskTime);

    // showing information in the display
    taskTitle.innerHTML = `<h1>${title}</h1>`;
    taskDescription.innerHTML = description;
    taskPriority.innerHTML = priority;
    taskDate.innerHTML = date;
    taskTime.innerHTML = time;

    return taskInfo
}

export default showTask()