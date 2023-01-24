// const delayInput = document.getElementsByName("delay")[0];
// const stepInput = document.getElementsByName("step")[0];
// const amountInput = document.getElementsByName("amount")[0];
const button = document.querySelector("button");

console.log("Hi");

button.addEventListener("click", onButtonClick);
function onButtonClick(){
  console.log("Hi-2");
// const delay = delayInput.value;
// console.log(delay);
// const step = stepInput.value;
// const amount = amountInput.value;

// console.log(`delay ${delay}, step ${step}, valu] ${amount}`);
// for (let i = 1; i <=amount; i++) {
//   createPromise(i, (delay+(i-1)*step))

// }

};

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       resolve();
//     }, delay);
//   });
//   if (shouldResolve) {
//     console.log(`promis #${position}, with delay ${delay}`);
//   } else {
//     console.log('error');
//   }
// }

