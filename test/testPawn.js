require('mocha')
const chai = require('chai')
const expect = chai.expect;

const Pawn = require('../app/pieces/Pawn.js')
const Piece = require('../app/pieces/Piece.js')

describe('Pawn class', function() {
  it('should inherit from Piece Class', function() {
    let p = new Pawn()
    expect(p instanceof Piece )
  });

});



//r1 col0
