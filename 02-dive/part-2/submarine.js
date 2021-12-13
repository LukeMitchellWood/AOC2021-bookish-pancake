/**
 * Submarine control
 * @param {position} position the initial position
 * @return {object} the submarines controls
 */
module.exports = function Submarine(position = {
  horizontal: 0,
  depth: 0,
  aim: 0,
}) {
  /**
   * Calculates the current horizontal position.
   * @param {number} value the current amount to move forward.
   * @return {position} the current position
   */
  function forward(value) {
    position.horizontal += value;
    position.depth += position.aim * value;
    return position;
  }
  /**
   * Moves the submarine up
   * @param {number} value the current amount to move up.
   * @return {position} the current position.
   */
  function up(value) {
    position.aim -= value;
    return position;
  }
  /**
   * Moves the submarine down
   * @param {number} value the current amount to move down.
   * @return {position} the current position.
   */
  function down(value) {
    position.aim += value;
    return position;
  }
  return {
    forward,
    up,
    down,
  };
};
