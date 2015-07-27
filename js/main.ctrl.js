
angular.module('CalendarApp').controller('calendarController', function(){
    var vm = this;
    vm.startingMonth = 'january';
    vm.startingYear = 2015;
    vm.year = 2015;
    vm.today = new Date(vm.startingMonth + " 1, "+ vm.startingYear);
    vm.startDay = vm.today.getDay() + 1;
    vm.monthList = [];

    vm.leapYear = function(yearSelected) {
        if (yearSelected % 4 === 0){
            return 29;
        } else return 28;
    };
    vm.febDays = vm.leapYear(vm.year);

    vm.listOfMonths = [
        {name: 'January', data: 1, daysInMonth: 31},
        {name: 'February', data: 2, daysInMonth: vm.febDays},
        {name: 'March', data: 3, daysInMonth: 31},
        {name: 'April', data: 4, daysInMonth: 30},
        {name: 'May', data: 5, daysInMonth: 31},
        {name: 'June', data: 6, daysInMonth: 30},
        {name: 'July', data: 7, daysInMonth: 31},
        {name: 'August', data: 8, daysInMonth: 31},
        {name: 'September', data: 9, daysInMonth: 30},
        {name: 'October', data: 10, daysInMonth: 31},
        {name: 'November', data: 11, daysInMonth: 30},
        {name: 'December', data: 12, daysInMonth: 31}
    ];

    //      month maker funtion for the above

    vm.monthMaker = function(day1, daysPerMonth) {
        //console.log(day1);
        var weekList = [];
        var week1 = [];
        var j = 1;
        var weekdays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
        for (var i = 1; i < day1; i++) {
            week1.push({date: '', dayName: weekdays[i-1]});
        }
        for (i = day1; i < 8; i++){
            week1.push({date: j, dayName: weekdays[i-1]});
            j++;
        }
        weekList.push(week1);
        var day = j;
        while (day <= daysPerMonth) {

            var week = [];
            for (i = 1; i <= 7 && day <= daysPerMonth; i++){
                week.push({date: day, dayName: weekdays[i-1]});
                day++;
            }
            if (day === daysPerMonth + 1) {
                for (var k = i; k <= 7; k++){
                    week.push({date: '', dayName: weekdays[k-1]});
                }
            }
            weekList.push(week);
            // the first day of the next month

        }
        if (weekList.length < 6){
            week = [];
            for (var l = 1; l <= 7; l++) {
                week.push({date: '', dayName: 'blank'});
            }
            weekList.push(week);

        }
        console.log(i);
        if (i < 7) {vm.startDay = i-1};
        return weekList;
    };
    vm.yearMaker = function(input){
        for (p = 0; p < input.length; p++){
            var monthDays = vm.monthMaker(vm.startDay, input[p].daysInMonth);
            vm.monthList.push({monthName: input[p].name, monthDays: monthDays});
        }
        console.log(vm.monthList);
        return vm.monthList;
    };



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

    vm.monthsNames =  vm.listOfMonths;
    vm.monthNames = ['January', 'February', 'March', 'April',
        'May', 'June', 'July','August', 'September', 'October', 'November', 'December'];
    vm.months = vm.yearMaker(vm.listOfMonths);
    vm.years = [2014, 2015, 2016, 2017, 2018];
    vm.selectedMonth = '';
    vm.selectedYear = '';
    vm.thingy = vm.selectedMonth.data;
    vm.newYear = function(){
        vm.febDays = vm.leapYear(vm.year);
        vm.year = vm.selectedYear;
        vm.months = [];
        var listOfMonths2 = [];
        vm.today = new Date(vm.selectedMonth.name + " 1, "+ vm.selectedYear);
        vm.startDay = vm.today.getDay() + 1;
        vm.monthList = [];
        for (var i = vm.selectedMonth.data; i <= vm.listOfMonths.length; i++){
            listOfMonths2.push(vm.listOfMonths[i-1]);
        }
        for (i = 0; i < vm.selectedMonth.data - 1; i++){
            listOfMonths2.push(vm.listOfMonths[i])
        }
        vm.months = vm.yearMaker(listOfMonths2);
    }

});