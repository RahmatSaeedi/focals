// jshint esversion : 6
const fetchBreedDescription = require('../breedFetcher');
const {assert} = require('chai');

describe('fetchBreedDescription', ()=> {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // no error
      assert.equal(err, null);
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ";

      // correct description
      assert.equal(desc, expectedDesc);

      done();
    });
  });

  it('returns an error for invalid cat breed', (done) => {
    fetchBreedDescription('thisIsNotACatBreed.', (err, desc) => {
      // no error
      assert.isNotNull(err);

      // correct description
      assert.equal(desc, null);

      done();
    });
  });

});
