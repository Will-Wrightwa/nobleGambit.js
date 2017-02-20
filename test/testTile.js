require('mocha')
const chai = require('chai')
const expect = chai.expect;

const Tile = require('../app/Tile.js')

describe('Tile class', function() {
  it('should have a color attribute', function() {
    let color = "white"
    let t = new Tile(color)
    expect(t.color).to.equal(color)

    color = "black"
    t = new Tile(color)
    expect(t.color).to.equal(color)
  });

  it('should have piece property', function() {
    let t = new Tile("color")
    expect(t.hasOwnProperty("piece")).to.be.true
  });
  it('should have .setPiece() method', function() {
    let t = new Tile()
    expect('setPiece' in t).to.be.true
    let piece = "piece"
    t.setPiece(piece)
    expect(t.piece).to.equal(piece)
  });
});
