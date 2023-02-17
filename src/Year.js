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

  collectCurrentYear = (year) =>{
    if(this.checkAndReturnValidYear) return year;

    return moment().year();
  }

  checkAndReturnValidYear = (year) => {
    if(year === null) return false;

    const currentYear = moment().year();

    if(year === currentYear || year > currentYear) return true;

    return false;
  }
}
