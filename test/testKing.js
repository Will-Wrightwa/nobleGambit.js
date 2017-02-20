require('mocha')
const chai = require('chai')
const expect = chai.expect;

const King = require('../app/pieces/King.js')
const Piece = require('../app/pieces/Piece.js')

describe('King class', function() {
  it('should have name attribute', function() {
    let ki = new King()
    expect(ki.name).to.equal("king")
  });
  it('should inherit from Piece Class', function() {
    let ki = new King()
    expect(ki instanceof Piece )
  });
});
