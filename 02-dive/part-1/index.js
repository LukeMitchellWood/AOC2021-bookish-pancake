const data = require('../common/input')
const remapData = require('../common/remapData')

const movesReducer = (total, m, index, arr) => {
  if(m.move === 'forward') {
    total.horizontalPosition += m.value
    return total
  }
  total.depth += m.move === 'down' ? m.value : -m.value
  return total
}

const initalPosition = { horizontalPosition: 0, depth: 0 }

const position = data.map(remapData).reduce(movesReducer, initalPosition)

const total = position.horizontalPosition * position.depth

console.log(total)