const timeoutPromise = ms => new Promise((resolve, _reject) => {
  setTimeout(() => {
    resolve();
  }, ms);
})

const sample = (from, to) => from + (to - from) + Math.random()

function removeGreeting() {
  const greetingDiv = document.getElementById('greeting');
    if (greetingDiv) {
      greetingDiv.remove();
    }
}

async function addTime(ms) {
  const timeDiv = document.createElement('div');
  timeDiv.textContent = 'Loading...';
  document.getElementById('container').appendChild(timeDiv);

  await timeoutPromise(ms) // (Math.random() * 1000) 隨機生出0-1的數字

  timeDiv.textContent = (new Date()).toString();
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('add-one').addEventListener('click', async () => {
    removeGreeting();
    
    addTime(sample(0,1000));
  })

  document.getElementById('add-three').addEventListener('click', () => {
    removeGreeting();

    Array(3).fill().forEach(() => {   // 跑function三次：空陣列三個，但不在乎內容，所以 fill() 沒放東西~
      addTime(sample(1000,3000));
    });
  })
})