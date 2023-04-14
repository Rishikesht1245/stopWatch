let timeEl = document.querySelector(".time");
let timer = null;
let [hours, minutes, seconds] = [0,0,0]; // declaring multiple variables


// change time
function stopWatch(){
      seconds++;
      if(seconds == 60){
            seconds =0;
            minutes++;
            if(minutes == 60){
                  minutes = 0;
                  hours++;
            }
      }
      let m = minutes< 10 ? ('0'+minutes) : minutes;
      let h = hours<10 ? ('0'+hours) : hours;
      let s = seconds<10 ? ('0'+seconds) : seconds;
      timeEl.innerHTML = h+':'+m+':'+s;
}

//start

function startTimer(){
      if(timer!=null){
            clearInterval(timer); // stop recurring calling of the function.
      }
      timer = setInterval(stopWatch,1000); //calling stopwatch function on each second.
      console.log(timer);
}

function stopTimer() {
      clearInterval(timer);
      console.log(timer);
}

function resetTimer() {
      clearInterval(timer);
      [hours, minutes, seconds] = [0, 0, 0];
      timeEl.innerHTML = "00:00:00";
      console.log(timer);
}
      

