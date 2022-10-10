import _ from 'lodash';
import { formatDistance, nextWednesday, subDays , Interval} from 'date-fns'

import "../style/style.scss";
import info from './add.js'


function main(){
    let tasks=[]
    styles(tasks)
      
}

const styles=(array)=>{
    const popupBtn=document.getElementById("popUpBtn");
    const popUp=document.getElementById("popUp");
    popupBtn.addEventListener('click',()=>{
        console.log(popUp)
        info.addBtn(array)
        popUp.classList.add("open")
    })
}

main()