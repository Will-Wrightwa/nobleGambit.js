
const Board = require('./Board.js')
const Player = require('./Player.js')
const cliRenderer = require('./renderers/cliRenderer')
let b = new Board()
let p1 = new Player("fred")
let p2 = new Player("joe","black")

b.init(p1,p2)

let tile = b[0][4]

let uni = cliRenderer.unicode(b)

console.log(uni);
// console.log(tile.piece);






function each2d(board,fn){
  board.forEach((row)=>{
    row.forEach((tile)=>fn(tile))
  })
}
function map2d(board,fn){
  return board.map((row)=>{
    return row.map(fn)
  })
}
