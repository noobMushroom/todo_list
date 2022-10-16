import { doneTask } from "./done";
export default function time(array){
    let inbox=[]
    const today=new Date();
    const time=`${today.getHours()}:${today.getMinutes()}`

    array.forEach(element => {
        if (element.time<=time){
            inbox.push(element)
        }
    });
    doneTask(inbox)

}