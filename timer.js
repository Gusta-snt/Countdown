const dateLaunch = new Date('19 aug 2023, 11:00:00'); //Write the date of launch here
const currentDate = new Date();
const currentDateMill = currentDate.getTime();
const dateLaunchMill = dateLaunch.getTime();
const Variation = dateLaunchMill - currentDateMill; //variation of today and the day of launch

const $htmlDays = document.getElementById("days");
const $htmlHr = document.getElementById("hr");
const $htmlMin = document.getElementById("min");
const $htmlSec = document.getElementById("sec");

let time = (Variation - Variation % 1000) / 1000; //converting milliseconds to seconds


setInterval(function(){
    
    //calculating time
    let sec = time % 60 ;
    let min = (time-sec)/60;
    let hr = (min-min%60) / 60;
    let days = (hr-hr%24)/24;

    min = min - hr * 60;
    hr = hr - days * 24;

    //formating values to clock values
    if (sec<10){
        sec = `0${sec}`
    }
    if (min<10){
        min = `0${min}`
    }
    if (hr<10){
        hr = `0${hr}`
    }
    if (days<10){
        days = `0${days}`
    }

    //displaying infos
    $htmlDays.textContent = days;
    $htmlHr.textContent = hr;
    $htmlMin.textContent = min;
    $htmlSec.textContent = sec;
    
    //verifying if date has come
    if (time > 0){
        time--;
    }
    

},1000)

