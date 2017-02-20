

class Tile {
  constructor(color) {
    this.color = color
    this.piece = null
  }
  setPiece(piece){
    this.piece = piece
  }
}


module.exports = Tile
