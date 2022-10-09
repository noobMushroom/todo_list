import showTask from "./showTask";

function delBtn() {
    function createDeleteBtn(div, task, array) {
        const delBtn = document.createElement('button');
        delBtn.classList.add('task__delBtn');
        div.appendChild(delBtn);
        delBtn.innerHTML = 'DELETE';
        delBtn.addEventListener('click', () => {
            deleteTask(task, array)
        })
    }
    return { createDeleteBtn }
}

function deleteTask(task, array) {
    const index = array.indexOf(task);
    if (index > -1) {
        array.splice(index, 1);
    }
    showTask.displayTask(array);
}

export default delBtn()
export {deleteTask}