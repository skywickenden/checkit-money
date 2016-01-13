'use strict';

System.register([], function (_export, _context) {
  function money(value) {
    var mustIncludeDecimals = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
    var allowSymbol = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
    var stringValue = value.toString();
    var valid = true;

    if (mustIncludeDecimals || stringValue.indexOf('.') === -1) {
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

  _export('default', money);

  return {
    setters: [],
    execute: function () {}
  };
});