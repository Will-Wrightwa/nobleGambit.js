
const Piece = require('./Piece.js')

class King extends Piece{
  constructor(location,player,board) {
    super(location,player,board)
  }
}

module.exports = King
