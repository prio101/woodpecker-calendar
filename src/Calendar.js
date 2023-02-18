import moment from 'moment';
import _ from 'lodash';

import Month from "./Month";
import Year from "./Year";
import TimeSlots from './TimeSlots';



export default class Calendar {
  constructor({
              currentSelectedYear: currentSelectedYear,
              currentSelectedmonth: currentSelectedMonth,
              listOfBookedDates = [],
              listOfBookedSlots = [],
              weekends = ['fri', 'sat'],
              holidays = [] } = {}) {

    // * initializing all the required or default datasets.
    this.currentSelectedYear = currentSelectedYear; // Integer
    this.currentSelectedMonth = currentSelectedMonth; // Index
    this.listOfBookedDates = listOfBookedDates; // Integer[]
    this.listOfBookedSlots = listOfBookedSlots; // Integer[]
    this.weekends = weekends; // String['day'| 'fri']
    this.holidays = holidays; // Integer[] : Holidays in the current month.
  }

  /*
    * response maker:
    ? This Method will generate the calendar response list

    * expected response:
    example: {
               weekend: true | false,
               holiday: true | false,
               day: 'wed',
               date: 01,
               partially_booked: true | false,
               totally_booked: true | false,
               timeSlots: []
             }
  */
  getListOfMonthDaysAsResponse = () => {
    let year = new Year({year: this.currentSelectedYear });
    if(!year.checkAndReturnValidYear()) return "Invalid Year Selected";

    let month = new Month({month: this.currentSelectedMonth });
    if(!month.checkIfValidMonth()) return "Invalid month selected";

    let dayList = month.currentMonthDaysList();

    dayList.map((dayObject) => {
      // * loop through different func and populate data
      // ? single place to create the response.
      this.addDataWeekend(dayObject);
      this.addDataHoliday(dayObject);
      this.addDataTotallyBooked(dayObject);
      this.addTimeSlots(dayObject);
    })

    return dayList;
  }

  // * object: { day: 'fri', date: 1  }
  addTimeSlots = (dayObject) => {
    let timeSlots = new TimeSlots({ bookedSlots: this.listOfBookedSlots });

    dayObject.timeSlots = timeSlots.generateResponse();

    return dayObject;
  }

  // * object: { day: 'fri', date: 1 }
  addDataTotallyBooked = (dayObject) => {
    dayObject.totallyBooked = _.includes( this.listOfBookedDates, dayObject.date );
    return dayObject;
  }

  // * object: { day: 'fri', date: 01 }
  addDataHoliday = (dayObject) => {
    dayObject.holiday = this.isHoliday(dayObject);

    return dayObject;
  }

  // * object: { day: 'fri', date: 01 }
  addDataWeekend = (dayObject) => {
    dayObject.weekend = this.isWeekEnd(dayObject);

    return dayObject;
  }

  // * object: { day: 'fri', date: 01 }
  isWeekEnd = (dayObject) => {
    if(_.includes(this.weekends, dayObject.day)) return true;

    return false;
  }

  isHoliday = (dayObject) => {
    // * object: { day: 'fri', date: 01 }
    if(_.includes(this.holidays, dayObject.date)) return true;

    return false;
  }
}
