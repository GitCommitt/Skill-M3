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

/* Slider */

const rangeValue = document.getElementById("js--rangeValue");
const slider = document.getElementById("js--slider");
const body = document.getElementById("js--body");

slider.value = "2"; 
rangeValue.innerHTML = slider.value + " x";

body.style.fontSize = `${1 + parseInt(slider.value)}rem`;

slider.oninput = function(){
    rangeValue.innerHTML = slider.value + " x";
    
    let fontSize = 1 + parseInt(slider.value);
    body.style.fontSize = fontSize + "rem";
}

// Data JSON

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
    

    document.addEventListener("DOMContentLoaded", function() {
        const smallImg = document.getElementById("js--img");
        const modal = document.getElementById("imageModal");
        const largeImg = document.getElementById("largeImage");
        const closeBtn = document.querySelector(".close");
    
        smallImg.onclick = function() {
            largeImg.src = this.src;
            modal.style.display = "flex";
        };
    
        closeBtn.onclick = function() {
            modal.style.display = "none";
        };
    
        modal.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        };
    });
    

// Sidebar

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const toggleBtn = document.querySelector(".toggle-btn");
    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-25rem";
        toggleBtn.style.display = "block";
    } else {
        sidebar.style.left = "0px";
        toggleBtn.style.display = "none";
    }
}