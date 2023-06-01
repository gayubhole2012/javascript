//it stores and date,time and provides methods date/time management

let now = new Date();
console.log(now);

function getWeekDay(date){
    let days = ['SU','MO','TU','WE','TH','FR','SA'];
    return days[date.getDay()];
}
let date = new Date(2014,0,3);
console.log(getWeekDay(date));