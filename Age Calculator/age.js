function age() {
    var d1 = parseInt(document.getElementById('date').value, 10);
    var m1 = parseInt(document.getElementById('month').value, 10);
    var y1 = parseInt(document.getElementById('year').value, 10);

    // Ensure the input date is valid
    if (isNaN(d1) || isNaN(m1) || isNaN(y1) || d1 <= 0 || m1 <= 0 || m1 > 12 || d1 > 31) {
        alert("Invalid date. Please check your input.");
        return;
    }

    var today = new Date();
    var d2 = today.getDate();
    var m2 = today.getMonth() + 1; // getMonth() returns a zero-based month index
    var y2 = today.getFullYear();

    var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Adjust for leap years
    if ((y2 % 4 === 0 && y2 % 100 !== 0) || (y2 % 400 === 0)) {
        monthDays[1] = 29;
    }

    // Check for valid dates
    if (d1 > monthDays[m1 - 1]) {
        alert("Invalid day for the given month. Please check your input.");
        return;
    }

    // Adjust for cases where the current date is before the birth date in the current month/year
    if (d1 > d2) {
        d2 += monthDays[m2 - 2];
        m2 -= 1;
    }

    if (m1 > m2) {
        m2 += 12;
        y2 -= 1;
    }

    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;

    // Display the result
    document.getElementById('age').innerHTML = 'Your age is ' + y + ' Years ' + m + ' Months ' + d + ' Days';
}
