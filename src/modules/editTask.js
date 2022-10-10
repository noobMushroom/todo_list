import setPriority from "./priority";
import showTask from "./showTask";

function editBtn() {
    function createEditBtn(div, task, some) {
        const popUp = document.getElementById("popUp");
        const editBtn = document.createElement('button');
        editBtn.classList.add("editBtn", "fa-solid", "fa-pen-to-square", "fa-1x");
        div.appendChild(editBtn);
        editBtn.addEventListener('click', () => {
            popUp.classList.add("open")
            editTask(task, some)
        })
    }
    return { createEditBtn }
}


function editTask(element, div, array) {

    const title = document.getElementById("title");
    const description = document.getElementById('description');
    const priority = document.getElementById('priority');
    const date = document.getElementById('date');
    const time = document.getElementById('time');

    const pupupBtn = document.getElementById('popupBtn')

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

    editBtn.addEventListener("click",()=>{
        console.log('working')
    })
    // editBtn.addEventListener("click", () => {
    //     console.log("i am clicked from the edit.js")
    // if (title.value === '') {
    //     title.value = element.title
    // } else (
    //     element.title = title.value
    // )

    // if (description.value === "") {
    //     description.value = element.description;
    // } else {
    //     element.description = description.value
    // }

    // if (priority.value === '') {
    //     priority.value = element.priority;
    // } else {
    //     element.priority = priority.value;
    // }

    // if (date.value === '') {
    //     date.value = element.date;
    // } else {
    //     element.date = date.value;
    // }

    // if (time.value === '') {
    //     time.value = element.time;
    // } else {
    //     element.time = time.value;
    // }

    // add.innerHTML = 'ADD TASK'
    // })


    // setPriority.setColor(element, div)

    // showTask.displayTask(array)
}


export default editBtn()