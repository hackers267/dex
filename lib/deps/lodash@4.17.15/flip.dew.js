import { dew as _createWrapDewDew } from "./_createWrap.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var createWrap = _createWrapDewDew();
  /** Used to compose bitmasks for function metadata. */


  var WRAP_FLIP_FLAG = 512;
  /**
   * Creates a function that invokes `func` with arguments reversed.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Function
   * @param {Function} func The function to flip arguments for.
   * @returns {Function} Returns the new flipped function.
   * @example
   *
   * var flipped = _.flip(function() {
   *   return _.toArray(arguments);
   * });
   *
   * flipped('a', 'b', 'c', 'd');
   * // => ['d', 'c', 'b', 'a']
   */

  function flip(func) {
    return createWrap(func, WRAP_FLIP_FLAG);
  }

  exports = flip;
  return exports;
}