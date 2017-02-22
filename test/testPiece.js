require('mocha')
const chai = require('chai')
const expect = chai.expect;

const Piece = require('../app/pieces/Piece.js')

describe('Piece class', function() {
  it('should have location property', function() {
    let loc = [0,0]
    let p = new Piece(loc)
    expect(p.location).to.equal(loc)
  });
  it('should have color player property', function() {
    let player = {name:"name"}
    let p = new Piece([0,0],player)
    expect(p.player).to.equal(player)
  });
  it('should have board property', function() {
    let board = {board:"board"}
    let p = new Piece([0,0],"player",board)
    expect(p.board).to.equal(board)
  });
  it('should have .moveTo() method', function() {
    let board = [[],[{piece:null}]]
    let p = new Piece([0,0],"player",board)
    expect(typeof p.moveTo ).to.equal("function")
  });
  it('.moveTo() should change piece.location', function() {
    // let board = [[],[]]
    // let to = [0,1]
    // let p = new Piece([0,0],"player",board)
    // p.moveTo(to)
    // expect(p.location).to.equal("foo")
  });
});
