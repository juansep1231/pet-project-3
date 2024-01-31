const API_URL = "https://api.github.com/orgs/stackbuilders/repos";

const getData = async () => {
  try {
    const response = await fetch(API_URL);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

//FUNCTION TO CHECK IF THE DATA IS EMPTY, NULL OR UNDEFINED
const checkEmptyData = (dataArray) =>
  dataArray === undefined || dataArray === null || dataArray.length <= 0;

// FUCNTIONS TO RETURN THE REPOS WIHT MORE THAN FIVE STARS

const getArrayOfData = async () => {
  const data = await getData();
  return Object.values(data);
};

const getFilteredsStargazers = (dataArray) =>
  checkEmptyData(dataArray)
    ? []
    : dataArray.filter((repo) => repo.stargazers_count > 5);

const getReposMoreThanFiveStars = (dataArray) => {
  if (checkEmptyData(dataArray)) return [];

  return getFilteredsStargazers(dataArray).map((repo) => ({
    name: repo.name,
    stars: repo.stargazers_count,
  }));
};
// FUCNTIONS TO RETURN THE 5 LAST UPDATED REPOS

const getLastUpdatedRepos = (dataArray) => {
  if (checkEmptyData(dataArray)) return [];

  const sortedData = sortDataByDate(dataArray);
  return getTopFive(sortedData).map((repo) => ({
    name: repo.name,
    updated_date: repo.updated_at,
  }));
};

const getTopFive = (dataArray) =>
  checkEmptyData(dataArray) ? [] : dataArray.slice(0, 5);

const sortDataByDate = (dataArray) =>
  checkEmptyData(dataArray)
    ? []
    : dataArray.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

//FUNCTION TO GET THE SUM OF ALL REPOS STARS

const getSumOfReposStars = (dataArray) =>
  checkEmptyData(dataArray)
    ? []
    : dataArray.reduce((acc, repo) => acc + repo.stargazers_count, 0);

module.exports = {
  getReposMoreThanFiveStars: getReposMoreThanFiveStars,
  getLastUpdatedRepos: getLastUpdatedRepos,
  getSumOfReposStars: getSumOfReposStars,
  getArrayOfData: getArrayOfData,
  sortDataByDate: sortDataByDate,
  getTopFive: getTopFive,
  getFilteredsStargazers: getFilteredsStargazers,
};
