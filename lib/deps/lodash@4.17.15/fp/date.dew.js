import { dew as _convertDewDew } from "./convert.dew.js";
import { dew as _dateDewDew } from "../date.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var convert = _convertDewDew();

  exports = convert(_dateDewDew());
  return exports;
}