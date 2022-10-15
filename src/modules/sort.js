import showTask from "./showTask";

export default function sort(array) {
    let veryImportant = []
    let important=[]
    let unimportant=[]
    let medium=[]
    let daily=[]


    array.forEach(element => {
        if (element.priority==='unimportant'){
            unimportant.push(element)
        }else if(element.priority==='medium'){
            medium.push(element)
        }else if (element.priority==='super-important'){
            veryImportant.push(element)
        }else if(element.priority==='daily'){
            daily.push(element)
        }else if (element.priority==="important"){
            important.push(element)
        }
    });

    const sortedArray=veryImportant.concat(important).concat(medium).concat(unimportant).concat(daily);

    showTask.displayTask(sortedArray);
}