import { timeoutPromise } from './utils.js';

async function addTime(timeout) {
  const timeDiv = document.createElement('div');
  timeDiv.textContent = 'Loading...';
  document.getElementById('container').appendChild(timeDiv);

  await timeoutPromise(timeout);

  timeDiv.textContent = (new Date()).toString();
}

export default addTime;