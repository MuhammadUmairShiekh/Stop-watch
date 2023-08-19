window.onload = function (){

let min = "00";
let sec = "00";
let msec = "00";

let minElem = document.getElementById("min")
let secElem = document.getElementById("sec")
let msecElem = document.getElementById("msec")
const btn_started = document.getElementById("btn_start")
const btn_stoped = document.getElementById("btn_stop")
const btn_reseted = document.getElementById("btn_reset")
let interval;


function timer() {
    msec++
    msecElem.innerHTML = (msec < 10 ? "0" : " ") + msec
    if (msec >= 99) {
        sec++
        secElem.innerHTML = (sec < 10 ? "0" : " ") + sec
        msec = "00"

    } else if (sec >= 60) {
        min++
        sec = "00"
        minElem.innerHTML = (min < 10 ? "0" : " ") + min

    }

}

btn_started.addEventListener("click", () => {
    clearInterval(interval)
    interval = setInterval(timer, 10)  
 
})

btn_stoped.addEventListener("click", () => {

    clearInterval(interval)
})

btn_reseted.addEventListener("click", () => {
    clearInterval(interval)
    let min = "00";
    let sec = "00";
    let msec = "00";
    minElem.innerHTML = min
    secElem.innerHTML = sec
    msecElem.innerHTML = msec
    
})

}




