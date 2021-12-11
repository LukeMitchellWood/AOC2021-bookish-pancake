const data = require('../common/input')
const calculateDelta = require('../common/calculateDelta')

const calculateSum = (sum, entry) => sum + entry
const calculateMovingWindow = ({windowSize, windowReducer}) => (window, _, index, arr) => {
  if (index < arr.length - (windowSize - 1)) {
    const w = arr.slice(index, index + windowSize).reduce(windowReducer, 0)
    window.push(w)
    return window
  }
  return window
}
const greaterThanZero = number => number > 0

const increasing = data
  .reduce(calculateMovingWindow({windowSize: 3, windowReducer: calculateSum}), [])
  .reduce(calculateDelta, [])
  .filter(greaterThanZero).length

console.log(increasing)