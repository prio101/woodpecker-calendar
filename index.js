import _ from 'lodash';
import moment from 'moment';
import Calendar from './src/Calendar';

import TimeSlots from "./src/TimeSlots";

let listOfBookedWholeDates = [1,2,3];
let listOfBookedPartialDates = [10,20];


let listOfBookedSlots = [];

let calendar = new Calendar({ currentSelectedYear: currentSelectedYear,
                              currentSelectedMonth: currentSelectedMonth,
                              listOfBookedWholeDates: listOfBookedWholeDates,
                              listOfBookedPartialDates: listOfBookedPartialDates })

