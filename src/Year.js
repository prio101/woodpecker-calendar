// scope of the class Year:
// return the valid year | Boolean
// return validity of the year range | Boolean
// return current year | Number

import moment from "moment";
import _ from 'lodash';

export default class Year {
  constructor({year = null} = {}) {
    this.year = year;
  }

  collectCurrentYear = () =>{
    if(this.checkAndReturnValidYear) return this.year;

    return moment().format('YYYY');
  }

  checkAndReturnValidYear = () => {
    if(this.year === null) return false;

    const currentYear = moment().year();

    if(this.year === currentYear || this.year > currentYear) return true;

    return false;
  }
}
