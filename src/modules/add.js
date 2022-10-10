import showTask from "./showTask"

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
        const popUp=document.getElementById("popUp");
        const title = document.getElementById("title");
        const description = document.getElementById('description');
        const priority = document.getElementById('priority');
        const date = document.getElementById('date');
        const time = document.getElementById('time');
        const addBtn = () => {
            const add = document.getElementById('addBtn');
            add.addEventListener("click", () => {
                console.log("i am clicked from the add.js")
                if (title.value === '') {
                    return
                }
                addTask(array, title.value, description.value, priority.value, date.value, time.value);
                title.value = ''
                description.value = ''
                time.value = ''
                date.value = ''
                priority.value = "default"
                popUp.classList.remove("open")
            })

        }
        return addBtn()
    };

    function addTask(array, ...title) {
        console.log('working')
        let newTask = createTask(...title)
        array.push(newTask)
        showTask.displayTask(array)
    }

    return { info }
};


export default task()

