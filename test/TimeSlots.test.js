import _ from 'lodash';
import moment from 'moment';
import TimeSlots from '../src/TimeSlots';


describe('#createTimeRange', () => {
  describe('with provided hours data', () => {
    let timeSlot = new TimeSlots({ openingHour: 9, closingHour: 12, minimumSlot: 1 })
    test('will return the hours range', () =>{
      expect(timeSlot.createTimeRange().length).toBe(3);
    });
  });

  describe('without provided hours data', () => {
    let timeSlot = new TimeSlots({ minimumSlot: 1 })
    test('will return the hours range', () =>{
      expect(timeSlot.createTimeRange().length).toBe(15);
    });
  });

  describe('without provided hours data', () => {
    let timeSlot = new TimeSlots({ minimumSlot: 1 })
    test('will return the minimum slot', () =>{
      expect(timeSlot.minimumSlot).toBe(1);
    });
  });
});

describe('#slot',()=> {
  describe('with valid input', () =>{
    let timeSlots = new TimeSlots({ bookedSlots: [12] })
    let slot = 12;
    test('should return true for the booked slots', () =>{
      expect(timeSlots.isReserved(slot)).toBeTruthy();
    });
  });

  describe('with invalid input', () =>{
    let timeSlots = new TimeSlots({ bookedSlots: [12] })
    let slot = 25;
    test('should return false for the booked slots', () =>{
      expect(timeSlots.isReserved(slot)).toBeFalsy();
    });
  });
});


describe('#createTimeRange',()=> {
  describe('with valid input', () =>{
    let timeSlots = new TimeSlots({ openingHour: 0, closingHour: 24 })
    let expectedTimeRange = _.range(0,24);
    test('should return same range of slots', () =>{
      expect(timeSlots.createTimeRange().length).toBe(expectedTimeRange.length);
      expect(timeSlots.createTimeRange()[0]).toBe(expectedTimeRange[0]);
      expect(timeSlots.createTimeRange()[24]).toBe(expectedTimeRange[24]);
    });
  });
});

describe('#generateResponse',()=> {
  describe('with valid input', () =>{
    let timeSlots = new TimeSlots({ openingHour: 0,
                                    closingHour: 24,
                                    bookedSlots: [0,12,13,15]
                                  })
    let expectedTimeObject = { slot: 0, booked: true };
    test('should return same range of slots', () =>{
      expect(timeSlots.generateResponse()[0].booked).toBe(expectedTimeObject.booked);
      expect(timeSlots.generateResponse()[0].slot).toBe(expectedTimeObject.slot);
    });
  });
});

