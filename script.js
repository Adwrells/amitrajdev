document.addEventListener("DOMContentLoaded", function() {
    // Function to update the date and time
    function updateDateTime() {
      const dateTime = new Date();
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
      const formattedDateTime = dateTime.toLocaleDateString('en-US', options);
      document.getElementById("currentDateTime").textContent = formattedDateTime;
    }
  
    // Call the function every second to update the time
    setInterval(updateDateTime, 1000);
  });
  