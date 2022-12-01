/* eslint-disable class-methods-use-this */
const { months, mos, days, dys } = require('./utils');

/**
 * This function puts a 0 before any number less than 10
 * @param {number} if number less than 10
 * @returns {string} converts number to string with 0 in front
 */

function padding(num) {
  if (num < 10) {
    return `0${num.toString()}`;
  }
  return num;
}

/**
 * class create new date
 */
class D {
  constructor(...args) {
    this.dateObj = new Date(...args);
  }

  /**
   * getter method for year number
   * @example 2022
   */
  get year() {
    return this.dateObj.getFullYear();
  }

  /**
   * getter method for abbreviated year number
   * @example 22
   */
  get yr() {
    return this.dateObj.getFullYear() % 100;
  }

  /**
   * getter method for month name
   * @example July
   */
  get month() {
    return months[this.dateObj.getMonth()];
  }

  /**
   * getter method for abbreviated month name
   * @example Jul
   */
  get mo() {
    return mos[this.dateObj.getMonth()];
  }

  /**
   * getter method for month date using padding function
   * @example 07
   */
  get numMonth() {
    return padding(this.dateObj.getMonth() + 1);
  }

  /**
   * getter method for month date
   * @example 7
   */
  get numMo() {
    return (this.dateObj.getMonth() + 1);
  }

  /**
   * getter method for day name
   * @example Tuesday
   */
  get day() {
    return days[this.dateObj.getDay()];
  }

  /**
   * getter method for abbreviated day name
   * @example Tues
   */
  get dy() {
    return dys[this.dateObj.getDay()];
  }

  /**
   * getter method for day date using padding function
   * @example 08
   */
  get date() {
    return padding(this.dateObj.getDate());
  }

  /**
   * getter method for day date
   * @example 8
   */
  get dt() {
    return this.dateObj.getDate();
  }

  /**
   * getter method for hour number using padding function
   * @example 08
   */
  get hour() {
    return padding(this.dateObj.getHours());
  }

  /**
   * getter method for hour number
   * @example 8
   */
  get hr() {
    return this.dateObj.getHours();
  }

  /**
   * getter method for minute number using padding function
   * @example 06
   */
  get mins() {
    return padding(this.dateObj.getMinutes());
  }

  /**
   * getter method for minute number
   * @example 6
   */
  get min() {
    return this.dateObj.getMinutes();
  }

  /**
   * getter method for seconds number using padding function
   * @example 04
   */
  get secs() {
    return padding(this.dateObj.getSeconds());
  }

  /**
   * getter method for seconds number
   * @example 4
   */
  get sec() {
    return this.dateObj.getSeconds();
  }

  /**
   * format a mask for date codes
   * @param {string} matches special chars with date getter methods
   * @returns {string} date string after being looped through to match given date with special chars
   */

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
        D: this.date,
        d: this.dt,
        T: this.day,
        t: this.dy,
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

  /**
   * when method calculates difference between given dates
   * @returns readable length of time value from current time
   * @example (given date) is 3 weeks from today
   */

  when() {
    const now = new Date();
    const dy = this.dateObj.getFullYear() - now.getFullYear();
    const dm = this.dateObj.getMonth() - now.getMonth();
    const totalMonths = dy * 12 + dm;
    const dd = (now - this.dateObj) / 86400 / 1000 + 1;
    const dw = dd / 7;
    const ddRound = Math.round(dd);
    const dwRound = Math.round(dw);

    if (Math.abs(dd) < 7) {
      return `${Math.abs(ddRound)} day${Math.abs(ddRound) > 1 ? 's' : ''} ${ddRound > 0 ? 'ago' : 'from now'}`;
    } if (Math.abs(dw) < 4) {
      return `${Math.abs(dwRound)} week${Math.abs(dwRound) > 1 ? 's' : ''} ${dwRound > 0 ? 'ago' : 'from now'}`;
    } if (Math.abs(totalMonths) < 12) {
      return `${Math.abs(totalMonths)} month${Math.abs(totalMonths) > 1 ? 's' : ''} ${totalMonths < 0 ? 'ago' : 'from now'}`;
    } if (Math.abs(dy) >= 1) {
      return `${Math.abs(dy)} year${Math.abs(dy) > 1 ? 's' : ''} ${dy < 0 ? 'ago' : 'from now'}`;
    }
  }
}

module.exports = D;
