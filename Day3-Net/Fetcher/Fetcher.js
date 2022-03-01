const fs = require("fs");
const request = require("request");
const fetch = process.argv.slice(2);

request(fetch[0], function (error, response, body) {
  if (error) {
    console.log("Error URL invalid. ", error);
    return;
  }
  fs.writeFile(fetch[1], body, error => {
    const bytes = body.length;
    if (error) {
      console.log("Error: File path invalid. ", error);
      return;
    }
    console.log(`Downloaded and saved ${bytes} bytes to ${fetch[1]}`);
  });
});