const fs = require('fs')

const remapData = require('../common/remapData')
const data = fs.readFileSync('../common/input.txt', 'utf-8').split('\n').map(remapData)

const submarine = require('./submarine')()

const movesReducer = (submarine) => (_, heading) => {
  return submarine[heading.move](heading.value)
}

const position = data.reduce(movesReducer(submarine), {})

console.log(position.horizontal * position.depth)