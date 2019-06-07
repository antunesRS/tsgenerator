module.exports = {
    getListOfDays: (year, month) => {
        //var currentMonth = month-1
        var date = new Date(year, month-1, 1)
        var days = []

        while(date.getMonth() === month-1){
            days.push(new Date(date))
            date.setDate(date.getDate() +1)
        }
    return days
    },
    format: (date) => {
        var day = date.getDate()
        var strDay = day < 10 ? `0${day}`: day
        var month = date.getMonth()+1 
        var strMonth = month < 10 ? `0${month}` : month
        return `${strDay}/${strMonth}/${date.getFullYear()}`
    },
    getWeekDay: day =>{
        var days = ['domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sábado']
        return days[day]
    },
    isWorkingDay: (date) => {
        return date.getDay() != 6 && date.getDay() != 0 ? true : false
    }
}