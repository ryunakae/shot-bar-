const today = new Date();
const currentDate = today.getDate();
const currentDay = today.getDay();
const startDay = (35 + currentDay - currentDate + 1) % 7;
const endDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
const nextStartDate = new Date(today.getFullYear(), today.getMonth() + 1, 1);
let nextCalendar = nextStartDate.getDate();
const lastEndDate = new Date(today.getFullYear(), today.getMonth(), 0);

const calendarTable = document.getElementById('calendar');
let calendarHeader = "";
const week = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

for ( let i = 0; i < 7; i++){
  calendarHeader += "<th>" + week[i] + "</th>"
}

let calendarBody = "";
let count = 1 - startDay;

for ( let row = 0; row < 6; row++){
  let calendarCell = "";
  for ( let col = 0; col < 7; col++){
    if (count < 1 ||count > endDate.getDate()){
      if (count < 1){
        calendarCell += '<td class="last_month">' + (lastEndDate.getDate() + count++) + '</td>';
      }
      if (count > endDate.getDate()){
        calendarCell += '<td class="next_month">' + nextCalendar++ + '</td>';
      }
    }
    else{
      if ( col == 4){
        if (count == currentDate){
          calendarCell += '<td class="thursday today">' + count++ + '</td>';
        }
        else{
          calendarCell += '<td class="thursday">' + count++ + '</td>';
        }
      }
      else{
        if (count == currentDate){
          calendarCell += '<td class="today">' + count++ + '</td>'
        }
        else{
          calendarCell += '<td>' + count++ + '</td>';
        }
      }
    }
  }
  calendarBody += "<tr>" + calendarCell + "</tr>";
}

calendarTable.innerHTML = calendarHeader + calendarBody;
document.getElementById('YearMonth').innerHTML = today.getFullYear() + '/' + (today.getMonth() + 1);