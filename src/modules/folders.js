import delBtn from "./deleteTask";
import editBtn from "./editTask";

import showTask from "./showTask";
import info from './add.js'
import { createAddBtn } from ".";

function folders(folders) {
    createAddFolderBtn()
    addFolderBtn(folders)
    displayFolder(folders)
}

// this function is creating add folder button
function createAddFolderBtn() {
    const mainDiv = document.querySelector(".top-sidebar");
    mainDiv.innerHTML = ''
    const addFolderBtn = document.createElement('button');
    addFolderBtn.classList.add("head__addBtn");
    addFolderBtn.setAttribute('id', "popupFolderBtn");
    addFolderBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M28.5 32h3v-4.5H36v-3h-4.5V20h-3v4.5H24v3h4.5ZM7.05 40q-1.2 0-2.1-.925-.9-.925-.9-2.075V11q0-1.15.9-2.075Q5.85 8 7.05 8h14l3 3h17q1.15 0 2.075.925.925.925.925 2.075v23q0 1.15-.925 2.075Q42.2 40 41.05 40Zm0-29v26h34V14H22.8l-3-3H7.05Zm0 0v26Z"/></svg>`
    const addFolderText = document.createElement('div');
    addFolderText.classList.add("sidebar__hidden-sidebar")
    addFolderText.innerHTML = 'ADD FOLDER'
    mainDiv.appendChild(addFolderBtn)
    mainDiv.appendChild(addFolderText)
}

// this is the button inside folder pop and when it click it calls handle to grab the information and push it in the array
function addFolderBtn(array) {
    const folderPopupBtn = document.getElementById('popupFolderBtn')
    const folderPopup = document.getElementById('folder-popup')
    folderPopupBtn.addEventListener('click', () => {
        handle(array)
        folderPopup.classList.add('open-folder');
    })
}

// this function grab the value and then push them into the folders array
function handle(folders) {
    const folderPopup = document.getElementById('folder-popup')
    const arrayName = document.getElementById("folder-title")
    const arrayDescription = document.getElementById("folder-description")
    const addFolder = document.getElementById("addFolderBtn")
    addFolder.addEventListener('click', () => {

        if (arrayName.value === '') {
            return
        }
        let newFolder = new CreateFolder(arrayName.value, arrayDescription.value, [])
        folders.push(newFolder);
        displayFolder(folders)
        arrayName.value = ''
        arrayDescription.value = ''
        folderPopup.classList.remove("open-folder")
    })
}

// this function creates folders
class CreateFolder {
    constructor(title, description, array) {
        this.title = title
        this.description = description
        this.array = array;
    }
}

// this takes an array and then display it in the display
function displayFolder(arr) {
    const mainDiv = document.getElementById('tasks')
    mainDiv.innerHTML = ''
    arr.forEach(folder => {
        const folderDiv = document.createElement('div');
        folderDiv.classList.add('folderCardDiv');
        mainDiv.appendChild(folderDiv)

        const folderBtn = document.createElement('div');
        folderBtn.classList.add('folder__btn')
        folderDiv.appendChild(folderBtn)

        folderDiv.appendChild(createFolderDiv(folder, folder.title, folder.description))

        editBtn.createEditBtn(folderBtn, folder, arr)
        delBtn.createDeleteBtn(folderBtn, folder, arr);

        folderDiv.addEventListener('click', () => {
            handleFolder(folder)
        })
    })
}

// this function creates important divs to show folders in the display
function createFolderDiv(arr, title, description) {
    const folderInfo = document.createElement('div')


    const titleDiv = document.createElement('div');
    titleDiv.classList.add('folder_name_div');


    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('folder_description_div')

    const numberOfTask = document.createElement('div');
    numberOfTask.classList.add("numberOfTask")

    folderInfo.appendChild(titleDiv);
    folderInfo.appendChild(descriptionDiv);
    folderInfo.appendChild(numberOfTask)

    titleDiv.innerHTML = `<h1>${title}</h1>`
    descriptionDiv.innerHTML = description
    numberOfTask.innerHTML = `Number of Task: ${arr}`

    return folderInfo

}

// when click on any folder it will call show task to display the array inside it 
function handleFolder(folder) {
    showTask.displayTask(folder.array)
    createAddBtn() //creating add button again to add task inside the folder
    addTask(folder)
}

// this call show info which push things in the array which we give from here. 
function addTask(folder) {
    const popUp = document.getElementById("popUp");
    const addBtn = document.getElementById("popUpBtn");
    addBtn.addEventListener('click', () => {
        popUp.classList.add("open")
        info.addBtn(folder.array)
    })
}

// export { displayFolder, addFolderBtn, createAddFolderBtn}
export { folders }