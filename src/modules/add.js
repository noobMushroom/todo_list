import showTask from "./showTask"
import { differenceInDays } from 'date-fns'


// this function creates object

function createTask(title, description, priority, date, time, done) {
    this.title = title
    this.description = description
    this.priority = priority
    this.date = date
    this.time = time
    this.done = done
}


function addTask(array, ...title) {
    console.log('this array is from add task ', array)
    let newTask = new createTask(...title)
    array.push(newTask)
}


// this function grabs the value from the divs and send them to add task and show task to add on the array and display the array
function info(array) {
    const title = document.getElementById("title");
    const description = document.getElementById('description');
    const priority = document.getElementById('priority');
    const date = document.getElementById('date');
    const time = document.getElementById('time');
    const add = document.getElementById('addBtn');
    cancelBtn()
    add.addEventListener("click", () => {
        const today = new Date()
        let newDAte = new Date(date.value)
        const distance = differenceInDays(newDAte, today);
        if (title.value === '') {
            return
        }
        if (date.value === '' || distance < 0) {
            alert("enter a valid date")
            return
        }
        addTask(array, title.value, description.value, priority.value, date.value, time.value, '');
        clear()
        // clear(title, description, priority, date, time)
        showTask.displayTask(array)
    })
};

// this function clear all the value from divs
export function clear() {
    title.value = ''
    description.value = ''
    time.value = ''
    date.value = ''
    priority.value = "important"
    popUp.classList.remove("open")
}


function cancelBtn(){
    const cancelBtn=document.getElementById('cancelBtn')
    cancelBtn.addEventListener('click', ()=>{
        clear()
    })
}


export {info}

