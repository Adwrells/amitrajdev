document.addEventListener("DOMContentLoaded", function() {
  const bsMonthDays = [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30]; // Days in each month of the Bikram Samvat (BS) calendar

  // Function to convert Gregorian date to Bikram Samvat (BS) date
  function convertToBSDate(gYear, gMonth, gDate) {
    const bsYearDiff = 57;
    const bsMonthDiff = 8;
    const bsDateDiff = 17;

    let bsYear = gYear + bsYearDiff;
    let bsMonth = gMonth + bsMonthDiff - 1; // Month index starts from 0
    let bsDate = gDate + bsDateDiff;

    while (bsDate > bsMonthDays[bsMonth]) {
      bsDate -= bsMonthDays[bsMonth];
      bsMonth += 1;
      if (bsMonth >= 12) {
        bsMonth -= 12;
        bsYear += 1;
      }
    }

    return {
      year: bsYear,
      month: bsMonth + 1, // Adding 1 to adjust month index back to 1-based
      date: bsDate
    };
  }

  // Function to calculate the difference in days between two dates
  function dateDifference(gYear, gMonth, gDate, bsYear, bsMonth, bsDate) {
    const gDateObj = new Date(gYear, gMonth, gDate);
    const bsDateObj = new Date(bsYear, bsMonth, bsDate);
    const difference = Math.floor((bsDateObj - gDateObj) / (1000 * 60 * 60 * 24));
    return difference;
  }

  // Function to update the date difference on the webpage
  function updateDateDifference() {
    const currentDate = new Date();
    const gYear = currentDate.getFullYear();
    const gMonth = currentDate.getMonth();
    const gDate = currentDate.getDate();

    const bsDate = convertToBSDate(gYear, gMonth, gDate);
    const bsFormattedDate = `${bsDate.year}-${bsDate.month}-${bsDate.date}`;

    const bsDateString = `Today's BS date is ${bsFormattedDate}`;
    document.getElementById("dateDifference").textContent = bsDateString;

    const diff = dateDifference(gYear, gMonth, gDate, bsDate.year, bsDate.month - 1, bsDate.date);
    document.getElementById("dateDifference").textContent += `<br>Difference in days: ${diff}`;
  }

  // Call the function to update the display
  updateDateDifference();
});
