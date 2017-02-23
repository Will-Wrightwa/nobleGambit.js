const Tile = require('./Tile.js')
const Pawn = require('./pieces/Pawn.js')
const Rook = require('./pieces/Rook.js')
const Knight = require('./pieces/Knight.js')
const Bishop = require('./pieces/Bishop.js')
const King = require('./pieces/King.js')
const Queen = require('./pieces/Queen.js')

const Renderer = require('./renderers/cliRenderer2.js')


class Board extends Array {
  constructor() {
    super()
    let color;
    this.renderer = new Renderer(this)
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
  init(player1,player2){
    //row 1(0)
    this[0][0].setPiece(new Rook([0,0],player1,this))
    this[0][1].setPiece(new Knight([0,1],player1,this))
    this[0][2].setPiece(new Bishop([0,2],player1,this))
    this[0][3].setPiece(new Queen([0,3],player1,this))
    this[0][4].setPiece(new King([0,4],player1,this))
    this[0][5].setPiece(new Bishop([0,5],player1,this))
    this[0][6].setPiece(new Knight([0,6],player1,this))
    this[0][7].setPiece(new Rook([0,7],player1,this))

    //row 2(1)
    this[1].forEach((tile,i)=>tile.setPiece(new Pawn([1,i],player1,this)))
    //row 7(6)
    this[6].forEach((tile,i)=>tile.setPiece(new Pawn([6,i],player2,this)))

    //row 8 (7)
    this[7][0].setPiece(new Rook([7,0],player2,this))
    this[7][1].setPiece(new Knight([7,1],player2,this))
    this[7][2].setPiece(new Bishop([7,2],player2,this))
    this[7][3].setPiece(new King([7,3],player2,this))
    this[7][4].setPiece(new Queen([7,4],player2,this))
    this[7][5].setPiece(new Bishop([7,5],player2,this))
    this[7][6].setPiece(new Knight([7,6],player2,this))
    this[7][7].setPiece(new Rook([7,7],player2,this))



  }
  each2d(fn){
    this.forEach((row)=>{
      row.forEach((tile)=>fn(tile))
    })
  }
  map2d(fn){
    return this.map((row)=>{
      return row.map(fn)
    })
  }
  $(location){
    let t = this._(location)
    if(!t)return null;
    return t.piece
  }
  _(location){
    if(!location)return null;
    if (typeof location === "string"){
      const charMap ={
        a:0,
        b:1,
        c:2,
        d:3,
        e:4,
        f:5,
        g:6,
        h:7
      }

      let col = charMap[location.charAt(0).toLowerCase()]
      let row = parseInt(location.charAt(1))-1
      if(!(row+1) || !(col+1))return null;
      location = [row,col]
    }
    if (location[0] > 7 || location[1] > 7 ||location[0] < 0 ||location[1] < 0){
      return null;
    }
    if (location.some((n)=>isNaN(parseFloat(n)))) return null;
    return this[location[0]][location[1]]
  }

}

module.exports = Board
