const fs = require('fs')

const data = fs.readFileSync('../common/input.txt', 'utf-8').split('\n')
const dataWidth = data[0].length

const majorityOnes = place => place / data.length >= 0.5
const compliment = g => !g
const addOnes = line => (place, placeIndex) => place + parseInt(line[placeIndex])
const mostCommonBit = (mapper) => (numberOfOnes, line) => numberOfOnes.map(mapper(line))
const makeInteger = (binary) => parseInt(binary.map(g => g ? '1' : '0').join(''), 2)

const calculateGamma = (report) => report.reduce(mostCommonBit(addOnes), new Array(dataWidth).fill(0)).map(majorityOnes)
const calculateEpsilon = (gamma) => gamma.map(compliment)

const calculatePowerConsumption = data => {
  const gamma = calculateGamma(data)
  const epsilon = calculateEpsilon(gamma)
  return makeInteger(gamma) * makeInteger(epsilon)
};

console.log(calculatePowerConsumption(data))