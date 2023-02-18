import moment from "moment";
import _ from 'lodash';
import Month from "../src/Month";


describe('checkIfValidMonth', () => {
  describe('valid input', () => {
    let month = new Month({ month: 1 });

    test('should return the boolean current month', ()=>{
      expect(month.checkIfValidMonth()).toBe(true);
    });
  });

  describe('invalid input', () => {
    let month = new Month({ month: 14 });

    test('should return the boolean current month', ()=>{
      expect(month.checkIfValidMonth()).toBe(false);
    });
  });
});

describe('#currentMonth', () => {
  describe('valid input', () => {
    let month = new Month({ month: 1 });

    test('should return the index of current month', ()=>{
      expect(month.currentMonth()).toBe(1);
    });
  });

  describe('invalid input', () => {
    let month = new Month({ month: 14 });
    let currentMonthIndex = moment().month();

    test('should return the current month', ()=>{
      expect(month.currentMonth()).toBe(currentMonthIndex);
    });
  });
});

describe('#currentMonthString', () => {
  describe('valid input', () => {
    let month = new Month({ month: 1 });

    test('should return the index of current month', ()=>{
      expect(month.currentMonth()).toBe(1);
    });
  });

  describe('invalid input', () => {
    let month = new Month({ month: 14 });
    let currentMonthInString = moment().startOf('month').format('MMMM');

    test('should return the string current month', ()=>{
      expect(month.currentMonthString()).toBe(currentMonthInString);
    });
  });
});

describe('#currentMonthDaysList', () => {
  describe('valid input', () => {
    let month = new Month({ month: 1 });

    test('should return the days list for current month', ()=>{
      let daysList = month.currentMonthDaysList();
      expect(daysList.length).toBe(28);
    });
  });

  describe('invalid input', () => {
    let month = new Month({ month: 14 });
    let errorMessage = "Invalid Month Selected";

    test('should return error for month', ()=>{
      expect(month.currentMonthDaysList()).toBe(errorMessage);
    });
  });
});
