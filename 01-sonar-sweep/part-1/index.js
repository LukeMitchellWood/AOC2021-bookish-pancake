const data = require('../common/input');
const calculateDelta = require('../common/calculateDelta');

const greaterThanZero = (number) => number > 0;

const increasing = data
    .reduce(calculateDelta, [])
    .filter(greaterThanZero).length;

console.log(increasing);
