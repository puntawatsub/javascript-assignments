var year = parseInt(prompt("Year") || "0");
var isLeapYear = function (year) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    }
    return false;
};
document.querySelector('body').innerHTML += "\n    <h2>The year ".concat(year, " is ").concat(isLeapYear(year) ? "a leap year" : "not a leap year", "</h2>\n");
