
export const timeoutPromise = ms => new Promise((resolve, _reject) => {
  setTimeout(() => {
    resolve();
  }, ms);
});

export const sample = (from, to) => from + (to - from) * Math.random();