import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const timer = event.currentTarget.elements.delay.value;
  const radio = event.currentTarget.elements.state.value;
  form.reset();

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(timer, radio);
      if (radio === 'fulfilled') {
        resolve();
      } else {
        reject();
      }
    }, timer);
  });

  promise
    .then(value => {
      iziToast.success({
        color: 'green',
        message: `✅ Fulfilled promise in ${timer}ms`,
        position: 'topRight',
      });
    })
    .catch(error => {
      iziToast.error({
        color: 'red',
        message: `❌ Rejected promise in ${timer}ms`,
        position: 'topRight',
      });
    });
});
