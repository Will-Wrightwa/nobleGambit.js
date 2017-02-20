const Tile = require('./Tile.js')

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

  }
}


module.exports = Board
