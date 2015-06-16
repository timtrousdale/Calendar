var year = 2016;
var today = new Date("January 1, "+ year);
var startDay = today.getDay() + 1;
var monthList = [];

var leapYear = function(yearSelected) {
    if (yearSelected / 4 === 0){
        return 30;
    } else return 29;
};
var febDays = leapYear(year);

var listOfMonths = [
    {name: 'January', daysInMonth: 31},
    {name: 'February', daysInMonth: febDays},
    {name: 'March', daysInMonth: 31},
    {name: 'April', daysInMonth: 30},
    {name: 'May', daysInMonth: 31},
    {name: 'June', daysInMonth: 30},
    {name: 'July', daysInMonth: 31},
    {name: 'August', daysInMonth: 31},
    {name: 'September', daysInMonth: 30},
    {name: 'October', daysInMonth: 31},
    {name: 'November', daysInMonth: 30},
    {name: 'December', daysInMonth: 31}
];
var monthMaker = function(day1, daysPerMonth) {
    var weekList = [];
    var week1 = [];
    for (var i = 1; i < day1; i++) {
        week1.push({date : ''});
    }
    var j = 1;
    for (var i = day1; i < 8; i++){
        week1.push({date : j});
        j++;
    }
    weekList.push(week1);
    var day = j;
    while (day <= daysPerMonth) {

        var week = [];
        for (var i = 1; i <= 7 && day <= daysPerMonth; i++){
            week.push({date: day});
            day++;
        }
        weekList.push(week);
        // the first day of the next month
        if (i < 7) {startDay = i};

    }

    return weekList;
};
var yearMaker = function(input){
    for (i = 0; i < input.length; i++){
        var monthDays = monthMaker(startDay, input[i].daysInMonth);
        monthList.push({monthName: input[i].name, monthDays: monthDays});
    }
    return monthList;
};

angular.module('CalendarApp').controller('calendarController', function(){
    var vm = this;
    vm.title = 'Balh';
    vm.days = [
        {day: 'Sun'},
        {day: 'Mon'},
        {day: 'Tue'},
        {day: 'Wed'},
        {day: 'Thu'},
        {day: 'Fri'},
        {day: 'Sat'}
    ];

    vm.months = yearMaker(listOfMonths);
    vm.year = year;


});


