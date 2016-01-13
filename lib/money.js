'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = money;
/**
 * value {string} The value that is passed in and being checked if
 * it is a valid money value.
 */
function money(value, mustIncludeDecimals, allowSymbol) {
  // Using es6 defaults results in wierd behavoir due to the
  // way checkit passes in paramaters.
  if (mustIncludeDecimals === undefined) mustIncludeDecimals = false;
  if (allowSymbol === undefined) allowSymbol = false;

  var stringValue = value.toString();
  var valid = true;

  if (mustIncludeDecimals || stringValue.indexOf('.') !== -1) {
    if (mustIncludeDecimals && stringValue.indexOf('.') === -1) {
      valid = false;
    } else {
      var decimals = stringValue.split('.')[1];
      if (decimals.length > 2 || decimals.length < 2) {
        valid = false;
      }
    }
  }

  var firstChar = stringValue.charAt(0);
  if (allowSymbol === false) {
    if (/^\d+$/.test(firstChar) === false) {
      valid = false;
    }
  } else {
    if (/^\d+$/.test(firstChar) === false) {
      stringValue = stringValue.substring(1);
    }
  }

  var digits = stringValue.replace('.', '');
  if (/^\d+$/.test(digits) === false) {
    valid = false;
  }

  return valid;
}