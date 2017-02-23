require('mocha')
const chai = require('chai')
const expect = chai.expect;

const Pawn = require('../app/pieces/Pawn.js')
const Piece = require('../app/pieces/Piece.js')
const Board = require('../app/Board.js')
const Player = require('../app/Player.js')

describe('Pawn Moves', function() {



  describe('Pawn Alone', function() {
    it('C2', function() {
      let b = new Board()
      let loc = "C2"
      let ans = ["C3","C4"]
      let p1 = new Player("bob","white")
      b._(loc).setPiece(new Pawn(strToLoc(loc),p1,b))

      testMoves(b,loc,ans)
    });
    it('H2', function() {
      let b = new Board()
      let loc = "H2"
      let ans = ["H3","H4"]
      let p1 = new Player("bob","white")
      b._(loc).setPiece(new Pawn(strToLoc(loc),p1,b))

      testMoves(b,loc,ans)
    });
    it('A2', function() {
      let b = new Board()
      let loc = "A2"
      let ans = ["A3","A4"]
      let p1 = new Player("bob","white")
      b._(loc).setPiece(new Pawn(strToLoc(loc),p1,b))

      testMoves(b,loc,ans)
    });
    it('A3', function() {
      let b = new Board()
      let loc = "A3"
      let ans = ["A4"]
      let p1 = new Player("bob","white")
      b._(loc).setPiece(new Pawn(strToLoc(loc),p1,b))

      testMoves(b,loc,ans)
    });
    it('H3', function() {
      let b = new Board()
      let loc = "H3"
      let ans = ["H4"]
      let p1 = new Player("bob","white")
      b._(loc).setPiece(new Pawn(strToLoc(loc),p1,b))

      testMoves(b,loc,ans)
    });
    it('C3', function() {
      let b = new Board()
      let loc = "C3"
      let ans = ["C4"]
      let p1 = new Player("bob","white")
      b._(loc).setPiece(new Pawn(strToLoc(loc),p1,b))

      testMoves(b,loc,ans)
    });
  });

  describe('Pawn with Allies', function() {
    it('C2 W/ Allies: C4', function() {
      let b = new Board()
      let loc = "C2"
      let ans = ["C3"]
      let p1 = new Player("bob","white")
      b._(loc).setPiece(new Pawn(strToLoc(loc),p1,b))
      b._("C4").setPiece(new Pawn(strToLoc("C4"),p1,b))


      testMoves(b,loc,ans)
    });
    it('C2 W/ Allies: C3', function() {
      let b = new Board()
      let loc = "C2"
      let ans = []
      let p1 = new Player("bob","white")
      b._(loc).setPiece(new Pawn(strToLoc(loc),p1,b))
      b._("C3").setPiece(new Pawn(strToLoc("C3"),p1,b))


      testMoves(b,loc,ans)
    });
    it('C3 W/ Allies: C4', function() {
      let b = new Board()
      let loc = "C3"
      let ans = []
      let p1 = new Player("bob","white")
      b._(loc).setPiece(new Pawn(strToLoc(loc),p1,b))
      b._("C4").setPiece(new Pawn(strToLoc("C4"),p1,b))


      testMoves(b,loc,ans)
    });
    it('C2 W/ Allies: C4', function() {
      let b = new Board()
      let loc = "C3"
      let ans = ["C4"]
      let p1 = new Player("bob","white")
      b._(loc).setPiece(new Pawn(strToLoc(loc),p1,b))
      b._("C5").setPiece(new Pawn(strToLoc("C5"),p1,b))


      testMoves(b,loc,ans)
    });
    it('C3 W/ Allies: B4,D4', function() {
      let b = new Board()
      let loc = "C3"
      let ans = ["C4"]
      let p1 = new Player("bob","white")
      b._(loc).setPiece(new Pawn(strToLoc(loc),p1,b))
      b._("B4").setPiece(new Pawn(strToLoc("D4"),p1,b))
      b._("D4").setPiece(new Pawn(strToLoc("D4"),p1,b))

      testMoves(b,loc,ans)
    });
    it('C3 W/ Allies: B4,C4,D4', function() {
      let b = new Board()
      let loc = "C3"
      let ans = []
      let p1 = new Player("bob","white")
      b._(loc).setPiece(new Pawn(strToLoc(loc),p1,b))
      b._("B4").setPiece(new Pawn(strToLoc("D4"),p1,b))
      b._("D4").setPiece(new Pawn(strToLoc("D4"),p1,b))
      b._("C4").setPiece(new Pawn(strToLoc("D4"),p1,b))

      testMoves(b,loc,ans)
    });
  });

  describe('Pawn with Enemies', function() {
    it('C2 W/ Enemies: C4', function() {
      let b = new Board()
      let loc = "C2"
      let ans = ["C3"]
      let p1 = new Player("bob","white")
      let p2 = new Player("joe","black")
      b._(loc).setPiece(new Pawn(strToLoc(loc),p1,b))
      b._("C4").setPiece(new Pawn(strToLoc("C4"),p2,b))


      testMoves(b,loc,ans)
    });
    it('C2 W/ Enemies: C3', function() {
      let b = new Board()
      let loc = "C2"
      let ans = []
      let p1 = new Player("bob","white")
      let p2 = new Player("joe","black")
      b._(loc).setPiece(new Pawn(strToLoc(loc),p1,b))
      b._("C3").setPiece(new Pawn(strToLoc("C3"),p2,b))


      testMoves(b,loc,ans)
    });
    it('C3 W/ Enemies: C4', function() {
      let b = new Board()
      let loc = "C3"
      let ans = []
      let p1 = new Player("bob","white")
      let p2 = new Player("joe","black")
      b._(loc).setPiece(new Pawn(strToLoc(loc),p1,b))
      b._("C4").setPiece(new Pawn(strToLoc("C4"),p2,b))


      testMoves(b,loc,ans)
    });
    it('C3 W/ Enemies: C5', function() {
      let b = new Board()
      let loc = "C3"
      let ans = ["C4"]
      let p1 = new Player("bob","white")
      let p2 = new Player("joe","black")
      b._(loc).setPiece(new Pawn(strToLoc(loc),p1,b))
      b._("C5").setPiece(new Pawn(strToLoc("C5"),p2,b))


      testMoves(b,loc,ans)
    });
    it('C3 W/ Enemies: B4,D4', function() {
      let b = new Board()
      let loc = "C3"
      let ans = ["B4","C4","D4"]
      let p1 = new Player("bob","white")
      let p2 = new Player("joe","black")
      b._(loc).setPiece(new Pawn(strToLoc(loc),p1,b))
      b._("B4").setPiece(new Pawn(strToLoc("D4"),p2,b))
      b._("D4").setPiece(new Pawn(strToLoc("D4"),p2,b))

      testMoves(b,loc,ans)
    });

  });
});


function testMoves(boardObj,fromLoc,ansArr) {

  let out = boardObj.$(fromLoc).moves()
  out = out.map(locToStr).sort().join("")
  ans = ansArr.sort().join("")

  expect(out).to.equal(ans)
}



function locToStr(loc){
  let out;
  if (typeof loc === "string") {
    out = loc[0].toUpperCase() + loc[1]
  }else{
    out = String.fromCodePoint(parseInt(loc[1])+65)+ (parseInt(loc[0])+1)
  }
  return out

}
function strToLoc(str){
  if(typeof str !== "string")return str;
  if(isNaN(parseInt(str[1])))return null;
  return [parseInt(str[1]-1),str.codePointAt(0)-65]
}
