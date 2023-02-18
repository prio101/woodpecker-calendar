import _ from 'lodash';
import moment from 'moment';

import Calendar from './Calendar';
import Month from './Month';
import Year from './Year';
import { TimeSlots } from './TimeSlots';

let listOfBookedWholeDates = [1,2,3];
let listOfBookedPartialDates = [10,20];


let listOfBookedSlots = [];

let year = new Year({ year: 2023 });
console.log(year.checkAndReturnValidYear());
console.log(year.collectCurrentYear());
