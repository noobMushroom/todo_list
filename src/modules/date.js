//  this function will calculate day and time how many and days are left to someone to finish their task

//? i don't know how to do it 

import { format } from 'date-fns';

function dateCalc (task){
    const {format} = require('date-fns');
    //today's date
    const today =format(new Date(),'dd.MM.yyyy');
    console.log(today)

    if (today>= task.date){
        console.log("you are over due")
    }

}

export default dateCalc()
