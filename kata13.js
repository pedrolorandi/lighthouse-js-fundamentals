const talkingCalendar = function(date) {
  let year, month, monthName, day, nth;

  year = date.substring(0, 4);
  month = parseInt(date.substring(5, 7))-1;
  monthName = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  day = parseInt(date.substring(8, 10));

  nth = (day) => {
    switch (day){
      case 1:
      case 21:
      case 31: 
        return 'st';
      case 2: 
      case 22:
        return 'nd';
      case 3:
      case 23:
        return 'rd';
      default: 
        return 'th';
    }
  }

  return monthName[month] + " " + day + nth(day) + ", " + year;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));