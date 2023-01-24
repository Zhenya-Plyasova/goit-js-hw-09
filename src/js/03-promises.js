import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.6.min.css";

const delayInput = document.getElementsByName("delay")[0];
const stepInput = document.getElementsByName("step")[0];
const amountInput = document.getElementsByName("amount")[0];
const button = document.querySelector("button");

console.log("Hi");

button.addEventListener("click", onButtonClick);
function onButtonClick(event){
event.preventDefault();

let delay = Number(delayInput.value);
let step = Number(stepInput.value);
let amount = Number(amountInput.value);

console.log(`delay ${delay}, step ${step}, value ${amount}`);
for (let i = 1; i <=amount; i++) {
  createPromise(i, (delay))
  .then(({ position, delay }) => {
    // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);

  });
  delay+=step;
}
};

function createPromise(position, delay) {

  return new Promise((resolve, reject)=>{
    const shouldResolve = Math.random() > 0.3;
    setTimeout(()=>{
      if (shouldResolve) {
          // console.log(`promis ${position}, with delay ${delay}`);
      resolve({position, delay});
        } else {
      reject({position, delay});
  }
    }, delay);
  });
}

