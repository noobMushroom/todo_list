import { differenceInDays } from 'date-fns'
import { doneTask } from "./done"


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
    let newTask = new createTask(...title)
    array.push(newTask)
    localStorage.setItem('array', JSON.stringify(array));//todo
}


// this function grabs the value from the divs and send them to add task and show task to add on the array and display the array
function info(array) {
    const title = document.getElementById("title");
    const description = document.getElementById('description');
    const priority = document.getElementById('priority');
    const date = document.getElementById('date');
    const time = document.getElementById('time');
    const add = document.getElementById('addBtn');
    const dateWarning=document.getElementById("date-warning")
    const nameWarning=document.getElementById('input-warning')
    const timeWarning=document.getElementById('time-warning')
    cancelBtn()
    add.removeEventListener("click", (e) => {
        console.log('i am working')
        e.preventDefault()
        const today = new Date()
        let newDAte = new Date(date.value)
        const distance = differenceInDays(newDAte, today);
        if (title.value === '') {
            nameWarning.innerHTML="*Name Required"
            return
        }
        if (date.value == '') {
            dateWarning.innerHTML="*Date Required"
            return
        }else if (distance < 0){
            dateWarning.innerHTML="*Input a correct date"
            return
        }

        if (time.value===''){
            timeWarning.innerHTML='*Time required'
            return 
        }
        addTask(array, title.value, description.value, priority.value, date.value, time.value, '');
        clear()
        doneTask(array)
    })
    add.addEventListener("click", (e) => {
        e.preventDefault()
        const today = new Date()
        let newDAte = new Date(date.value)
        const distance = differenceInDays(newDAte, today);
        if (title.value === '') {
            nameWarning.innerHTML="*Name Required"
            return
        }
        if (date.value == '') {
            dateWarning.innerHTML="*Date Required"
            return
        }else if (distance < 0){
            dateWarning.innerHTML="*Input a correct date"
            return
        }

        if (time.value===''){
            timeWarning.innerHTML='*Time required'
            return 
        }
        addTask(array, title.value, description.value, priority.value, date.value, time.value, '');
        clear()
        doneTask(array)
    })
    
};

// this function clear all the value from divs
export function clear() {
    const title = document.getElementById("title");
    const description = document.getElementById('description');
    const priority = document.getElementById('priority');
    const date = document.getElementById('date');
    const time = document.getElementById('time');
    const add = document.getElementById('addBtn');
    const dateWarning=document.getElementById("date-warning")
    const nameWarning=document.getElementById('input-warning')
    const timeWarning=document.getElementById('time-warning')
    title.value = ''
    description.value = ''
    time.value = ''
    date.value = ''
    priority.value = "medium"
    nameWarning.innerHTML=''
    timeWarning.innerHTML=''
    dateWarning.innerHTML=''
    popUp.classList.remove("open")
}


function cancelBtn(){
    const cancelBtn=document.getElementById('cancelBtn')
    cancelBtn.addEventListener('click', (e)=>{
        e.preventDefault()
        clear()
    })
}


export {info}