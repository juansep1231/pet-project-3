const {
  getReposMoreThanFiveStars: getReposMoreThanFiveStars,
} = require("./functionsAsyncAwait");
const {
  getLastUpdatedRepos: getLastUpdatedRepos,
} = require("./functionsAsyncAwait");
const {
  getSumOfReposStars: getSumOfReposStars,
} = require("./functionsAsyncAwait");

getReposMoreThanFiveStars().then((data) =>
  console.log("Repos with more than five stars" + data)
);

getLastUpdatedRepos().then((data) => console.log("Last updated repos " + data));

getSumOfReposStars().then((data) =>
  console.log("SUm of all repos stars" + data)
);
