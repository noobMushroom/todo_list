import showTask from "./showTask";
import { displayFolder } from "./folders";

// this function creates the delete button
function delBtn(div, task, array, folders) {
    const delBtn = document.createElement('button');
    delBtn.classList.add("delBtn", "fa-solid", "fa-trash", "fa-1x");
    div.appendChild(delBtn);
    delBtn.addEventListener('click', () => {
        deleteTask(task, array, folders)
    })

}

// this function delete task from the array.

function deleteTask(task, array, folders) {
    const index = array.indexOf(task);
    if (index > -1) {
        array.splice(index, 1);
    }
    if (folders == 'folder') {
        displayFolder(array)
    } else if(folders =='task') {
        showTask.displayTask(array);
    }
}

export { delBtn }