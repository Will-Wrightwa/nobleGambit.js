

class Player {
  constructor(name,color="white") {
    this.name = name
    this.color = color
  }
  isNotOwn(board){  //needs to be made simpler, prettier
    return (location)=>{
      let piece = board.$(location)
      if(!piece)return true;
      if(piece.player === this )return false;
      return true;
    }
  }
  isAttack(board){  //needs to be made simpler, prettier
    return (location)=>{
      let piece = board.$(location)
      if(!piece)return false;
      if(piece.player === this )return false;
      return true;
    }
  }
}


module.exports = Player
