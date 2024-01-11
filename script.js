// write js code here if required
function updateTimer() {
      const currentDate = new Date();
      const formattedDateTime = currentDate.toLocaleString();
      document.getElementById('timer').innerText = formattedDateTime;
    }

    setInterval(updateTimer, 1000);

    // Initial update
    updateTimer();