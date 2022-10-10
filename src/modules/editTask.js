import showTask from "./showTask";
import {clear} from './add'

function editBtn() {
    function createEditBtn(div, task, array) {
        const popUp = document.getElementById("popUp");
        const editBtn = document.createElement('button');
        editBtn.classList.add("editBtn", "fa-solid", "fa-pen-to-square", "fa-1x");
        div.appendChild(editBtn);
        editBtn.addEventListener('click', () => {
            popUp.classList.add("open")
            editTask(task, array)
        })
    }
    return { createEditBtn }
}


function editTask(element, array) {
    const popUp = document.getElementById("popUp");
    const title = document.getElementById("title");
    const description = document.getElementById('description');
    const priority = document.getElementById('priority');
    const date = document.getElementById('date');
    const time = document.getElementById('time');

    const pupupBtn = document.getElementById('popup__addBtn')

    const add = document.getElementById('addBtn');
    add.remove()


    const editBtn = document.createElement('button');
    editBtn.classList.add("addBtn")
    editBtn.setAttribute('id', 'editBtn');
    editBtn.innerHTML = 'EDIT'
    pupupBtn.appendChild(editBtn)



    title.value = element.title;
    description.value = element.description;
    priority.value = element.priority;
    date.value = element.value;
    time.value = element.time;

    editBtn.addEventListener("click", () => {
        popUp.classList.remove("open")
        if (title.value === '') {
            title.value = element.title
        } else (
            element.title = title.value
        )

        if (description.value === "") {
            description.value = element.description;
        } else {
            element.description = description.value
        }

        if (priority.value === '') {
            priority.value = element.priority;
        } else {
            element.priority = priority.value;
        }

        if (date.value === '') {
            date.value = element.date;
        } else {
            element.date = date.value;
        }

        if (time.value === '') {
            time.value = element.time;
        } else {
            element.time = time.value;
        }
        const pupupBtn = document.getElementById('popup__addBtn')
        showTask.displayTask(array)
        editBtn.remove()
        const addBtn = document.createElement('button');
        addBtn.classList.add("addBtn")
        addBtn.setAttribute('id', 'addBtn');
        addBtn.innerHTML = 'ADD TASK'
        pupupBtn.appendChild(addBtn)

        clear(title, description, priority, date, time)
        
    })
    
}


export default editBtn()