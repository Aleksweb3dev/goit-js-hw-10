import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const findForm = document.querySelector('.form');
findForm.addEventListener('submit', onHandleSubmit);
function onHandleSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const delay = Number(form.elements.delay.value);
  const state = form.elements.state.value;
  makePromises(delay, state)
    .then(result => {
      iziToast.success({
        title: 'Success',
        message: result,
        position: 'topRight',
      });
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: error,
        position: 'topRight',
      });
    });
}

function makePromises(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(`✅ Fulfilled promise in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise in ${delay}ms`);
      }
    }, delay);
  });
}
