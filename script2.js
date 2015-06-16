
var classMaker = 1;
var makeDay = function(day_name){
    $('.row' + classMaker).append("<TD>"+day_name+"</TD>");
}
// fills the month table with numbers
function fill_table(month,month_length)
{
    day = 1;

    $('.calendarArea').append("<TABLE BORDER=3 class= 'table" + classMaker + "' CELLSPACING=3" +
        " CELLPADDING=3><TR><TD COLSPAN='7'><B>" + month + "   " + year + "</B></TR><TR" +
        "  class='row" + classMaker + "'>");
    makeDay("Sun");
    makeDay("Mon");
    makeDay("Tue");
    makeDay("Wed");
    makeDay("Thu");
    makeDay("Fri");
    makeDay("Sat");
    // pad cells before first day of month
    $('.calendarArea').append("</TR><TR>");
    for (var i=1;i<start_day;i++){
        $('.calendarArea').append("<TD>")
    }
    // fill the first week of days
    for (var i=start_day;i<8;i++){
        $('.calendarArea').append("<TD ALIGN=center>"+day+"</TD>");
        day++
    }
    $('.calendarArea').append("<TR>");
    // fill the remaining weeks
    while (day <= month_length) {
        for (var i=1;i<=7 && day<=month_length;i++){
            $('.calendarArea').append("<TD ALIGN=center>"+day+"</TD>");
            day++
        }
        $('.calendarArea').append("</TR><TR>");
        // the first day of the next month
        start_day=i
    }
    $('.calendarArea').append("</TR></TABLE><BR>")
    classMaker = classMaker + 1
}
// end hiding -->


    // CAHNGE the below variable to the CURRENT YEAR
year=2015;

// first day of the week of the new year
today= new Date("January 1, "+year);
start_day = today.getDay() + 1;   // starts with 0
fill_table("January",31);
fill_table("February",29);
fill_table("March",31);
fill_table("April",30);
fill_table("May",31);
fill_table("June",30);
fill_table("July",31);
fill_table("August",31);
fill_table("September",30);
fill_table("October",31);
fill_table("November",30);
fill_table("December",31);

/**
 * Created by Timothy on 6/15/2015.
 */
