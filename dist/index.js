"use strict";

var _lodash = _interopRequireDefault(require("lodash"));
var _moment = _interopRequireDefault(require("moment"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import Calendar from './src/Calendar';

// import TimeSlots from './src/TimeSlots';

let listOfBookedWholeDates = [1, 2, 3];
let listOfBookedPartialDates = [10, 20];
let listOfBookedSlots = [];

// let calendar = new Calendar({ currentSelectedYear: currentSelectedYear,
//                               currentSelectedMonth: currentSelectedMonth,
//                               listOfBookedWholeDates: listOfBookedWholeDates,
//                               listOfBookedPartialDates: listOfBookedPartialDates })