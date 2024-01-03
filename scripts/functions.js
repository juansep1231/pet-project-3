

const API_URL = "https://api.github.com/orgs/stackbuilders/repos";


const getData = () => {

 return fetch(API_URL).then((response) => response.json());

}

// FUCNTIONS TO RETURN THE REPOS WIHT MORE THAN FIVE STARS

const getFilteredsStargazers = (data) => {

  return data.filter(repo => repo.stargazers_count > 5)
}


const getReposMoreThanFiveStars = () => { 

  return getData().then(data => {
    const dataArray = Object.values(data);
    const filteredData = getFilteredsStargazers(dataArray)
    .map(repo => { return { name: repo.name, stars: repo.stargazers_count } });
    
    return filteredData;
  })

  

}


// FUCNTIONS TO RETURN THE 5 LAST UPDATED REPOS


const  getLastUpdatedRepos = (dataArray) => {

  return getData().then(data => {
    const dataArray = Object.values(data);
    const sortedData = sortDateData(dataArray);
    const lastFiveRepos = sortedData.slice(0, 5);
    const lastFiveReposNames = lastFiveRepos.map(repo => return { name: repo.name, stars: repo.stargazers_count });
    return lastFiveReposNames;
  })

}


const sortDateData = (dataArray) => {

  return dataArray.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
}


module.exports = {
  getReposMoreThanFiveStars: getReposMoreThanFiveStars
};