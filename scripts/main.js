
/*
import axios from "axios"


const apiUrl = "https://api.github.com/orgs/stackbuilders/repos";

document.getElementById("getTopFive").addEventListener("click", getTopFiveRepos);


function getTopFiveRepos(){

    repos = axios({
        method: 'get',
        url: apiUrl,
        headers: {
          'content-type': 'application/json'
        }
      }).then(function (response) {
        //handle success
        console.log(response);
        return response;
      }).catch(function (response) {
        //handle error
        console.log(response);
      });


}
*/

const apiUrl = "https://api.github.com/orgs/stackbuilders/repos";

document.getElementById("getTopFive").addEventListener("click", getTopFiveRepos);
document.getElementById("getLastUpdated").addEventListener("click", getLastUpdatedRepos);

function getTopFiveRepos() {

  fetch(apiUrl).then((response) =>
    response.json()
  ).then(data =>
    Object.values(data)
  ).then(data => data.filter(repo => repo.stargazers_count > 5))
    .then(data => {

      let htmlOutput = '<h2> Repositories with more than 5 stars </h2>';
      htmlOutput += '<table>';
      htmlOutput += '<tr><th>Name</th><th>Stargazers Count</th></tr>';

      data.forEach(repo => {
        htmlOutput += `
            <tr>
              <td>${repo.name}</td>
              <td>${repo.stargazers_count}</td>
            </tr>`;
      });

      htmlOutput += '</table>'

      document.getElementById("ouputRepos").innerHTML = htmlOutput;
    });


}


function getLastUpdatedRepos() {

  fetch(apiUrl).then((response) =>
    response.json()
  ).then(data =>
    Object.values(data)
  ).then(data => data.sort((itemA, itemB) => {

    const dateA = new Date(itemA.updated_at);
    const dateB = new Date(itemB.updated_at);
    return dateB - dateA;
  }))
    .then(data => data.slice(0, 5))
    .then(data => {
      let htmlOutput = '<h2> Last 5 updated repos </h2>';
      htmlOutput += '<table>';
      htmlOutput += '<tr><th>Name</th><th>Updated date</th></tr>';

      data.forEach(repo => {
        htmlOutput += `
      <tr>
        <td>${repo.name}</td>
        <td>${repo.updated_at}</td>
      </tr>`;
      });

      htmlOutput += '</table>'

      document.getElementById("ouputRepos").innerHTML = htmlOutput;
    });


}
