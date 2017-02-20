require('mocha')
const chai = require('chai')
const expect = chai.expect;

const Player = require('../app/Player.js')


describe('Player Class', function() {
  it('should have name', function() {
    let name = "fred"
    let p = new Player(name)
    expect(p.hasOwnProperty("name")).to.be.true
    expect(p.name).to.equal(name)
  });
});
