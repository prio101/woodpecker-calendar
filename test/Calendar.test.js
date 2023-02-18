import moment from "moment";
import _ from 'lodash';
import Calendar from "../src/Calendar";


describe('#isWeekEnd', () =>{
  describe('with default input', () => {
    let calendar = new Calendar({ currentSelectedYear: 2023, currentSelectedmonth: 1});
    let dayObject = { day: 'fri', date: 1 };

    test('should return true for friday',()=>{
      expect(calendar.isWeekEnd(dayObject)).toBe(true);
    })
  });

  describe('with provided input', () => {
    let calendar = new Calendar({ currentSelectedYear: 2023, currentSelectedmonth: 1, weekends: ['sat', 'sun']});
    let dayObject = { day: 'fri', date: 1 };

    test('should return true for friday',()=>{
      expect(calendar.isWeekEnd(dayObject)).toBe(false);
    })
  });

  describe('with invalid input', () => {
    let calendar = new Calendar({ currentSelectedYear: 2023, currentSelectedmonth: 1});
    let dayObject = { day: 'sun', date: 1 };

    test('should return true for friday',()=>{
      expect(calendar.isWeekEnd(dayObject)).toBe(false);
    })
  });
});

describe('#isHoliday', () => {
  describe('with valid input set', () => {
    let calendar = new Calendar({ currentSelectedYear: 2023, currentSelectedmonth: 1, holidays: [1, 10]});
    let dayObject = { day: 'sun', date: 1 };

    test('should return true for the input', () => {
      expect(calendar.isHoliday(dayObject)).toBe(true);
    });
  });

  describe('with invalid input set', () => {
    let calendar = new Calendar({ currentSelectedYear: 2023, currentSelectedmonth: 1, holidays: [1, 10]});
    let dayObject = { day: 'sun', date: 28 };

    test('should return false for the input', () => {
      expect(calendar.isHoliday(dayObject)).toBe(false);
    });
  });

  describe('with default input set', () => {
    let calendar = new Calendar({ currentSelectedYear: 2023, currentSelectedmonth: 1 });
    let dayObject = { day: 'sun', date: 28 };

    test('should return false for the input', () => {
      expect(calendar.isHoliday(dayObject)).toBe(false);
    });
  });
});


describe('#addDataWeekend', () => {
  describe('with valid input set', () => {
    let calendar = new Calendar({ currentSelectedYear: 2023, currentSelectedmonth: 1, holidays: [1, 10]});
    let dayObject = { day: 'sat', date: 1 };
    let expectedDayObject = { day: 'sat', date: 28, weekend: true }

    test('should return true for the input', () => {
      expect(calendar.addDataWeekend(dayObject).weekend).toBe(expectedDayObject.weekend);
    });
  });

  describe('with invalid input set', () => {
    let calendar = new Calendar({ currentSelectedYear: 2023, currentSelectedmonth: 1, holidays: [1, 10]});
    let dayObject = { day: 'fri', date: 28 };
    let expectedDayObject = { day: 'fri', date: 28, weekend: true }

    test('should return false for the input', () => {
      expect(calendar.addDataWeekend(dayObject).weekend).toBe(expectedDayObject.weekend);
    });
  });

  describe('with default input set', () => {
    let calendar = new Calendar({ currentSelectedYear: 2023, currentSelectedmonth: 1 });
    let dayObject = { day: 'sun', date: 28 };
    let expectedDayObject = { day: 'sun', date: 28, weekend: false }

    test('should return false for the input', () => {
      expect(calendar.addDataWeekend(dayObject).weekend).toBe(expectedDayObject.weekend);
    });
  });
});

describe('#addDataHoliday', () => {
  let calendar = new Calendar({
    currentSelectedYear: 2023,
    currentSelectedmonth: 1,
    holidays: [1, 10]
  });

  describe('with valid input set', () => {

    let dayObject = { day: 'sat', date: 1 };
    let expectedDayObject = { day: 'sat', date: 28, holiday: true }

    test('should return true for the input', () => {
      expect(calendar.addDataHoliday(dayObject).holiday).toBe(expectedDayObject.holiday);
    });
  });

  describe('with invalid input set', () => {
    let dayObject = { day: 'sat', date: 22 };
    let expectedDayObject = { day: 'sat', date: 22, holiday: false }

    test('should return true for the input', () => {
      expect(calendar.addDataHoliday(dayObject).holiday).toBe(expectedDayObject.holiday);
    });
  });
});

describe('#addDataTotallyBooked', () => {
  let calendar = new Calendar({
    currentSelectedYear: 2023,
    currentSelectedmonth: 1,
    holidays: [1, 10],
    listOfBookedDates: [1,2]
  });

  describe('with valid input set', () => {

    let dayObject = { day: 'sat', date: 1 };
    let expectedDayObject = { day: 'sat', date: 28, totallyBooked: true }

    test('should return true for the input', () => {
      expect(calendar.addDataTotallyBooked(dayObject).totallyBooked)
        .toBe(expectedDayObject.totallyBooked);
    });
  });

  describe('with invalid input set', () => {
    let dayObject = { day: 'sat', date: 22 };
    let expectedDayObject = { day: 'sat', date: 22, totallyBooked: false }

    test('should return true for the input', () => {
      expect(calendar.addDataTotallyBooked(dayObject).totallyBooked)
        .toBe(expectedDayObject.totallyBooked);
    });
  });
});

describe('#getListOfMonthDaysAsResponse', () => {
  let calendar = new Calendar({
    currentSelectedYear: 2023,
    currentSelectedmonth: 1,
    holidays: [1, 10],
    listOfBookedDates: [1,2]
  });

  describe('with valid input set', () => {
    test('should return array list for the month', () => {
      expect(calendar.getListOfMonthDaysAsResponse().length)
        .toBeGreaterThan(0);
    });

    test('should return day string for the month first day', () => {
      expect(calendar.getListOfMonthDaysAsResponse()[0].day)
        .not.toBe(null);
    });

    test('should return date integer for the month first day', () => {
      let dayObject = calendar.getListOfMonthDaysAsResponse()[0];
      expect(_.toInteger(dayObject.date))
        .toBe(1);
    });

    test('should return date integer for the month 19 day', () => {
      let dayObject = calendar.getListOfMonthDaysAsResponse()[19];
      expect(_.toInteger(dayObject.date))
        .toBe(20);
    });

    test('should return weekend true | false for the month first day', () => {
      let weekend = calendar.getListOfMonthDaysAsResponse()[0].weekend

      expect(weekend).not.toBe(null);
    });
  });
});
