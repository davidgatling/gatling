function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var time = document.getElementById('time');

    if(hrs >= 12){
        time.innerHTML = 'PM'
    }
    else{
        time.innerHTML = 'AM'
    }
    if(hrs > 12){
        hrs = hrs - 12
    }
    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('mins').innerHTML = min;
    document.getElementById('secs').innerHTML = sec;
}
setInterval(displayTime, 10);