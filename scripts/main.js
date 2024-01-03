const { getReposMoreThanFiveStars: getReposMoreThanFiveStars } = require("./functions");
console.log("Top five repos");
getReposMoreThanFiveStars().then(data => console.log(data));
