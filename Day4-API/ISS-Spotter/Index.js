const { fetchIP, fetchCoordinates, fetchPassovers, fetchTimes } = require('./ISS');

const printDates = function(times) {
  for (const time of times) {
    const date = new Date(0);
    date.setUTCSeconds(time.risetime);
    const duration = time.duration;
    console.log(`Next date is at ${date} for ${duration} seconds!`);
  }
};

fetchTimes((error, times) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  printDates(times);
});