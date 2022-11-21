export const iHaveSideEffect = () => {
   fetch("/api/data")
   .then(data => {
       localStorage.setItem('data', data);
   })
};

iHaveSideEffect();

export const MAX_RETRY = 5;

// const addToProvider = () => { return "I am Provider" }
// const provider = window.provider(addToProvider);












// const p = q = 100
// export const DELAY = 1000; // in ms
// localStorage.getItem('data');
// const p = getDataAfterSomeDelay = (delay = DELAY) => {
//     window.w = 100;
//     return new Promise(resolve => {
//         setTimeout(() => {
//             iHaveSideEffect.then(response => resolve())
//         }, delay)
//     })
// }
// modifying global scope