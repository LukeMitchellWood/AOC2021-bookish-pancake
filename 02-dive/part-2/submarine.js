module.exports = function Submarine(initialPosition = { horizontal: 0, depth: 0, aim: 0}) {
  const position = initialPosition
  function forward(value) {
    position.horizontal += value
    position.depth += position.aim * value
    return position
  }
  function up(value) {
    position.aim -= value
    return position
  }
  function down(value) {
    position.aim += value
    return position
  }
  return {
    forward,
    up,
    down
  }
}
