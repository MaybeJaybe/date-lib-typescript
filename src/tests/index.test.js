const D = require('../index');
const { months, mos, days, dys } = require('../utils');

const today = new Date();
const d = new D(today);
const bday = new D('4/17/1997');
const random = new D(2022, 7, 2, 5, 2, 20);

test('D.year', () => {
  expect(d.year).toBe(today.getFullYear());
  expect(bday.year).toBe(1997);
  expect(random.year).toBe(2022);
});

test('D.yr', () => {
  expect(d.yr).toBe(today.getFullYear() % 100);
  expect(bday.yr).toBe(97);
});

test('D.month', () => {
  expect(bday.month).toBe(months[3]);
  expect(bday.month).toBe('April');
  expect(random.month).toBe('August');
});

test('D.mo', () => {
  expect(bday.mo).toBe(mos[3]);
  expect(bday.mo).toBe('Apr');
  expect(random.mo).toBe('Aug');
});

test('D.numMonth', () => {
  expect(bday.numMonth).toBe('04');
  expect(random.numMonth).toBe('08');
});

test('D.numMo', () => {
  expect(bday.numMo).toBe(4);
  expect(random.numMo).toBe(8);
});

test('D.day', () => {
  expect(bday.day).toBe(days[today.getDay()]);
  expect(bday.day).toBe('Thursday');
  expect(random.day).toBe('Tuesday');
});

test('D.dy', () => {
  expect(bday.dy).toBe(dys[today.getDay()]);
  expect(bday.dy).toBe('Thurs');
  expect(random.dy).toBe('Tues');
});

test('D.date', () => {
  expect(d.date).toBe(today.getDate());
  expect(bday.date).toBe(17);
  expect(random.date).toBe('02');
});

test('D.dt', () => {
  expect(bday.dt).toBe(17);
  expect(random.dt).toBe(2);
});

test('D.hour', () => {
  expect(random.hour).toBe('05');
});

test('D.hr', () => {
  expect(d.hr).toBe(today.getHours());
  expect(random.hr).toBe(5);
});

test('D.mins', () => {
  expect(random.mins).toBe('02');
});

test('D.min', () => {
  expect(d.min).toBe(today.getMinutes());
  expect(random.min).toBe(2);
});

test('D.secs', () => {
  expect(random.secs).toBe(20);
});

test('D.sec', () => {
  expect(d.sec).toBe(today.getSeconds());
  expect(random.sec).toBe(20);
});
