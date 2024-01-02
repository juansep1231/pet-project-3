
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


function getTopFiveRepos(){

    repos = fetch(apiUrl).then((response) => 
        response.json()
      ).then( data =>  
        Object.values(data)
      ).then( data => data.filter( repo => repo.stargazers_count > 5 ))
      .then( data => {

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
