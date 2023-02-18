"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Month = _interopRequireDefault(require("./Month"));
var _Year = _interopRequireDefault(require("./Year"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Calendar = /*#__PURE__*/_createClass(function Calendar() {
  var _this = this;
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    currentSelectedYear = _ref.currentSelectedYear,
    currentSelectedMonth = _ref.currentSelectedmonth,
    _ref$listOfBookedDate = _ref.listOfBookedDates,
    listOfBookedDates = _ref$listOfBookedDate === void 0 ? [] : _ref$listOfBookedDate,
    _ref$listOfBookedSlot = _ref.listOfBookedSlots,
    listOfBookedSlots = _ref$listOfBookedSlot === void 0 ? [] : _ref$listOfBookedSlot;
  _classCallCheck(this, Calendar);
  _defineProperty(this, "getListOfMonthDays", function () {
    var year = new _Year["default"]({
      year: _this.currentSelectedYear
    });
    if (!year.checkAndReturnValidYear) return "Invalid Year Selected";
    var month = new _Month["default"]({
      month: 1
    });
    var dayList = month.currentMonthDaysList;
  });
  this.currentSelectedYear = currentSelectedYear;
  this.currentSelectedMonth = currentSelectedMonth;
  this.listOfBookedDates = listOfBookedDates;
  this.listOfBookedSlots = listOfBookedSlots;
});
exports["default"] = Calendar;