// this week

import { startOfWeek, endOfWeek, isAfter, isBefore } from "date-fns"
import { differenceInCalendarDays } from "date-fns/fp"
import { doneTask } from "./done"
import showTask from "./showTask"


function week(arr) {
    let thisWeek = []
    const today = new Date()
    const startweek= startOfWeek(today)
    const endWeek=endOfWeek(today)
    arr.forEach(task => {
        let newDate = new Date(task.date);
        if (isAfter(newDate, startweek) && isBefore(newDate, endWeek)) {
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
        const distance = differenceInCalendarDays(newDate, today);
        if (distance === 0) {
            todayArray.push(task)
        }
    })
    showTask.displayTask(todayArray)
}

export { today , week}