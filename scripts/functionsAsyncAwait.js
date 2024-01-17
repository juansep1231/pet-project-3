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

//FUNCTION TO EXCEUTE A FUNCTION IF DATA IS NOT EMPTY, NULL OR UNDEFINED

const checkEmptyDataAndExecuteFunction = (dataArray, executeFunction) =>
  checkEmptyData(dataArray) ? [] : executeFunction(dataArray);

// FUCNTIONS TO RETURN THE REPOS WIHT MORE THAN FIVE STARS

const getArrayOfData = async () => {
  const data = await getData();
  return Object.values(data);
};

const getFilteredsStargazers = (dataArray) =>
  checkEmptyDataAndExecuteFunction(dataArray, (data) =>
    data.filter((repo) => repo.stargazers_count > 5)
  );

const getReposMoreThanFiveStars = (dataArray) =>
  checkEmptyDataAndExecuteFunction(dataArray, (data) =>
    getFilteredsStargazers(data).map((repo) => ({
      name: repo.name,
      stars: repo.stargazers_count,
    }))
  );

// FUCNTIONS TO RETURN THE 5 LAST UPDATED REPOS

const getLastUpdatedRepos = (dataArray) =>
  checkEmptyDataAndExecuteFunction(dataArray, (data) => {
    const sortedData = sortDataByDate(data);
    return getTopFive(sortedData).map((repo) => ({
      name: repo.name,
      updated_date: repo.updated_at,
    }));
  });

const getTopFive = (dataArray) =>
  checkEmptyDataAndExecuteFunction(dataArray, (data) => data.slice(0, 5));

const sortDataByDate = (dataArray) =>
  checkEmptyDataAndExecuteFunction(dataArray, (data) =>
    data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
  );

//FUNCTION TO GET THE SUM OF ALL REPOS STARS

const getSumOfReposStars = (dataArray) =>
  checkEmptyDataAndExecuteFunction(dataArray, (data) =>
    data.reduce((acc, repo) => acc + repo.stargazers_count, 0)
  );

module.exports = {
  getReposMoreThanFiveStars: getReposMoreThanFiveStars,
  getLastUpdatedRepos: getLastUpdatedRepos,
  getSumOfReposStars: getSumOfReposStars,
  getArrayOfData: getArrayOfData,
  sortDataByDate: sortDataByDate,
  getTopFive: getTopFive,
  getFilteredsStargazers: getFilteredsStargazers,
};
