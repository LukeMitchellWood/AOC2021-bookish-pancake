const fs = require('fs')

const remapData = require('../common/remapData')
const inputData = fs.readFileSync('../common/test.txt', 'utf-8').split('\n').map(remapData)

const initialPosition = {
  horizontal: 0,
  depth: 0,
  aim: 0
}

const positionReducer = (position, heading) => {
  if (heading.move === 'forward') {
    position.horizontal += heading.value
    position.depth += position.aim * heading.value
    return position
  }
  position.depth += heading.move === 'up' ? -heading.value : heading.value
  position.aim += heading.move === 'up' ? -heading.value : heading.value
  return position
}

const finalPosition = inputData.reduce(positionReducer, initialPosition)

console.log(finalPosition)