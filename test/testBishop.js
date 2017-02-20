require('mocha')
const chai = require('chai')
const expect = chai.expect;

const Bishop = require('../app/pieces/Bishop.js')
const Piece = require('../app/pieces/Piece.js')

describe('Bishop class', function() {
  it('should inherit from Piece Class', function() {
    let bi = new Bishop()
    expect(bi instanceof Piece )
  });
});
