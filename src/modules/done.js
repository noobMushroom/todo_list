import { deleteTask } from "./deleteTask";


// it's a simple function it created done button and listen to event and send them to delete function.

function doneBtn(div, task, array) {
    const btn = document.createElement('button');
    btn.classList.add("doneBtn", "fa-sharp", "fa-solid", "fa-circle-check")
    div.appendChild(btn);
    btn.addEventListener('click', () => {
        deleteTask(task, array)
    })
}

export default doneBtn