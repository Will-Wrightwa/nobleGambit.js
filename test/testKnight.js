require('mocha')
const chai = require('chai')
const expect = chai.expect;

const Knight = require('../app/pieces/Knight.js')
const Piece = require('../app/pieces/Piece.js')

describe('Knight class', function() {
  it('should have name attribute', function() {
    let kn = new Knight()
    expect(kn.name).to.equal("knight")
  });
  it('should inherit from Piece Class', function() {
    let kn = new Knight()
    expect(kn instanceof Piece )
  });
});
