import Month from "./Month";
import Year from "./Year";



export default class Calendar {
  constructor({currentSelectedYear: currentSelectedYear, currentSelectedmonth: currentSelectedMonth, listOfBookedDates = [], listOfBookedSlots = []} = {}){
    this.currentSelectedYear = currentSelectedYear;
    this.currentSelectedMonth = currentSelectedMonth;
    this.listOfBookedDates = listOfBookedDates;
    this.listOfBookedSlots = listOfBookedSlots;
  }

  getListOfMonthDays = () => {
    let year = new Year({year: this.currentSelectedYear});
    if(!year.checkAndReturnValidYear) return "Invalid Year Selected";

    let month = new Month({month: 1});
    let dayList = month.currentMonthDaysList;


  }
}
