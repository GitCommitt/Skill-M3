/* Timer */

const startButton = document.getElementById("js--start");
const stopButton = document.getElementById("js--stop");
const resetButton = document.getElementById("js--reset");
const secondsTimer = document.getElementById("js--secondsTimer");
const minutesTimer = document.getElementById("js--minutesTimer");

let seconds = 0;
let minutes = 0;
let running = false;
let timer;

startButton.onclick = function(){
    if(running === true){
        return;
    }
    running = true;
    timer = setInterval(function(){
        seconds = seconds + 1;
        if (seconds === 60) {
            minutes = minutes + 1;
            minutesTimer.innerText = String(minutes).padStart(2, '0');
            seconds = 0;
        }
        secondsTimer.innerText = String(seconds).padStart(2, '0');
    }, 1000);
}

stopButton.onclick = function(){
    clearInterval(timer);
    running = false;
}

resetButton.onclick = function(){
    clearInterval(timer);
    running = false;
    seconds = 0;
    minutes = 0;
    secondsTimer.innerText = "00";
    minutesTimer.innerText = "00";
}

/* slider */

const rangeValue = document.getElementById("js--rangeValue");
const slider = document.getElementById("js--slider");
const body = document.getElementById("js--body");
slider.value = "2";
rangeValue.innerHTML = slider.value + " x";

slider.oninput = function(){
    rangeValue.innerHTML = slider.value + " x";
    body.style.fontSize = slider.value + "rem";
}


//Data Json

const paragraph = document.getElementById("js--text");
const imgElement = document.getElementById("js--img");

let data = fetch("./data.json").then(
    function(binnenGekomenData) {
        return binnenGekomenData.json();
    }).then(
        function(echteData) {
            paragraph.innerText = echteData.text;
            imgElement.setAttribute("src", echteData.img);
        }
    );
