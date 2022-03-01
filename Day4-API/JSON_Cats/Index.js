const { breedDescription } = require('./BreedFetcher');
const breed = process.argv.slice(2);

//callback
breedDescription(breed, (error, description) => {
  if (error) {
    console.log("Error: ", error);
    return;
  } else {
    console.log(description);
  }
});