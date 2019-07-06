# [Cats as a Service](/)
## [index.js](index.js)
Processes `argv` input and passes cat-breeds to `breedFetcher.js` to obtain its description, and to prints a short description of the breed.
```bash
> node index Siberian Chartreux
# Upon a successful fetch, it may return:
:'

Siberian Info:
The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.

Chartreux Info:
The Chartreux is generally silent but communicative. Short play sessions, mixed with naps and meals are their perfect day. Whilst appreciating any attention you give them, they are not demanding, content instead to follow you around devotedly, sleep on your bed and snuggle with you if you’re not feeling well.
'
```
## [Breed Fetcher](breedFetcher.js)
Returns queried details about a cat breeds. Users can provide any breed name, causing the application to fetch the information from [`thecatapi.com`](https://thecatapi.com/).

```js
const fetchBreedDescription = require('./breedFetcher');
fetchBreedDescription('Siberian', callback);
// where possible callbacks:  callback(null, [STRING])
```

## Testing
To test the program run `npx mocha`