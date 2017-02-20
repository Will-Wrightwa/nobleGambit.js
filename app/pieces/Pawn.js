
const Piece = require('./Piece.js')

class Pawn extends Piece{
  constructor(location,player,board) {
    super(location,player,board)
  }
}


module.exports = Pawn
