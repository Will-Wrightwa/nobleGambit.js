const visuals = require('./visuals.json')

class Renderer {
  constructor(board) {
    this.board = board
  }
  render(type="uni"){
    return "\n _ _ _ _ _ _ _ _ \n|" + this.board.map2d((tile)=>{
      if(!tile.piece)return " ";
      return visuals[tile.piece.constructor.name][tile.piece.player.color][type]
    }).reverse().map((row)=>row.join(" ")).join('|\n|') + "|\n _ _ _ _ _ _ _ _ \n"
  }
  printLocs(locs){
    let out = this.board.map2d((tile)=>" ")
    console.log(out);
    locs.forEach((loc)=>{out[loc[0]][loc[1]] = '*'})
    return  "\n _ _ _ _ _ _ _ _ \n|" + out.reverse().map((row)=>row.join(" ")).join('|\n|') + "|\n _ _ _ _ _ _ _ _ \n"
  }
}

module.exports = Renderer
