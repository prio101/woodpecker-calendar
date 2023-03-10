import _ from 'lodash';
import moment from 'moment';


/*
  * TimeSlot class will take 3 init param
  * OpeningHour: Integer
  * ClosingHour: Integer
  * MinimumSlot: Integer
  * bookedSlots: Integer[]
*/

export default class TimeSlots {
  constructor({
                openingHour = 9.00,
                closingHour = 24.00,
                minimumSlot = 1,
                bookedSlots = [] } = {}){

    this.openingHour = openingHour;
    this.closingHour = closingHour;
    this.minimumSlot = minimumSlot;
    this.bookedSlots = bookedSlots;
  }

  // * { booked: true | false, slot: 9 }
  generateResponse = () => {
    let timeSlotsRange = this.createTimeRange();

    let timeSlotMapResults = [];

    timeSlotsRange.map(currentSlot =>{
      let slotObject = {};
      slotObject.slot = currentSlot;
      if(this.isReserved(currentSlot)){
        slotObject.booked = true;
      } else {
        slotObject.booked = false;
      }
      timeSlotMapResults.push(slotObject);
    })

    return timeSlotMapResults;
  }
  // * range: [0,1,2..24]
  createTimeRange = () => {
    let timeSlotsRange = _.range(this.openingHour, this.closingHour);

    return timeSlotsRange;
  }

  // boolean
  isReserved = (slot) => {
    return _.includes(this.bookedSlots, slot);
  }
}
