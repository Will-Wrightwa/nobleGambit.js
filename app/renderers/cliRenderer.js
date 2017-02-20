
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
    return unicode[tile.piece.player.color][tile.piece.constructor.name] 
  })
}
function _printUnicode(tile){
}



module.exports.unicode = printUnicode
