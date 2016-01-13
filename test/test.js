var assert = require('assert');

import money from '../src/money';
describe('Money', function() {
  describe('Default settings', function () {
    it('should be true when the value is an integer', function () {
      assert.equal(money(23), true);
    });
    it('should be true when the value is a decimal', function () {
      assert.equal(money(23.45), true);
    });
    it('should be false when the value is a string that does not represent a number.', function () {
      assert.equal(money('foo'), false);
    });
    it('should be false when the value does not have exactly two numbers after the decimal point.', function () {
      assert.equal(money(23.4), false);
      assert.equal(money(23.456), false);
    });
    it('should be true when the value is a valid string.', function () {
      assert.equal(money('23.45'), true);
    });
    it('should be false when the value is not a string or number.', function () {
      assert.equal(money({foo: 'bar'}), false);
      assert.equal(money(['foo']), false);
      assert.equal(money(() => {}), false);
    });
    it('should be false when there is a symbol.', function () {
      assert.equal(money('£23.45'), false);
    });
  });

  describe('mustIncludeDecimals is set to true', function () {
    it('should be false when the value is an integer', function () {
      assert.equal(money(23, true), false);
    });
    it('should be true when the value is a decimal', function () {
      assert.equal(money(23.45, true), true);
    });
    it('should be false when the value is a decimal with the wrong number of decimal places.', function () {
      assert.equal(money(23.4), false);
      assert.equal(money(23.456), false);
    });
  });

  describe('allowSymbol is set to true', function () {
    it('should be true when there is a symbol.', function () {
      assert.equal(money('£23.45', true, true), true);
    });
    it('should be false when there is more than one symbol.', function () {
      assert.equal(money('£$23.45', true, true), false);
    });
    it('should be true when the value is an integer.', function () {
      assert.equal(money('£23.45', false, true), true);
    });
    it('should be true when the value does not have a symbol.', function () {
      assert.equal(money('23.45', false, true), true);
    });
  });
});
