
const Piece = require('./Piece.js')

class Queen extends Piece{
  constructor(location,player,board) {
    super(location,player,board)
  }
}


module.exports = Queen
