const random = require('random-number')
const dateUtils = require('./utils/dateUtils')

module.exports = data => {
    const date = new Date()
    const daysOfMonth = dateUtils.getListOfDays(date.getFullYear(), date.getMonth())
    var responseData = []
    var range = {
        min: 00,
        max: 45,
        integer: true
    }

    daysOfMonth.forEach(element => {
        if(dateUtils.isWorkingDay(element)){
            var minutesIn = random(range) 
            var minutesLunchIn = random(range) 
            var strMinutesIn = minutesIn < 10 ? '0'+minutesIn : minutesIn
            var strMinutesLunchIn = minutesLunchIn < 10 ? '0'+minutesLunchIn : minutesLunchIn

            responseData.push({
                monthDay: dateUtils.format(element),
                weekDay: dateUtils.getWeekDay(element.getDay()),
                inTime: `${data.in}:${strMinutesIn}`,
                lunchIn: `${data.lunchIn}:${strMinutesLunchIn}`,
                lunchOut: `${data.lunchOut}:${strMinutesLunchIn}`,
                outTime: `${data.out}:${strMinutesIn}`
            })
        }
    })

    return responseData
}