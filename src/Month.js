import moment from "moment";
import _ from 'lodash';

// get the current month // Number -> 01
// get the days list from the current month: // List -> [{ date: 01, day: Wed }]
// checker: if valid month // Boolean -> True

export default class Month {


  constructor({month = null, accumalator = 1, monthFormat = 'MMMM'} = {}) {
    // Number of the month
    this.month = month;
    this.accumalator = accumalator;
    this.monthFormat = monthFormat;
  }

  // check if the number is the valid one: Number
  checkIfValidMonth = () => {
    let arraryOfMonthList = _.range(1,13);

    if(_.includes(arraryOfMonthList, this.month)) return true ;

    return false;
  }

  // returns the current month
  currentMonth = () => {
    return moment().month();
  }

  // returns the current month
  currentMonthString = () => {
    const monthName = moment().startOf('month').format(this.monthFormat);

    return monthName; // JANUARY
  }

  // return the list of days for the current month
  // example: [ { date: 1, day: 'friday'}, ....]
  currentMonthDaysList = () => {
    if(!this.checkIfValidMonth()) return "Invalid Month Selected";

    let numberOfDaysInMonth = moment().daysInMonth();

    let daysList = [];
    let dayMap = new Map;

    const dateMonth = moment().startOf('month');

    _.range(numberOfDaysInMonth).map(() => {
      dayMap = { date: dateMonth.format('D'), day: dateMonth.format('DDD') };
      daysList.push(dayMap);
      dateMonth.add(this.accumalator, 'day');
    });
    daysList
    return daysList;
  }
}
