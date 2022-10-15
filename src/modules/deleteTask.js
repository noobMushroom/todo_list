import showTask from "./showTask";

// this function creates the delete button
function delBtn(div, task, array) {
    const delBtn = document.createElement('button');
    delBtn.classList.add("delBtn", "fa-solid", "fa-trash", "fa-1x");
    div.appendChild(delBtn);
    delBtn.addEventListener('click', () => {
        deleteTask(task, array)
    })

}

// this function delete task from the array.

function deleteTask(task, array) {
    const index = array.indexOf(task);
    if (index > -1) {
        array.splice(index, 1);
    }
    showTask.displayTask(array);
    localStorage.setItem("array", JSON.stringify(array));

}

export { delBtn }