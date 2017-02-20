
const Piece = require('./Piece.js')

class Queen extends Piece{
  constructor() {
    super()
  }
}
Queen.prototype.name="queen"

module.exports = Queen
