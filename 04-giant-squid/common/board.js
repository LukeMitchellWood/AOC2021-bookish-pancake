/**
 * Creates a board object.
 * @param {array} board this is a 5 x 5 array of positive numbers including zero
 * @return {int} the score of the board
 */
 module.exports = function board(board) {
  const matches = [];
  const flatBoard = board.flat();
  let win = [];
  let lastDraw;

  const matchCols = (col) => (match) => (match - col) % 5 === 0;
  const matchRows = (row) => (match) => {
    return (match >= row * 5) && (match < row * 5 + 5);
  };
  const elementMatchesIndex = (index) => (w) => w === index;
  const removeElementAtIndex = (indexArray) => {
    return (_, index) => !indexArray.filter(elementMatchesIndex(index)).length;
  };
  const calculateSum = (sum, num) => sum + num;

  /**
  * Marks a number as drawn if it exists on the board.
  * @param {int} number the number drawn
  * @return {int} the score of the board or zero
  */
  function draw(number) {
    lastDraw = number;
    matches.push(flatBoard.indexOf(number));
    return hasWon();
  }

  /**
  * Calculates the boards score.
  * @return {int} the sum of the unmarked numbers on the
  * board multiplied by the last number drawn.
  */
  function calculateScore() {
    return flatBoard
        .filter(removeElementAtIndex(matches))
        .reduce(calculateSum, 0) * lastDraw;
  }

  /**
  * Determines if the board has won given the current draws.
  * @return {int} the sum of the unmarked numbers on the
  * board multiplied by the last number drawn.
  */
  function hasWon() {
    new Array(5).fill(0).forEach((_, index) => {
      const winningCol = matches.filter(matchCols(index));
      const winningRow = matches.filter(matchRows(index));
      if (winningCol.length === 5 || winningRow.length === 5) {
        winningCol.length === 5 && (win = winningCol);
        winningRow.length === 5 && (win = winningRow);
      }
    });
    return (win.length === 5 || 0) && calculateScore();
  }

  return {
    draw,
  };
}
