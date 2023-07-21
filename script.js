document.addEventListener("DOMContentLoaded", function() {
  // Function to convert Gregorian date to Bikram Samvat (BS) date
  function convertToBSDate(date) {
    const bsYearDiff = 56;
    const bsMonthDiff = 8;
    const bsDateDiff = 17;

    const gYear = date.getFullYear();
    const gMonth = date.getMonth();
    const gDate = date.getDate();

    let bsYear = gYear + bsYearDiff;
    let bsMonth = gMonth + bsMonthDiff;
    if (gDate >= bsDateDiff) {
      bsMonth += 1;
      bsDate = gDate - bsDateDiff;
    } else {
      bsDate = 30 - (bsDateDiff - gDate);
    }

    if (bsMonth > 12) {
      bsMonth -= 12;
      bsYear += 1;
    }

    return {
      year: bsYear,
      month: bsMonth,
      date: bsDate
    };
  }

  // Function to update the date and time in Bikram Samvat (BS)
  function updateDateTime() {
    const currentDate = new Date();
    const bsDate = convertToBSDate(currentDate);

    const bsFormattedDate = `${bsDate.year}-${bsDate.month}-${bsDate.date}`;

    let bsFormattedTime = `${currentDate.getHours() % 12}:${String(currentDate.getMinutes()).padStart(2, '0')}:${String(currentDate.getSeconds()).padStart(2, '0')}`;
    bsFormattedTime += currentDate.getHours() >= 12 ? ' PM' : ' AM';

    const bsDateTimeString = `BS ${bsFormattedDate} ${bsFormattedTime}`;
    document.getElementById("currentDateTime").textContent = bsDateTimeString;
  }

  // Call the function every second to update the time
  setInterval(updateDateTime, 1000);
});
