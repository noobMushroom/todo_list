import _ from 'lodash';
import { formatDistance, nextWednesday, subDays , Interval} from 'date-fns'

import "../style/style.scss";
import task from './add.js'

function main(){
    let tasks=[]
    task.info(tasks)  
}

const styles=()=>{
    const popupBtn=document.getElementById("popUpBtn");
    const popUp=document.getElementById("popUp");
    popupBtn.addEventListener('click',()=>{
        console.log(popUp)
        popUp.classList.add("open")
    })
}
styles()
main()