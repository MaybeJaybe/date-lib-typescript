/* eslint-disable class-methods-use-this */
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
console.log('YEARS');
console.log('25 years ago');
const a = new D(1997, 3, 17);
console.log(a.when());
console.log('2 years ago');
const b = new D(2020, 3, 17);
console.log(b.when());
console.log('1 year ago');
const c = new D(2021, 3, 17);
console.log(c.when());
console.log('');

console.log('MONTHS');
console.log('7 months ago');
const e = new D(2021, 8, 19);
console.log(e.when());
console.log('1 month ago');
const f = new D(2022, 2, 17);
console.log(f.when());
console.log('');

console.log('WEEKS');
console.log('3 weeks ago');
const h = new D(2022, 3, 4);
console.log(h.when());
console.log('2 weeks ago');
const i = new D(2022, 3, 12);
console.log(i.when());
console.log('1 week ago');
const j = new D(2022, 3, 15);
console.log(j.when());
console.log('');

console.log('DAYS');
console.log('7 days ago');
const k = new D(2022, 3, 16);
console.log(k.when());
console.log('5 days ago');
const l = new D(2022, 3, 18);
console.log(l.when());
console.log('2 days ago');
const m = new D(2022, 3, 21);
console.log(m.when());

console.log('DAYS');

console.log('4 days from now');
const s = new D(2022, 3, 27);
console.log(s.when());
console.log('6 days from now');
const t = new D(2022, 3, 29);
console.log(t.when());
console.log('');

console.log('WEEKS');
console.log('1 week from now');
const u = new D(2022, 3, 30);
console.log(u.when());
console.log('3 weeks from now');
const v = new D(2022, 4, 13);
console.log(v.when());
console.log('4 weeks from now');
const w = new D(2022, 4, 20);
console.log(w.when());
console.log('');

console.log('MONTHS');
console.log('1 month from now');
const x = new D(2022, 4, 21);
console.log(x.when());
console.log('3 months from now');
const y = new D(2022, 6, 22);
console.log(y.when());
console.log('');

console.log('YEARS');
console.log('1 year from now');
const myeh = new D(2023, 3, 23);
console.log(myeh.when());
console.log('4 years from now');
const wow = new D(2026, 3, 22);
console.log(wow.when());

// const someDay = new D(2022, 3, 8, 5, 6, 7);
// const today = new D();
// console.log(someDay.format('Y y O o M m D d, T t - H h : I i : S s'));
// console.log('Y y O o M m D d, T t - H h : I i : S s');
// console.log(someDay.format('y/m/t'));
// console.log('y/m/t');
// console.log(someDay.format('H:I:S'));
// console.log('H:I:S');
// console.log(someDay.format('h:i:s'));
// console.log('h:i:s');
// console.log(someDay.format('Y-M-T h:I:S'));
// console.log('Y-M-T h:I:S');
// console.log(today.format('Y/M/T, O d h:I '));

module.exports = D;
