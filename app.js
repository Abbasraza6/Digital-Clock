var hrs_span = document.getElementById("hrs_span");
var mins_span = document.getElementById("mins_span");
var secs_span = document.getElementById("secs_span");
var ampm_span = document.getElementById("ampm_span");

function digitalClockHandle (){

    var currentDate = new Date()
    var hours = currentDate.getHours();
    var am_pm = '';
    if(hours == 0){
        am_pm = 'am';
        hours = 12;

    }
    else if(hours >=1 && hours <=11){
        am_pm = 'am';
    }

    else if(hours == 12){
        am_pm = 'pm';
    }
    else{
        am_pm = 'pm';
        hours -= 12;
    }

    hrs_span.innerText = hours;
    mins_span.innerText = currentDate.getMinutes() + 1;
    secs_span.innerText = currentDate.getSeconds() + 1;
    ampm_span.innerText = am_pm;

}
    setInterval(digitalClockHandle, 1000);