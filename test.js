
var dayjs = require('dayjs')
var weekday = require('dayjs/plugin/weekday')
dayjs.extend(weekday)

//import dayjs from 'dayjs' // ES 2015

// var day = dayjs().subtract(7, 'day').format('YYYY-MM-DD');
var mon = dayjs().weekday(1).format('YYYY-MM-DD');
// var tue = dayjs().weekday(2).format('YYYY-MM-DD');
// var thu = dayjs().weekday(4).format('YYYY-MM-DD');
// var fri = dayjs().weekday(5).format('YYYY-MM-DD');

// dayjs().format();

console.log(mon);