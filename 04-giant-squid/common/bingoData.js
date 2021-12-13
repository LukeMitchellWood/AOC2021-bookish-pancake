const fs = require('fs');
const bingoData = fs.readFileSync('input.txt', 'utf-8').split('\n\n');

const strToNum = (e) => parseInt(e, 10);
const removeEmpty = (e) => e !== '';
const splitOnSpace = (line) => line.split(' ');
const boardTextToBoards = (board) => board.split('\n');
const mapBoardDataToBoards = (board) => boardTextToBoards(board)
    .map((line) => splitOnSpace(line)
        .filter(removeEmpty)
        .map(strToNum));

const draws = bingoData[0].split(',').map(strToNum);
const boards = bingoData.slice(1).map(mapBoardDataToBoards);

module.exports = {
  draws,
  boards,
};
