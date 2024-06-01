window.onload = function () {

    var hour = 0;
    var minute = 0;
    var centiSecond = 0;
    var second = 0;
    var Interval;

    var hourElement = document.getElementById("hour");
    var minuteElement = document.getElementById("minute");
    var secondElement = document.getElementById("second");
    var centiSecondElement = document.getElementById("centisecond");
    var timeElement = document.getElementById("time");

    var timeList = document.getElementById("time_list");

    var bStart = document.getElementById("start");
	var bStop = document.getElementById("stop");
	var bReset= document.getElementById("reset");
    var running = false;

    bStart.onclick = function() {
    	clearInterval(Interval);
        running = true;
        timeElement.style.border = "3px solid #40916c";
    	Interval = setInterval(timer, 10);
    }

    bStop.onclick = function() {
        if (running) {
            running = false;
            timeElement.style.border = "3px solid #c9184a";
            var innerContent = "<li>" + hour + " : "  + minute + " : " + second + " : " + centiSecond + "</li>";
            timeList.insertAdjacentHTML("afterbegin", innerContent);
            clearInterval(Interval);
        }
    	clearInterval(Interval);
    }

    bReset.onclick = function() {
        timeElement.style.border = "3px solid #0077b6";
    	clearInterval(Interval);
        running = false;
        hour = "00"
    	minute = "00";
        second = "00";
    	centiSecond = "00";
        hourElement.innerHTML = hour;
        minuteElement.innerHTML = minute;
        secondElement.innerHTML = second;
        centiSecondElement.innerHTML = centiSecond;
        timeList.innerHTML = "";
    }

    function timer() {
        centiSecond++;
        if (centiSecond <= 9) {
            centiSecondElement.innerHTML = "0" + centiSecond;
        }
        if (centiSecond > 9) {
            centiSecondElement.innerHTML = centiSecond;
        }
        if (centiSecond > 99) {
            second++;
            secondElement.innerHTML = "0" + second;
            centiSecond = 0;
            centiSecondElement.innerHTML = "0" + 0;
        }

        if (second > 9) {
            secondElement.innerHTML = second;
        }

        if (second > 59) {
            minute++;
            minuteElement.innerHTML = "0" + minute;
            second = 0;
            secondElement.innerHTML = "0" + 0;
        }
        if (minute > 9) {
            minuteElement.innerHTML = minute;
        }

        if (minute > 9) {
            minuteElement.innerHTML = minute;
        }
        if (minute > 59) {
            hour++;
            hourElement.innerHTML = "0" + hour;
            minute = 0;
            minuteElement.innerHTML = "0" + 0;
        }
        if (hour > 9) {
            minuteElement.innerHTML = hour;
        }      

        if(hour>59) {
            hour = "00";
            minute = "00";
            second = "00";
            centiSecond = "00";
            hourElement.innerHTML = hour;
            minuteElement.innerHTML = minute;
            secondElement.innerHTML = second;
            centiSecondElement.innerHTML = centiSecond;            
        }

    }

}