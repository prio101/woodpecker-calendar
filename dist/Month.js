"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _moment = _interopRequireDefault(require("moment"));
var _lodash = _interopRequireDefault(require("lodash"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// get the current month // Number -> 01
// get the days list from the current month: // List -> [{ date: 01, day: Wed }]
// checker: if valid month // Boolean -> True
var Month = /*#__PURE__*/_createClass(function Month() {
  var _this = this;
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$month = _ref.month,
    month = _ref$month === void 0 ? null : _ref$month,
    _ref$accumalator = _ref.accumalator,
    accumalator = _ref$accumalator === void 0 ? 1 : _ref$accumalator,
    _ref$monthFormat = _ref.monthFormat,
    monthFormat = _ref$monthFormat === void 0 ? 'MMMM' : _ref$monthFormat;
  _classCallCheck(this, Month);
  _defineProperty(this, "checkIfValidMonth", function (monthNumber) {
    arraryOfMonthList = _lodash["default"].range(1, 13);
    if (_lodash["default"].includes(arraryOfMonthList, monthNumber)) return monthNumber;
    return _this.currentMonth;
  });
  _defineProperty(this, "currentMonth", function () {
    (0, _moment["default"])().month();
  });
  _defineProperty(this, "currentMonthString", function () {
    var monthName = (0, _moment["default"])().startOf('month').format(_this.monthFormat);
    return monthName;
  });
  _defineProperty(this, "currentMonthDaysList", function () {
    var numberOfDaysInMonth = (0, _moment["default"])().daysInMonth();
    var daysList = [];
    var dayMap = new Map();
    var dateMonth = (0, _moment["default"])().startOf('month');
    _lodash["default"].range(numberOfDaysInMonth).map(function () {
      dayMap = {
        date: dateMonth.format('dd'),
        day: dateMonth.format('DDD')
      };
      daysList.push(dayMap);
      dateMonth.add(_this.accumalator, 'day');
    });
    return daysList;
  });
  // Number of the month
  this.month = checkIfValidMonth(month);
  this.accumalator = accumalator;
  this.monthFormat = monthFormat;
}

// check if the number is the valid one: Number
);
exports["default"] = Month;