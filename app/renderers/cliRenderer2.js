const visuals = require('./visuals.json')

class renderer {
  constructor(board) {
    this.board = board
  }
  render(type="uni"){
    return "\n" + this.board.map2d((tile)=>{
      if(!tile.piece)return " ";
      return visuals[tile.piece.constructor.name][tile.piece.player.color][type]
    }).reverse().map((row)=>row.join(" ")).join('\n') + "\n"
  }
}

module.exports = renderer
