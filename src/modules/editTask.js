import showTask from "./showTask";
import {clear} from './add'


// this function create edit button it takes three arguments div to append the edit button and task and array 
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


// this function edit's the task and takes two argument task and array 

function editTask(element, array) {

    // grabbing important elements to change their properties and values
    const popUp = document.getElementById("popUp");
    const title = document.getElementById("title");
    const description = document.getElementById('description');
    const priority = document.getElementById('priority');
    const date = document.getElementById('date');
    const time = document.getElementById('time');

    // grabbing pop up button div to remove add button and adding edit button
    const pupupBtn = document.getElementById('popup__addBtn')
    const add = document.getElementById('addBtn');
    add.remove()

    // creating edit button
    const editBtn = document.createElement('button');
    editBtn.classList.add("addBtn")
    editBtn.setAttribute('id', 'editBtn');
    editBtn.innerHTML = 'EDIT'
    pupupBtn.appendChild(editBtn)



    // setting the initial value to the pop up so the user can edit it 
    title.value = element.title;
    description.value = element.description;
    priority.value = element.priority;
    date.value = element.value;
    time.value = element.time;


    // click listener to edit button
    editBtn.addEventListener("click", (e) => {
        e.preventDefault()
        // removing pop up class
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

        //removing edit button and calling display task to show the new array
        const pupupBtn = document.getElementById('popup__addBtn')
        showTask.displayTask(array)
        editBtn.remove()

        // creating add button again
        const addBtn = document.createElement('button');
        addBtn.classList.add("addBtn")
        addBtn.setAttribute('id', 'addBtn');
        addBtn.innerHTML = 'ADD TASK'
        pupupBtn.appendChild(addBtn)

        // finally calling the clear function to clear the input divs
        clear(title, description, priority, date, time)
        localStorage.setItem("array", JSON.stringify(array));
        
    })
    
}

export default editBtn()