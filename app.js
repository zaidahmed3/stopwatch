var hoursspan = document.querySelector("#hours")
var minutesspan = document.querySelector("#minutes")
var secondspan = document.querySelector("#seconds")

let second = 0;
let minutes = 0;
let hours = 0;
let watch;

function startwatch() {
    watch = setInterval(() => {
        second += 1;
        
        if (second < 10) {
            secondspan.innerHTML = "0" + second;
        }else{
            secondspan.innerHTML = second;
        }

        if (second === 60) {
            minutes += 1;
            second = 0;
        minutesspan.innerHTML = "0" + minutes;
        }
        if (minutes === 60) {
            hours += 1;
            minutes = 0;
            hoursspan.innerHTML = "0" + hours;
        }
        if (hours === 24) {
            hoursspan.innerHTML = '0' + hours;
        }
    }, 1000);
}

function stopwatch() {
  clearInterval(watch)
}

function resetwatch() {
 clearInterval(watch)

 
  second = 0;
  minutes = 0;
  hours = 0;

  secondspan.innerHTML = "00";
  minutesspan.innerHTML = "00";
  hoursspan.innerHTML = "00" ;
}


