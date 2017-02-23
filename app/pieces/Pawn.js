
const Piece = require('./Piece.js')

class Pawn extends Piece{
  constructor(location,player,board) {
    super(location,player,board)
  }
  moves(){   // only works for white :[ need to FIX!!!!!
    let row = this.location[0]
    let col = this.location[1]
    let board = this.board
    let me = this.player
    // let dir = me.color ==="white" ? 1 :-1
    let moves = []
    if(row !== 7 && !board[row+1][col].piece){
      moves.push([row+1,col])   // forward 1 space
      if(row === 1 && !board.$([row+2,col])){
        moves.push([row+2,col])   // forward 2 spaces on first move
      }
    }
    let atkL = [row+1,col-1]
    let atkR = [row+1,col+1]

    if(col !== 0 && me.isAttack(board)(atkL)){
      moves.push(atkL)
    }
    if(col !== 7 && me.isAttack(board)(atkR)){
      moves.push(atkR)
    }

    return moves
  }
}


module.exports = Pawn
