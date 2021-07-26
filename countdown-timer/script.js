// setting minimum value for date to current date //
var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();

if (day < 10) {
    day = "0" + day;
}

if (month < 10) {
    month = "0" + month;
}

var min = year + "-" + month + "-" + day;
document.getElementById("date-picker").setAttribute('min', min);
// end //

// storing date value user picked and putting in correct format //
function continuous() {
    var dateFromUser = document.getElementById("date-picker").value;

    var monthArr = ["Jan", "Feb", "Mar", "Apr", "May",
                    "Jun", "Jul", "Aug", "Sep", "Oct",
                    "Nov", "Dec"];
    
    var firstDay = dateFromUser.substring(8, 10);
    var secondMonth = dateFromUser.substring(5, 7);

    // logic to remove '0' if at start of string (indexing issues if not) //
    if (secondMonth.substring(0, 1) === '0') {
        secondMonth = secondMonth.substring(1, 2);
    }

    secondMonth = monthArr[secondMonth - 1];
    var thirdYear = dateFromUser.substring(0, 4);
    
    var actualDate = firstDay + " " + secondMonth + " " + thirdYear;

    const futureDate = new Date(actualDate);
    const currentDate = new Date();

    const totalSeconds = new Date(futureDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    document.getElementById('days').innerHTML = formatTime(days); 
    document.getElementById('hours').innerHTML = formatTime(hours); 
    document.getElementById('mins').innerHTML = formatTime(mins); 
    document.getElementById('seconds').innerHTML = formatTime(seconds); 
}
// end //

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

continuous();

setInterval(continuous, 1000);