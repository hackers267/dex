import { dew as _createPaddingDewDew } from "./_createPadding.dew.js";
import { dew as _stringSizeDewDew } from "./_stringSize.dew.js";
import { dew as _toIntegerDewDew } from "./toInteger.dew.js";
import { dew as _toStringDewDew } from "./toString.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var createPadding = _createPaddingDewDew(),
      stringSize = _stringSizeDewDew(),
      toInteger = _toIntegerDewDew(),
      toString = _toStringDewDew();
  /**
   * Pads `string` on the right side if it's shorter than `length`. Padding
   * characters are truncated if they exceed `length`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category String
   * @param {string} [string=''] The string to pad.
   * @param {number} [length=0] The padding length.
   * @param {string} [chars=' '] The string used as padding.
   * @returns {string} Returns the padded string.
   * @example
   *
   * _.padEnd('abc', 6);
   * // => 'abc   '
   *
   * _.padEnd('abc', 6, '_-');
   * // => 'abc_-_'
   *
   * _.padEnd('abc', 3);
   * // => 'abc'
   */


  function padEnd(string, length, chars) {
    string = toString(string);
    length = toInteger(length);
    var strLength = length ? stringSize(string) : 0;
    return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
  }

  exports = padEnd;
  return exports;
}