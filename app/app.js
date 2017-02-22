
const Board = require('./Board.js')
const Player = require('./Player.js')
const cliRenderer = require('./renderers/cliRenderer')
let b = new Board()
let p1 = new Player("fred","white")
let p2 = new Player("joe","black")

b.init(p1,p2)


console.log(b.renderer.render("ltrs"));


b[1][0].piece.moveTo([2,0])
console.log(b.renderer.render("ltrs"));

console.log(b._("A1"));
