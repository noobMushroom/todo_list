import _ from 'lodash';
import { formatDistance, nextWednesday, subDays , Interval} from 'date-fns'

import "../style/style.scss";
import task from './add.js'


function main(){
    let tasks=[]
    styles(tasks)
      
}

const styles=(array)=>{
    const popupBtn=document.getElementById("popUpBtn");
    const popUp=document.getElementById("popUp");
    popupBtn.addEventListener('click',()=>{
        console.log(popUp)
        task.info(array)
        popUp.classList.add("open")
    })
}

main()