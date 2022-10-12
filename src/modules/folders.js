import delBtn from "./deleteTask";
import editBtn from "./editTask";

import showTask from "./showTask";
import info from './add.js'



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
        let newFolder = new createFolder(arrayName.value, arrayDescription.value, [])
        folders.push(newFolder);
        displayFolder(folders)
        arrayName.value = ''
        arrayDescription.value = ''
        folderPopup.classList.remove("open-folder")
    })
}


// this function creates folders
function createFolder(title, description,array) {
    this.title=title
    this.description=description
    this.array=array;
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

        folderDiv.appendChild(createFolderDiv(arr, folder.title, folder.description))

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
    numberOfTask.innerHTML = `Number of Task: ${arr.length}`

    return folderInfo

}

// when click on any folder it will call show task to display the array inside it 

function handleFolder(folder) {
    showTask.displayTask(folder.array)
    createAddTaskBtn()
    addTask(folder)

}

// when user will click on any folder add folder button will be gone and normal add button will come back
function createAddTaskBtn() {
    const mainDiv = document.querySelector(".top-sidebar");
    mainDiv.innerHTML = ''
    const btn = document.createElement('button');
    btn.classList.add('head__addBtn')
    btn.setAttribute('id', 'addFolderTaskBtn');
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M22.65 34h3v-8.3H34v-3h-8.35V14h-3v8.7H14v3h8.65ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 23.95q0-4.1 1.575-7.75 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24.05 4q4.1 0 7.75 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm.05-3q7.05 0 12-4.975T41 23.95q0-7.05-4.95-12T24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24.05 41ZM24 24Z"/></svg>`
    const addTaskText = document.createElement('div');
    addTaskText.classList.add("sidebar__hidden-sidebar")
    addTaskText.innerHTML = 'ADD TASK'
    mainDiv.appendChild(btn)
    mainDiv.appendChild(addTaskText)
}

// this call show info which push things in the array which we give from here. 
function addTask(folder) {
    const popUp = document.getElementById("popUp");
    const addBtn = document.getElementById("addFolderTaskBtn");
    addBtn.addEventListener('click', () => {
        popUp.classList.add("open")
        console.log("this is from ", folder)
        info.addBtn(folder.array)
    })
}

// export { displayFolder, addFolderBtn, createAddFolderBtn}
export { folders ,createAddFolderBtn}