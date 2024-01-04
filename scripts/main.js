const { getReposMoreThanFiveStars: getReposMoreThanFiveStars } = require("./functions");
const { getLastUpdatedRepos: getLastUpdatedRepos } = require("./functions");
const { getSumOfReposStars: getSumOfReposStars } = require("./functions");

getReposMoreThanFiveStars().then(data => console.log(data));

getLastUpdatedRepos().then(data => console.log(data));

getSumOfReposStars().then(data => console.log(data));