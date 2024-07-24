

let currentYear = new Date().getFullYear();

function generateCalendar(year) {
    const calendarContainer = document.getElementById('calendarContainer');
    calendarContainer.innerHTML = '';
    document.getElementById('year').innerText = year;

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    for (let month = 0; month < 12; month++) {
        const monthDiv = document.createElement('div');
        monthDiv.className = 'month';
        const monthName = document.createElement('h2');
        monthName.innerText = monthNames[month];
        monthDiv.appendChild(monthName);

        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tr = document.createElement('tr');
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        days.forEach(day => {
            const th = document.createElement('th');
            th.innerText = day;
            tr.appendChild(th);
        });

        thead.appendChild(tr);
        table.appendChild(thead);

        const tbody = document.createElement('tbody');
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        let date = 1;

        for (let i = 0; i < 6; i++) {
            const tr = document.createElement('tr');

            for (let j = 0; j < 7; j++) {
                const td = document.createElement('td');
                if (i === 0 && j < firstDay) {
                    td.innerText = '';
                } else if (date > daysInMonth) {
                    break;
                } else {
                    td.innerText = date;
                    date++;
                }
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }
        table.appendChild(tbody);
        monthDiv.appendChild(table);
        calendarContainer.appendChild(monthDiv);
    }
}

function prevYear() {
    currentYear--;
    generateCalendar(currentYear);
}

function nextYear() {
    currentYear++;
    generateCalendar(currentYear);
}

generateCalendar(currentYear);
