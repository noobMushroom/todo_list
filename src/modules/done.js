import showTask from "./showTask";

// it's a simple function it created done button and listen to event and send them to delete function.

function doneBtn(div, task, array, mainDiv) {
    const btn = document.createElement('button');
    btn.classList.add("doneBtn", "fa-sharp", "fa-solid", "fa-circle-check")
    div.appendChild(btn);
    btn.addEventListener('click', () => {
        if (task.done===""){
            task.done='done';
            mainDiv.style.background="#a9c0cb"
            showTask.displayTask(array)
        }else if (task.done==='done'){
            task.done=''
            showTask.displayTask(array)
        }
    })
    localStorage.setItem("array", JSON.stringify(array));

}


function checkDoneTask(arr){
    let doneTask= arr.filter(task=>task.done=='done');
    showTask.displayTask(doneTask)
    localStorage.setItem("array", JSON.stringify(arr));
}

function doneTask(array){
    let newArr=array.filter(task=>task.done=='');
    showTask.displayTask(newArr)
    localStorage.setItem("array", JSON.stringify(array));
}

export default doneBtn
export {checkDoneTask, doneTask}