import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.6.min.css";

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        // if (selectedDates<defaultDate){
        //     window.alert("Please choose a date in the future")
        // }
      console.log(selectedDates[0]);
    }
  };

const input = document.querySelector("#datetime-picker");
const days = document.querySelector("[data-days]");
const hours = document.querySelector("[data-hours]");
const minutes = document.querySelector("[data-minutes]");
const seconds = document.querySelector("[data-seconds]");
const start = document.querySelector("button");

flatpickr("#datetime-picker", {options});

