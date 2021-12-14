const fs = require('fs');

const data = fs.readFileSync('../common/input.txt', 'utf-8').split('\n');

const fildMostCommonBitValue = (index) => {
  return (mostCommon, line) => mostCommon += line[index] === '1' ? 1 : 0;
};
const filterBitPatternAtIndex = (index, comparisonFunction, mostCommon) => {
  return (line) => {
    return line[index] === (comparisonFunction(mostCommon) ? '1' : '0');
  };
};

const findRating = (comparisonFunction) => (data, index) => {
  index = index || 0;
  const len = data.length;
  if (len === 1) return parseInt(data[0], 2);
  const mostCommon = data.reduce(fildMostCommonBitValue(index), 0) / len;
  const filteredData = data.filter(
      filterBitPatternAtIndex(index, comparisonFunction, mostCommon)
  );
  index += 1;
  return findRating(comparisonFunction)(filteredData, index);
};

const oxygenGeneratorFilter = (value) => value >= 0.5;
const co2ScrubberFilter = (value) => value < 0.5;
const oxygenGeneratorRating = findRating(oxygenGeneratorFilter)(data);
const co2ScrubberRating = findRating(co2ScrubberFilter)(data);

console.log(oxygenGeneratorRating * co2ScrubberRating);
