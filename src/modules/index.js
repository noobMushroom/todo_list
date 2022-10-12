import _ from 'lodash';
import { formatDistance, nextWednesday, subDays, Interval, getDate, addDays } from 'date-fns'


import "../style/style.scss";
import info from './add.js'


import { checkDoneTask } from './done.js'
import {week, today } from './date';
import showTask from './showTask';

import {folders} from './folders';

function main() {
    let folderArray=[]
    let tasks = []
    styles(tasks)
    display(tasks, folderArray)

}

const styles = (array) => {
    const popupBtn = document.getElementById("popUpBtn");
    const popUp = document.getElementById("popUp");
    popupBtn.addEventListener('click', () => {
        info.addBtn(array)
        popUp.classList.add("open")
    })
}


const menuIconButton = document.querySelector("[data-menu-icon-btn]")
const sidebar = document.querySelector("[data-sidebar]")

menuIconButton.addEventListener("click", () => {
    sidebar.classList.toggle("open-sidebar")
})

main()


function display(arr, foldersArray) {
    const buttons = document.querySelectorAll('.list_btns');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(button => button.classList.remove('active'))
            button.classList.add('active')
            if (button.name === 'completed') {
                checkDoneTask(arr)
            } else if (button.name === 'week') {
                week(arr)
            } else if (button.name === 'today') {
                today(arr)
            }else if(button.name==='home'){
                showTask.displayTask(arr)
            }else if(button.name==='folder'){
               folders(foldersArray)
            }
        })
    })
}

