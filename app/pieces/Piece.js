
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
  isInBounds(location){
    if(location[0] < 0 || location[0] > 7)return false;
    if(location[1] < 0 || location[1] > 7)return false;
    return true;
  }

}


module.exports = Piece
