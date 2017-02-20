
const Piece = require('./Piece.js')

class Pawn extends Piece{
  constructor() {
    super()
  }
}
Pawn.prototype.name = "pawn"

module.exports = Pawn
