import Typed from 'typed.js'

import { timeoutPromise } from './utils.js';

async function addTime(timeout) {
  const timeDiv = document.createElement('div');
  document.getElementById('container').appendChild(timeDiv);

  const textSpan = document.createElement('span');
  timeDiv.appendChild(textSpan)

  let typed = new Typed(textSpan,{
    strings: ["ssssssss!..."],
    typeSpeed: 30
  });

  await timeoutPromise(timeout);
  typed.destroy();

  typed = new Typed(textSpan,{
    strings: ["Completed", (new Date()).toString()],
    typeSpeed: 30,
    onComplete: ()=>{
      typed.cursor.remove();
    }
  })
}

export default addTime;