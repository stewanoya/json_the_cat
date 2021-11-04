const args = process.argv.slice(2);
const fetcher = require("./breedFetcher");
console.log(fetcher(args));
