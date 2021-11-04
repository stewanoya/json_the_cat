const request = require("request");

const fetchBreedDescription = function (breed, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
  request(url, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    const obj = JSON.parse(body);
    const breed = obj[0];
    if (obj[0]) {
      callback(null, breed.description);
    } else {
      callback("Breed not found");
    }
  });
};

module.exports = fetchBreedDescription;

// const fetcher = (breed) => {
//   request(
//     `https://api.thecatapi.com/v1/breeds/search?q=${breed}`,
//     (error, response, body) => {
//       if (error) {
//         console.log(`There was an error. See for yourself -> ${error}`);
//       }

//       if (bodyObj.length === 0) {
//         return console.log(`Item was not found`);
//       } else {
//         let result = `Here is a description of ${breed} cats: ${bodyObj[0].description}`;
//         console.log(result);
//       }
//     }
//   );
// };

// fetcher(args);
