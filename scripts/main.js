const {
  getReposMoreThanFiveStars,
  getLastUpdatedRepos,
  getSumOfReposStars,
  getArrayOfData,
} = require("./functionsAsyncAwait");

getArrayOfData()
  .then((data) => {
    console.log(getReposMoreThanFiveStars(data));
    console.log(getLastUpdatedRepos(data));
    console.log(getSumOfReposStars(data));
  })
  .catch(console.log);
