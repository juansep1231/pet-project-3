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

const getReposMoreThanFiveStars = async () => {
  try {
    const dataArray = await getArrayOfData();
    const filteredData = getFilteredsStargazers(dataArray).map((repo) => {
      return { name: repo.name, stars: repo.stargazers_count };
    });

    return filteredData;
  } catch (error) {
    console.log(error);
  }
};

// FUCNTIONS TO RETURN THE 5 LAST UPDATED REPOS

const getLastUpdatedRepos = async () => {
  try {
    const dataArray = await getArrayOfData();
    const sortedData = sortDateData(dataArray);
    const lastFiveRepos = getTopFive(sortedData).map((repo) => {
      return { name: repo.name, stars: repo.updated_at };
    });
    return lastFiveRepos;
  } catch (error) {
    console.log(error);
  }
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

const getSumOfReposStars = async () => {
  try {
    const dataArray = await getArrayOfData();
    const sumOfStars = getSum(dataArray);
    return sumOfStars;
  } catch (error) {
    console.log(error);
  }
};

const getSum = (dataArray) => {
  return dataArray.reduce((acc, repo) => acc + repo.stargazers_count, 0);
};

module.exports = {
  getReposMoreThanFiveStars: getReposMoreThanFiveStars,
  getLastUpdatedRepos: getLastUpdatedRepos,
  getSumOfReposStars: getSumOfReposStars,
};
