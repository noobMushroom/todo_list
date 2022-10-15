import showTask from "./showTask";

export default function time(array){
    let inbox=[]
    const today=new Date();
    const time=`${today.getHours()}:${today.getMinutes()}`
    console.log (time)

    array.forEach(element => {
        console.log(element.time)
        if (element.time<=time){
            inbox.push(element)
        }
    });
    showTask.displayTask(inbox)

}