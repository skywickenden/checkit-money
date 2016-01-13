/**
 * value {string} The value that is passed in and being checked if
 * it is a valid money value.
 */
export default function (value, mustIncludeDecimals=false, allowSymbol=false) {
  const stringValue = value.toString();
  let valid = true;

  if (mustIncludeDecimals || stringValue.indexOf('.') === -1) {
    if (mustIncludeDecimals && stringValue.indexOf('.') === -1) {
      valid = false;
    } else {
      const decimals = stringValue.split('.')[1];
      if (decimals.length > 2 || decimals.length < 2) {
        valid = false;
      }
    }
  }

  const firstChar = stringValue.charAt(0);
  if (allowSymbol === false) {
    if (/^\d+$/.test(firstChar) === false) {
      valid = false;
    }
  } else {
    if (/^\d+$/.test(firstChar) === false) {
      stringValue = stringValue.substring(1);
    }
  }

  const digits = stringValue.replace('.', '');
  if (/^\d+$/.test(digits) === false) {
    valid = false;
  }

  return valid;
}
