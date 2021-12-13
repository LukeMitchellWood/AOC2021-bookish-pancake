module.exports = (window, measure, index, arr) => {
  window.push(arr[index - 1] ? measure - arr[index - 1] : undefined);
  return window;
};
