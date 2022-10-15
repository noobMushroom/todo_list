import showTask from "./showTask";

export default function search(array){
    const searchDiv=document.getElementById("searchBar")
    const searchBtn=document.getElementById('searchBtn')

    searchBtn.addEventListener('click', ()=>{
        searchHandle(searchDiv.value, array);
        searchDiv.value=''
    })
}

function searchHandle(value, array){
    const mainDiv=document.getElementById('tasks')
    const msg=document.createElement('div')
    msg.classList.add('msg')
    
    let searched=[]
    array.forEach(element=>{
        if (element.title===value){
            searched.push(element);
        }
    })

    if (searched.length!=0){
        showTask.displayTask(searched);
    }else{
        mainDiv.innerHTML=''
        mainDiv.appendChild(msg)
        msg.innerHTML='NO TASK FOUND'
    }
}