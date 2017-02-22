
class Piece {
  constructor(location,player,board) {
    this.location = location
    this.player = player
    this.board = board
  }
  moveTo(toLocation){ // needs TESTS!!!!
    let from = this.location
    let to = toLocation

    this.location = to
    this.board[to[0]][to[1]].setPiece(this)
    this.board[from[0]][from[1]].clear()
  }
}


module.exports = Piece
