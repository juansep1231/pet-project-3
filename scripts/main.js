const { getReposMoreThanFiveStars: getReposMoreThanFiveStars } = require("./functions");
const { getLastUpdatedRepos: getLastUpdatedRepos } = require("./functions");

getReposMoreThanFiveStars().then(data => console.log(data));

getLastUpdatedRepos().then(data => console.log(data));