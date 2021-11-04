const request = require("request");
const args = process.argv.slice(2);

const fetcher = (breed) => {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breed}`,
    (error, response, body) => {
      if (error) {
        console.log(`There was an error. See for yourself -> ${error}`);
      }
      let bodyObj = JSON.parse(body);
      if (bodyObj.length === 0) {
        return console.log(`Item was not found`);
      } else {
        let result = `Here is a description of ${breed} cats: ${bodyObj[0].description}`;
        console.log(result);
      }
    }
  );
};

fetcher(args);
