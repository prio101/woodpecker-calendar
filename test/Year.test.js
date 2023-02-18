import moment from "moment";
import _ from 'lodash';
import Year from "../src/Year";


describe('checkAndReturnValidYear', () => {
  describe('with valid year input', () => {
    let selectedYear = 2023;
    let year = new Year({ year: selectedYear })

    test('should return the true for valid year', () => {
      expect(year.checkAndReturnValidYear()).toBe(true);
    });

    test('should return the current valid year', () => {
      expect(year.collectCurrentYear()).toBe(selectedYear);
    });

  });

  describe('with invalid year input', () => {
    let currentYear = _.toInteger(moment().format('YYYY'));
    let selectedYear = 2022;
    let invalid_year = new Year({ year: selectedYear })

    test('should return the false for invalid year', () => {
      expect(invalid_year.checkAndReturnValidYear()).toBe(false);
    });

    test('should return the current valid year for an invalid input', () => {
      expect(invalid_year.collectCurrentYear()).toBe(currentYear);
    });
  });
});


