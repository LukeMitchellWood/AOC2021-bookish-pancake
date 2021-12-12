const fs = require('fs')

const remapData = require('../common/remapData')
const data = fs.readFileSync('../common/input.txt', 'utf-8').split('\n').map(remapData)

const submarine = require('./submarine')()

const submarineReducer = (submarine) => (_, heading) => {
  return submarine[heading.move](heading.value)
}

const finalPosition = data.reduce(submarineReducer(submarine), {})

console.log(finalPosition.horizontal * finalPosition.depth)