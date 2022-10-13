import _ from 'lodash';
import { formatDistance, nextWednesday, subDays, Interval, getDate, addDays } from 'date-fns'
import "../style/style.scss";
import info from './add.js'
import { checkDoneTask } from './done.js'
import { week, today } from './date';
import showTask from './showTask';
import { folders } from './folders';

function main() {
    let folderArray = []
    let tasks = []
    styles(tasks)
    display(tasks, folderArray)

}
export function createAddBtn(array) {
    const mainDiv = document.querySelector(".top-sidebar");
    mainDiv.innerHTML = ''
    const btn = document.createElement('button');
    btn.setAttribute('id', 'popUpBtn');
    btn.classList.add('head__addBtn')
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M22.65 34h3v-8.3H34v-3h-8.35V14h-3v8.7H14v3h8.65ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 23.95q0-4.1 1.575-7.75 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24.05 4q4.1 0 7.75 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm.05-3q7.05 0 12-4.975T41 23.95q0-7.05-4.95-12T24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24.05 41ZM24 24Z"/></svg>`
    const addTaskText = document.createElement('div');
    addTaskText.classList.add("sidebar__hidden-sidebar")
    addTaskText.innerHTML = 'ADD TASK'
    mainDiv.appendChild(btn)
    mainDiv.appendChild(addTaskText)
    styles(array)
}

const styles = (array) => {
    const popupBtn = document.getElementById("popUpBtn");
    const popUp = document.getElementById("popUp");
    popupBtn.addEventListener('click', () => {
        info.addBtn(array)
        popUp.classList.add("open")
    })
}
main()


//todo put it in a function.
const menuIconButton = document.querySelector("[data-menu-icon-btn]")
const sidebar = document.querySelector("[data-sidebar]")

menuIconButton.addEventListener("click", () => {
    sidebar.classList.toggle("open-sidebar")
})




function display(tasks, foldersArray) {
    const buttons = document.querySelectorAll('.list_btns');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(button => button.classList.remove('active'))
            button.classList.add('active')
            createAddBtn(tasks)
            if (button.name === 'completed') {
                checkDoneTask(tasks)
            } else if (button.name === 'week') {
                week(tasks)
            } else if (button.name === 'today') {
                today(tasks)
            } else if (button.name === 'home') {
                showTask.displayTask(tasks)
            } else if (button.name === 'folder') {
                folders(foldersArray)
            }
        })
    })
}

