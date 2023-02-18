"use strict";

var _lodash = _interopRequireDefault(require("lodash"));
var _moment = _interopRequireDefault(require("moment"));
var _Calendar = _interopRequireDefault(require("./Calendar"));
var _Month = _interopRequireDefault(require("./Month"));
var _Year = _interopRequireDefault(require("./Year"));
var _TimeSlots = require("./TimeSlots");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var listOfBookedWholeDates = [1, 2, 3];
var listOfBookedPartialDates = [10, 20];
var listOfBookedSlots = [];
var year = new _Year["default"]({
  year: 2023
});
console.log(year.checkAndReturnValidYear());
console.log(year.collectCurrentYear());