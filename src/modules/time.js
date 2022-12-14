import { doneTask } from "./done";
import { differenceInCalendarDays } from "date-fns/fp"
export default function time(array){
    let inbox=[]
    const today=new Date();
    const time=`${today.getHours()}:${today.getMinutes()}`
    let todayArray=[]
    array.forEach(task => {
        let newDate = new Date(task.date);
        console.log(newDate)   
        const distance = differenceInCalendarDays(newDate, today);
        console.log(distance)
        if (distance >= 0) {
            todayArray.push(task)
        }
    })

    todayArray.forEach(element => {
        if (element.time<=time){
            inbox.push(element)
        }
    });
    doneTask(inbox)

}

