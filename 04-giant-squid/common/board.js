const empty = new Array(5).fill(0).map(_ => new Array(5).fill(0))
function Board(board = empty) {
  const api = {}
  const entries = board.flat()
  const draws = []
  const lastDrawn = 0
  let marked = 0

  function mark(draw) {
    draws.push(draw)
    marked += 1
    lastDrawn = draw
  }

  function hasWon() {

  }

  function checkRow() {
    
  }

  function score() {
    return entries.filter(e => !draws.reduce((found, draw, index) => {
      if (found) break
      if(e === draw) {
        draws.splice(index, 1)
      }
    }, false)).reduce((sum, entry) => sum + entry, 0) * lastDrawn
  }

  return {
    mark,
    score,
    hasWon
  }
}

console.log(Board().mark(1))
