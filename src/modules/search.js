import showTask from "./showTask";

export default function search(array) {
    const searchDiv = document.getElementById("searchBar")
    const searchBtn = document.getElementById('searchBtn')

    searchBtn.addEventListener('click', () => {
        if(searchDiv.value===''){return}
        searchHandle(searchDiv.value, array);
        searchDiv.value = ''
    })
}

function searchHandle(value, array) {
    const mainDiv = document.getElementById('tasks')
    let search=array.filter(task=>task.title===value)
    if (search.length != 0) {
        showTask.displayTask(search);
    } else {
        mainDiv.innerHTML = 'No task found'
    }
}