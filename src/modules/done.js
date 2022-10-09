import { deleteTask } from "./deleteTask";

function doneBtn(div, task , array){
    const btn=document.createElement('button');
    btn.innerHTML='DONE';
    div.appendChild(btn);
    btn.addEventListener('click', ()=>{
        deleteTask(task, array)
    })
}

export default doneBtn