import showTask from "./showTask"


// this function creates object

function createTask(title, description, priority, date, time) {
    let task = {}
    task.title = title
    task.description = description
    task.priority = priority
    task.date = date
    task.time = time
    return task;
}

// this function push object to the main array

function addTask(array, ...title) {
    let newTask = createTask(...title)
    array.push(newTask)
}


// this function grabs the value from the divs and send them to add task and show task to add on the array and display the array
function info() {
    const title = document.getElementById("title");
    const description = document.getElementById('description');
    const priority = document.getElementById('priority');
    const date = document.getElementById('date');
    const time = document.getElementById('time');
    const addBtn = (array) => {
        const add = document.getElementById('addBtn');
        add.addEventListener("click", () => {
            if (title.value === '') {
                return
            }
            addTask(array, title.value, description.value, priority.value, date.value, time.value);
            clear(title, description, priority, date, time)
            showTask.displayTask(array)
        })

    }
    return {addBtn}
};

// this function clear all the value from divs
export function clear(...args) {
    title.value = ''
    description.value = ''
    time.value = ''
    date.value = ''
    priority.value = "important"
    popUp.classList.remove("open")
}


export default info()

