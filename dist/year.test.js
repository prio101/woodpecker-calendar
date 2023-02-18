"use strict";

var _Year = _interopRequireDefault(require("../src/Year"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
test('should return the true for valid year', function () {
  var year = new _Year["default"]({
    year: 2023
  });
  expect(year.checkAndReturnValidYear()).toBe(true);
});