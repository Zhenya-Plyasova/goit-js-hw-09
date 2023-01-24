import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.6.min.css";

// let newDate = new Date();
let newDate = Date.now();
let amountOfMs = 0;
let chosenDate = 0;
let restOfTime = 0;

const input = document.querySelector("#datetime-picker");
const daysToFin = document.querySelector("[data-days]");
const hoursToFin = document.querySelector("[data-hours]");
const minutesToFin = document.querySelector("[data-minutes]");
const secondsToFin = document.querySelector("[data-seconds]");
const start = document.querySelector("button");
start.setAttribute("disabled", true);

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0].getTime()<=newDate){
            window.alert("Please choose a date in the future");
                    }
        else{
            start.removeAttribute("disabled");
        }

    amountOfMs =selectedDates[0].getTime()-newDate;
    chosenDate = selectedDates[0].getTime();
    }
  };

flatpickr("#datetime-picker", options);

start.addEventListener("click", onStartClick);

function onStartClick(){
    const intervalID = setInterval(()=>{
        const currentTime = Date.now();
        restOfTime = chosenDate - currentTime;
  
        setTimer();
        if (restOfTime<=1000){
            clearInterval(intervalID);
        }
    }, 1000);

}

function pad(value){
    return String(value).padStart(2, '0');
}
function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = pad(Math.floor(ms / day));
    const hours = pad(Math.floor((ms % day) / hour));
    const minutes = pad(Math.floor(((ms % day) % hour) / minute));
    const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  };

  function setTimer(){
    const { days, hours, minutes, seconds } = convertMs(restOfTime);
    daysToFin.textContent = `${days}`;
    hoursToFin.textContent = `${hours}`;
    minutesToFin.textContent = `${minutes}`;
    secondsToFin.textContent = `${seconds}`;
  }