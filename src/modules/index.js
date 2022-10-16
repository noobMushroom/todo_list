import _ from 'lodash';
import "../style/style.scss";
import { info } from './add.js'
import { checkDoneTask, doneTask } from './done.js'
import { week, today } from './date';
import time from './time';
import sort from './sort';
import search from './search';

function main() {
    let tasks = JSON.parse(localStorage.getItem("array")) || [];
    doneTask(tasks)
    styles(tasks)
    display(tasks)
    menu()
    search(tasks)
}

const styles = (array) => {
    const popupBtn = document.getElementById("popUpBtn");
    const popUp = document.getElementById("popUp");
    popupBtn.addEventListener('click', () => {
        home()
        info(array)
        popUp.classList.add("open")
    })

}
function home() {
    const buttons = document.querySelectorAll('.list_btns');
    buttons.forEach(button => button.classList.remove('active'))
    const home = document.getElementById('home')
    home.classList.add('active')
}

main()


function menu() {
    const menuIconButton = document.querySelector("[data-menu-icon-btn]")
    const sidebar = document.querySelector("[data-sidebar]")
    menuIconButton.addEventListener("click", () => {
        sidebar.classList.toggle("open-sidebar")
    })
}

function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
function startTime() {
    setTimeout(startTime, 500)
    let today = new Date(),
        h = today.getHours(),
        m = today.getMinutes(),
        s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    let clock = document.getElementById('clock')
    clock.innerHTML = h + ":" + m + ":" + s;
}
startTime()

function date() {
    setTimeout(date, 500)
    const calender = document.getElementById('calender')
    const { format } = require('date-fns');
    const today = format(new Date(), 'do  MMMM yyyy');
    calender.innerHTML = today
}
date()

function display(tasks) {
    const buttons = document.querySelectorAll('.list_btns');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(button => button.classList.remove('active'))
            button.classList.add('active')
            if (button.name === 'completed') {
                checkDoneTask(tasks)
            } else if (button.name === 'week') {
                week(tasks)
            } else if (button.name === 'today') {
                today(tasks)
            } else if (button.name === 'home') {
                doneTask(tasks)
            } else if (button.name === 'inbox') {
                time(tasks)
            } else if (button.name === 'important') {
                sort(tasks)
            }
        })
    })
}
