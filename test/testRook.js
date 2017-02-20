require('mocha')
const chai = require('chai')
const expect = chai.expect;

const Rook = require('../app/pieces/Rook.js')
const Piece = require('../app/pieces/Piece.js')

describe('Rook class', function() {
  it('should have name attribute', function() {
    let r = new Rook()
    expect(r.name).to.equal("rook")
  });
  it('should inherit from Piece Class', function() {
    let r = new Rook()
    expect(r instanceof Piece )
  });
});
