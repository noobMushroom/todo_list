// this week

import { addDays, differenceInDays, formatDistance, subDays } from "date-fns"
import showTask from "./showTask"


function week(arr) {
    let thisWeek = []
    const today = new Date()
    arr.forEach(task => {
        let newDate = new Date(task.date);
        const distance = differenceInDays(newDate, today);
        if (distance >= 0 && distance <= 7) {
            thisWeek.push(task)
        }

    })
    showTask.displayTask(thisWeek)

}


function today(arr) {
    let todayArray = []
    const today = new Date()
    arr.forEach(task => {
        let newDate = new Date(task.date);
        const distance = differenceInDays(newDate, today);
        if (distance === 0) {
            todayArray.push(task)
        }
    })
    showTask.displayTask(todayArray)
}


export { today , week}