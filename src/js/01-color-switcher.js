const body = document.querySelector("body");
const startButton = document.querySelector("button[data-start]");
const stopButton = document.querySelector("button[data-stop]");
let timerID = null;

startButton.addEventListener("click", onStartButtonClick);
stopButton.addEventListener("click", onStopbuttonClick);

function onStartButtonClick(){
   timerId = setInterval(getRandomHexColor, 1000);
   startButton.setAttribute("disabled", true);
};

function onStopbuttonClick(){
    startButton.removeAttribute("disabled");
    clearInterval(timerId);
};

function getRandomHexColor() {
   body.style.backgroundColor=`#${Math.floor(Math.random() * 16777215).toString(16)}`;
};