module.exports = {
    getListOfDays: (year, month) => {
        //var currentMonth = month-1
        var date = new Date(year, month, 1)
        var days = []

        while(date.getMonth() === month){
            days.push(new Date(date))
            date.setDate(date.getDate() +1)
        }
    return days
    },
    format: (date) => {
        var day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
        var month = date.getMonth() < 10 ? `0${date.getMonth()+1}` : date.getMonth()
        return `${day}/${month}/${date.getFullYear()}`
    },
    getWeekDay: day =>{
        var days = ['domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sábado']
        return days[day]
    },
    isWorkingDay: (date) => {
        return date.getDay() != 6 && date.getDay() != 0 ? true : false
    }
}