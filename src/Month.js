import moment from "moment";
import _ from 'lodash';

// get the current month
// get the days list from the current month
// checker: if valid month

export default class Month {


  constructor({month = null, accumalator = 1} = {}) {
    // Number of the month
    this.month = checkIfValidMonth(month);
    this.accumalator = accumalator;
  }

  // check if the number is the valid one: Number
  checkIfValidMonth = (monthNumber) => {
    arraryOfMonthList = _.range(1,13);

    if(_.includes(arraryOfMonthList, monthNumber)) return monthNumber ;

    return this.currentMonth;
  }

  // returns the current month
  currentMonth = () => {
    moment().month();
  }

  // returns the current month
  currentMonth = () => {
    moment().month();
  }


  // return the list of days for the current month
  // example: [ { date: 1, day: 'fryday'}, ....]
  currentMonthDaysList = () => {
    let numberOfDaysInMonth = moment().daysInMonth();

    let daysList = [];
    let dayMap = new Map;

    const dateMonth = moment().startOf('month');

    _.range(numberOfDaysInMonth).map(() => {
      dayMap = { date: dateMonth.format('dd'), day: dateMonth.format('DDD') };
      daysList.push(dayMap);
      dateMonth.add(this.accumalator, 'day');
    });

    return daysList;
  }
}
