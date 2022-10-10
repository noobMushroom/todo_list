import showTask from "./showTask"


// this function creates the task and then push it in the array and call the functions to show it in the display
function task() {
    function createTask(title, description, priority, date, time) {
        let task = {}
        task.title = title
        task.description = description
        task.priority = priority
        task.date = date
        task.time = time
        return task;
    }

    function info(array) {
        const title = document.getElementById("title");
        const description = document.getElementById('description');
        const priority = document.getElementById('priority');
        const date = document.getElementById('date');
        const time = document.getElementById('time');
        const addBtn = () => {
            const add = document.getElementById('addBtn');
            add.addEventListener("click", () => {
                if (title.value === '') {
                    return
                }
                addTask(array, title.value, description.value, priority.value, date.value, time.value);
                clear (title, description , priority, date, time)
                showTask.displayTask(array)
            })
            
        }
        return addBtn()
    };
    
    function addTask(array, ...title) {
        let newTask = createTask(...title)
        array.push(newTask)
    }

    return { info }
};


export function clear(...args) {
    title.value = ''
    description.value = ''
    time.value = ''
    date.value = ''
    priority.value = "important"
    popUp.classList.remove("open")
}


export default task()

