import { deleteTask } from "./deleteTask";
import showTask from "./showTask";

// it's a simple function it created done button and listen to event and send them to delete function.

function doneBtn(div, task, array) {
    const btn = document.createElement('button');
    btn.classList.add("doneBtn", "fa-sharp", "fa-solid", "fa-circle-check")
    div.appendChild(btn);
    btn.addEventListener('click', () => {
        task.task='done';
    })
}


function checkDoneTask(arr){
    let doneTask= arr.filter(task=>task.task=='done');
    console.log(arr)
    console.log(doneTask)
    showTask.displayTask(doneTask)
}

export default doneBtn
export {checkDoneTask}