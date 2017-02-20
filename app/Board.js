const Tile = require('./Tile.js')
const Pawn = require('./pieces/Pawn.js')
const Rook = require('./pieces/Rook.js')
const Knight = require('./pieces/Knight.js')
const Bishop = require('./pieces/Bishop.js')
const King = require('./pieces/King.js')
const Queen = require('./pieces/Queen.js')



class Board extends Array {
  constructor() {
    super()
    let color;
    for (var col = 0; col < 8; col++) {
      this[col]=[]
      for (var row = 0; row < 8; row++) {
        if((col + row) % 2 === 0){
          color = "white"
        }else{
          color = "black"
        }
        this[col][row] = new Tile(color)
      }
    }
  }
  init(){
    // let r0 = [Rook,Knight,Bishop,Queen,King,Bishop,Knight,Rook]
    // let r1 = [Pawn,Pawn,Pawn,Pawn,Pawn,Pawn,Pawn,Pawn]
    // let r6 = [Rook,Knight,Bishop,King,Queen,Bishop,Knight,Rook]


  }
}


module.exports = Board
