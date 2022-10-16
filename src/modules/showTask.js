import {delBtn} from "./deleteTask";
import doneBtn from "./done";
import setPriority from "./priority";
import editBtn from "./editTask";

// this function create task card and shows them on the display
function showTask() {
    // main div all the task card will add to this.
    // it displays the card in the display
    const mainDiv = document.getElementById("tasks")
    function displayTask(arr) {
        // initially setting mainDiv innerHtml to empty
        mainDiv.innerHTML = ''
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
            task.appendChild(createDiv(element.title, element.description, element.priority, element.date, element.time, element.done))

            // creating different buttons in each card
            doneBtn(btns, element, arr, task);
            editBtn.createEditBtn(btns, element , arr)
            delBtn(btns,element, arr);
            setPriority.setColor(element, task)

            if (element.done==='done'){
                task.style.background="#a9c0cb"
            }
        });
    }
    return { displayTask }
}


// this function create divs and write information in them 
function createDiv(title, description, priority, date, time ,task) {
    const taskInfo=document.createElement('div')
    taskInfo.classList.add("task__taskInfo");
    const dateTimeDiv=document.createElement('div');
    dateTimeDiv.classList.add("dateTime");


    const infoDiv=document.createElement("div");
    infoDiv.classList.add('infoDiv')
    
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

    infoDiv.appendChild(taskTitle);
    infoDiv.appendChild(taskPriority);
    infoDiv.appendChild(taskDescription);
    dateTimeDiv.appendChild(taskTime);
    dateTimeDiv.appendChild(taskDate);
    taskInfo.appendChild(infoDiv)
    taskInfo.appendChild(dateTimeDiv)
    // showing information in the display
    // taskTitle.innerHTML = `<h1>${title}</h1>`;
    taskDescription.innerHTML = description;
    taskPriority.innerHTML = priority;
    taskDate.innerHTML = date;
    taskTime.innerHTML = time;

    if (task==''){
        taskTitle.innerHTML = `<h1>${title}</h1>`;
    }else if (task=='done'){
        taskTitle.innerHTML = `<s>${title}</s>`;
    }

    return taskInfo
}

export default showTask()