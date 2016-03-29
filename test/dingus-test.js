//webpack requires that you explicitly include any frameworks you're using
const assert = require('chai').assert;
const Dingus = require('../lib/dingus');

describe('Dingus', function(){
  context('with default attributes', function(){
    it('sets default attributes', function(){
      // Create an instance of dingus
      let dingus = new Dingus({});
      // Test that it starts with a default x,y coordinate
      let defaultX = 0;
      let defaultY= 0;
      assert.equal(dingus.x, defaultX, 'No default x value on Dingus');
      assert.equal(dingus.y, defaultY, 'No default y value on Dingus');
      // Test that it starts with a default height/width
    });
  });
});
