import { doneTask } from "./done";
export default function time(array){
    let inbox=[]
    const today=new Date();
    array.forEach(element => {
        let newDate=new Date(element.date)
        if (newDate<today){
            inbox.push(element)
        }
    });
    doneTask(inbox)

}