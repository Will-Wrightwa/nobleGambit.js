const Piece = require('./Piece.js')

class Knight extends Piece{
  constructor(location,player,board) {
    super(location,player,board)
  }
  moves(){
    let row = this.location[0]
    let col = this.location[1]
    let moves = [[row+2,col+1],
                  [row+1,col+2],
                  [row-1,col-2],
                  [row-2,col-1],
                  [row+1,col-2],
                  [row-1,col+2],
                  [row-2,col+1],
                  [row+2,col-1],
                ]
    return moves.filter(this.isInBounds) // need to filter out friendly fire

  }

}


module.exports = Knight
