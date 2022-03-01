const { fetchIP, fetchCoordinates, fetchPassovers, fetchTimes } = require("./Promises_ISS");

const printDates = function(times) {
  for (const time of times) {
    const date = new Date(0);
    date.setUTCSeconds(time.risetime);
    const duration = time.duration;
    console.log(`Next date is at ${date} for ${duration} seconds!`);
  }
}

fetchTimes()
  .then((times) => {
    printDates(times);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });