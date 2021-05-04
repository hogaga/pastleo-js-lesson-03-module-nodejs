
export const timeoutPromise = ms => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, ms);
});

export const sample = (from, to) => from + (to - from) * Math.random();
