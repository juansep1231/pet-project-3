const API_URL = "https://api.github.com/orgs/stackbuilders/repos";

const getData = async () => {
  try {
    const response = await fetch(API_URL);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

// FUCNTIONS TO RETURN THE REPOS WIHT MORE THAN FIVE STARS

const getArrayOfData = async () => {
  const data = await getData();
  return (dataArray = Object.values(data));
};

const getFilteredsStargazers = (data) => {
  return data.filter((repo) => repo.stargazers_count > 5);
};

const getReposMoreThanFiveStars = (dataArray) => {
  const filteredData = getFilteredsStargazers(dataArray).map((repo) => {
    return { name: repo.name, stars: repo.stargazers_count };
  });
  return filteredData;
};

// FUCNTIONS TO RETURN THE 5 LAST UPDATED REPOS

const getLastUpdatedRepos = (dataArray) => {
  const sortedData = sortDateData(dataArray);
  const lastFiveRepos = getTopFive(sortedData).map((repo) => {
    return { name: repo.name, updated_date: repo.updated_at };
  });
  return lastFiveRepos;
};

const getTopFive = (dataArray) => {
  return dataArray.slice(0, 5);
};

const sortDataByDate = (dataArray) => {
  return dataArray.sort(
    (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
  );
};

//FUNCTION TO GET THE SUM OF ALL REPOS STARS

const getSumOfReposStars = (dataArray) => {
  const sumOfStars = getSum(dataArray);
  return sumOfStars;
};

const getSum = (dataArray) => {
  return dataArray.reduce((acc, repo) => acc + repo.stargazers_count, 0);
};

module.exports = {
  getReposMoreThanFiveStars: getReposMoreThanFiveStars,
  getLastUpdatedRepos: getLastUpdatedRepos,
  getSumOfReposStars: getSumOfReposStars,
  getArrayOfData: getArrayOfData,
  getSum: getSum,
  sortDateData: sortDateData,
  getTopFive: getTopFive,
  getFilteredsStargazers: getFilteredsStargazers,
};
