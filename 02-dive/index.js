const data = require('./input')

const remapData = data => ({
  move: data.split(' ')[0],
  value: parseInt(data.split(' ')[1], 10)
})

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