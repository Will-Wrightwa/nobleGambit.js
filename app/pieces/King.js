
const Piece = require('./Piece.js')

class King extends Piece{
  constructor() {
    super()
  }
}
King.prototype.name="king"

module.exports = King
