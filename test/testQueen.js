require('mocha')
const chai = require('chai')
const expect = chai.expect;

const Queen = require('../app/pieces/Queen.js')
const Piece = require('../app/pieces/Piece.js')

describe('Queen class', function() {
  it('should inherit from Piece Class', function() {
    let q = new Queen()
    expect(q instanceof Piece )
  });
});
