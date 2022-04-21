/* eslint-disable lines-between-class-members */
const { months, mos, days, dys } = require('./utils');

function padding(num) {
  if (num < 10) {
    return `0${num.toString()}`;
  }
  return num;
}

class D {
  constructor(...args) {
    this.dateObj = new Date(...args);
  }
  // full year, 2022
  get year() {
    return this.dateObj.getFullYear();
  }
  // short year, 22
  get yr() {
    return this.dateObj.getFullYear() % 100;
  }
  // full month, July
  get month() {
    return months[this.dateObj.getMonth()];
  }
  // short month, Jul
  get mo() {
    return mos[this.dateObj.getMonth()];
  }
  // num month, 08
  get numMonth() {
    return padding(this.dateObj.getMonth() + 1);
  }
  // num month, 8
  get numMo() {
    return (this.dateObj.getMonth() + 1);
  }
  // full day, Tuesday
  get day() {
    return days[this.dateObj.getDay()];
  }
  // short day, Tues
  get dy() {
    return dys[this.dateObj.getDay()];
  }
  // date, 08
  get date() {
    return padding(this.dateObj.getDate());
  }
  // date, 8
  get dt() {
    return this.dateObj.getDate();
  }
  // hour, 08
  get hour() {
    return padding(this.dateObj.getHours());
  }
  // hour, 8
  get hr() {
    return this.dateObj.getHours();
  }
  // minutes, 06
  get mins() {
    return padding(this.dateObj.getMinutes());
  }
  // minutes, 6
  get min() {
    return this.dateObj.getMinutes();
  }
  // seconds, 04
  get secs() {
    return padding(this.dateObj.getSeconds());
  }
  // seconds, 4
  get sec() {
    return this.dateObj.getSeconds();
  }

  format(mask = '') {
    let dateStr = '';

    for (let i = 0; i < mask.length; i += 1) {
      const specialChars = {
        Y: this.year,
        y: this.yr,
        O: this.month,
        o: this.mo,
        M: this.numMonth,
        m: this.numMo,
        D: this.day,
        d: this.dy,
        T: this.date,
        t: this.dt,
        H: this.hour,
        h: this.hr,
        I: this.mins,
        i: this.min,
        S: this.secs,
        s: this.sec,
      };

      if (specialChars[mask[i]] !== undefined) {
        dateStr += specialChars[mask[i]];
      } else {
        dateStr += mask[i];
      }
    }
    return dateStr;
  }
}

const someDay = new D(2022, 3, 8, 5, 6, 7);
const today = new D();
console.log(someDay.format('Y y O o M m D d, T t - H h : I i : S s'));
console.log('Y y O o M m D d, T t - H h : I i : S s');
console.log(someDay.format('y/m/t'));
console.log('y/m/t');
console.log(someDay.format('H:I:S'));
console.log('H:I:S');
console.log(someDay.format('h:i:s'));
console.log('h:i:s');
console.log(someDay.format('Y-M-T h:I:S'));
console.log('Y-M-T h:I:S');
console.log(today.format('Y/M/T, O d h:I '));

module.exports = D;
