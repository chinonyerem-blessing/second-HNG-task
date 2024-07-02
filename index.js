
document.addEventListener('DOMContentLoaded', function () {
  displayCurrentTimeNigeria();
  displayCurrentDayOfWeek();

  setInterval(displayCurrentTimeNigeria, 1000)
});

function displayCurrentTimeNigeria() {
  const options = { timeZone: 'Africa/Lagos', hour12: true };
  const currentTime = new Date().toLocaleTimeString('en-US', options);
  document.getElementById("utcTime").innerText = currentTime
}

function displayCurrentDayOfWeek() {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDayIndex = new Date().getDay();
  const currentDayOfWeek = daysOfWeek[currentDayIndex];

  document.getElementById("currentDay").innerText = currentDayOfWeek
}

