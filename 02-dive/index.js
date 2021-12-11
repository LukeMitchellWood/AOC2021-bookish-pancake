const data = require('./input')

const moves = data.map(data => ({
  move: data.split(' ')[0],
  value: parseInt(data.split(' ')[1], 10)
}))

const position = moves.reduce((total, m, index, arr) => {
  if(m.move === 'forward') {
    total.horizontalPosition += m.value
    return total;
  }
  total.depth += m.move === 'down' ? m.value : -m.value
  return total
}, {
  horizontalPosition: 0,
  depth: 0
})

const total = position.horizontalPosition * position.depth
console.log(total)