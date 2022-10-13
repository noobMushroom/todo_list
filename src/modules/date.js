// this week

import { differenceInDays, compareAsc, compareDesc, subDays, startOfWeek, endOfWeek, isAfter, isBefore } from "date-fns"
import { differenceInCalendarDays } from "date-fns/fp"
import { difference } from "lodash"
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
    // showTask.displayTask(thisWeek)
    sortArray(thisWeek)

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


//todo array .map()
function sortArray(arr){
    const sortedDates=arr.sort(compareAsc);
    arr.forEach(task=>{
        task.date
    })

    showTask.displayTask(sortedDates)
}
export { today , week}