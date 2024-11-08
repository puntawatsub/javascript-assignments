const start_year = parseInt(prompt("Start year"));
const end_year = parseInt(prompt("End year"));

const isLeapYear = (year) => {
  if (year % 4 == 0) {
    if (year % 100 == 0) {
      if (year % 400 == 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }
  return false;
};

for (let i = start_year; i <= end_year; i++) {
  if (isLeapYear(i)) {
    document.querySelector("ul").innerHTML += `<li>${i}</li>`;
  }
}
