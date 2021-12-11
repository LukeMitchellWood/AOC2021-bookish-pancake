const data = require('./input')

const f = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  light: '\x1b[2m',
  italic: '\x1b[3m'
}

const depthDisplay = (depth) => `${f.light}${f.italic}${depth}${f.reset}`
const increased = `(${f.bold}increased${f.reset})`
const decreased = `(${f.light}decreased${f.reset})`

const depthDelta = (data) => data.reduce((m, depth, index, arr) => {
  m.push({
    depth,
    delta: index === 0 ? undefined : depth - arr[index - 1]
  })
  return m;
}, []);

const na = `(N/A - ${f.italic}${f.light}no previous measurement${f.reset})`
const absoluteChange = (data) => data.map((measure) => {
  if (measure.delta) return `${depthDisplay(measure.depth)} ${measure.delta > 0 ? increased : decreased}`
  return `${depthDisplay(measure.depth)} ${na}`
})

const amountLargerThanPrevious = (change) => change.filter(reading => reading.split(' ')[1] === increased).length

const count = amountLargerThanPrevious(absoluteChange(depthDelta(data)));
console.log(count);