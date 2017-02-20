
const Piece = require('./Piece.js')

class Bishop extends Piece{
  constructor() {
    super()
  }
}
Bishop.prototype.name="bishop"

module.exports = Bishop
