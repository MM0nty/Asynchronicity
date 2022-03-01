const { breedDescription } = require('../BreedFetcher');
const { assert } = require('chai');

describe('breedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    breedDescription('Siberian', (error, description) => {
      // we expect no error for this scenario
      assert.equal(error, null);
      const expectedDescription = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
      // compare returned description
      assert.equal(expectedDescription, description.trim());
      done();
    });
  })
  it('returns an error when searching for an invalid breed, via callback', (done) => {
    breedDescription('error', (error, description) => {
      // we expect error for this scenario
      assert.equal(error, error);
      done();
    });
  });
});