const random = require('random-number')
const dateUtils = require('./utils/dateUtils')

module.exports = data => {
    const date = new Date()
    const daysOfMonth = dateUtils.getListOfDays(date.getFullYear(), data.month)
    var responseData = []
    var minuteRange = {
        min: 00,
        max: 45,
        integer: true
    }

    var lunchRange = {
        min: 12,
        max: 13,
        integer: true
    }

    daysOfMonth.forEach(element => {
        if(dateUtils.isWorkingDay(element)){
            var minutesIn = random(minuteRange) 
            var minutesLunchIn = random(minuteRange) 
            var strMinutesIn = minutesIn < 10 ? '0'+minutesIn : minutesIn
            var strMinutesLunchIn = minutesLunchIn < 10 ? '0'+minutesLunchIn : minutesLunchIn

            var lunchIn = random(lunchRange)

            responseData.push({
                monthDay: dateUtils.format(element),
                weekDay: dateUtils.getWeekDay(element.getDay()),
                inTime: `${data.in}:${strMinutesIn}`,
                lunchIn: `${lunchIn}:${strMinutesLunchIn}`,
                lunchOut: `${lunchIn+1}:${strMinutesLunchIn}`,
                outTime: `${parseInt(data.in)+9}:${strMinutesIn}`
            })
        }
    })

    return responseData
}