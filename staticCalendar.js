function getDay(date) {
    var day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
}

function createCalendar(id) {
    var elem = document.getElementById(id);
    var date = new Date();
    var tempDate = new Date(date.getFullYear(), date.getMonth());
    var table = '<table class="calendar"><tr><th>Пн</th><th>Вт</th><th>Ср</th><th>Чт</th><th>Пт</th><th>Сб</th><th>Вс</th></tr><tr>';

    // Заполняем пустотой до первого дня недели месяца
    for (var i = 0; i < getDay(tempDate); i++) {
        table += '<td></td>';
    }

    // Заполняем числами
    while (tempDate.getMonth() == date.getMonth()) {

        if (tempDate.getDate() != date.getDate()) {
            table += '<td>' + tempDate.getDate() + '</td>';
        }
        else{
            table += '<td id="today">' + tempDate.getDate() + '</td>';
        }

        if (getDay(tempDate) % 7 == 6) {
            table += '</tr><tr>';
        }

        tempDate.setDate(tempDate.getDate() + 1);
    }

    // Добиваем таблицу пустыми ячейками, если нужно
    if (getDay(tempDate) != 0) {
        for (var i = getDay(tempDate); i < 7; i++) {
            table += '<td></td>';
        }
    }

    // Закрыть таблицу
    table += '</tr></table>';

    elem.innerHTML = table;
}

createCalendar("static_calendar" );