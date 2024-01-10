const API_URL = "https://api.github.com/orgs/stackbuilders/repos";

const getData = () => {
  return fetch(API_URL).then((response) => response.json());
};

// FUCNTIONS TO RETURN THE REPOS WIHT MORE THAN FIVE STARS

const getFilteredsStargazers = (data) => {
  console.log(data);
  return data.filter((repo) => repo.stargazers_count > 5);
};

const getReposMoreThanFiveStars = () => {
  return getData().then((data) => {
    const dataArray = Object.values(data);
    const filteredData = getFilteredsStargazers(dataArray).map((repo) => {
      return { name: repo.name, stars: repo.stargazers_count };
    });

    return filteredData;
  });
};

// FUCNTIONS TO RETURN THE 5 LAST UPDATED REPOS

const getLastUpdatedRepos = () => {
  return getData().then((data) => {
    const dataArray = Object.values(data);
    const sortedData = sortDateData(dataArray);
    const lastFiveRepos = getTopFive(sortedData).map((repo) => {
      return { name: repo.name, stars: repo.updated_at };
    });
    return lastFiveRepos;
  });
};

const getTopFive = (dataArray) => {
  return dataArray.slice(0, 5);
};

const sortDateData = (dataArray) => {
  return dataArray.sort(
    (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
  );
};

//FUNCTION TO GET THE SUM OF ALL REPOS STARS

const getSumOfReposStars = () => {
  return getData().then((data) => {
    const dataArray = Object.values(data);
    const sumOfStars = getSum(dataArray);
    return sumOfStars;
  });
};

const getSum = (dataArray) => {
  return dataArray.reduce((acc, repo) => acc + repo.stargazers_count, 0);
};

module.exports = {
  getReposMoreThanFiveStars: getReposMoreThanFiveStars,
  getLastUpdatedRepos: getLastUpdatedRepos,
  getSumOfReposStars: getSumOfReposStars,
  getFilteredsStargazers: getFilteredsStargazers,
  getTopFive: getTopFive,
  sortDateData: sortDateData,
};
