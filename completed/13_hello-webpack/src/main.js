import removeGreetingIfExists from './remove-greeting.js';
import addTime from './add-time.js';
import { sample } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('add-one').addEventListener('click', () => {
    removeGreetingIfExists();
    addTime(sample(0, 1000));
  })

  document.getElementById('add-three').addEventListener('click', () => {
    removeGreetingIfExists();

    Array(3).fill().forEach(() => {
      addTime(sample(2000, 3000));
    });
  })
})
