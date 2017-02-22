
const visuals = require('./visuals.json')

function printUnicode(board) {
  const unicode = {
    white:{
      Pawn:"♙",
      Rook:"♖",
      Knight:"♘",
      Bishop:"♗",
      King:"♔",
      Queen:"♕",
    },
    black:{
      Pawn:"♟",
      Rook:"♜",
      Knight:"♞",
      Bishop:"♝",
      King:"♚",
      Queen:"♛",
    }
  }
  return board.map2d((tile)=>{
    if(!tile.piece)return " ";
    visuals[tile.piece.constructor.name][tile.piece.player.color]
    return unicode[tile.piece.player.color][tile.piece.constructor.name]
  }).reverse()
}
function _printUnicode(tile){
}


function print(type="uni"){
  return this.map2d((tile)=>{
    if(!tile.piece)return " ";
    return visuals[tile.piece.constructor.name][tile.piece.player.color][type]
  }).reverse()
}



module.exports.unicode = printUnicode
module.exports.render = print
