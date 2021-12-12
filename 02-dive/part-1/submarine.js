module.exports = function Submarine(position = {horizontal: 0, depth: 0}) {
  function forward(value) {
    position.horizontal += value
    return position
  }
  function up(value) {
    position.depth -= value
    return position
  }
  function down(value) {
    position.depth += value
    return position
  }
  return {
    forward,
    up,
    down
  }
}
