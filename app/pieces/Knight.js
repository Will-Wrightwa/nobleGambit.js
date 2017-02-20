const Piece = require('./Piece.js')

class knight extends Piece{
  constructor() {
    super()
  }
}
knight.prototype.name="knight"

module.exports = knight
