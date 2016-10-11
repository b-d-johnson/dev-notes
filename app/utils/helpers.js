var axios = require('axios');

function getRepos(username){
  return axios.get('https://api.github.com/users/' + username + '/repos');
}

function getUserInfo(username){
  return axios.get('https://api.github.com/users/' + username);
}

function getOrgs(username){
  return axios.get('https://api.github.com/users/' + username + '/orgs');
}

var helpers = {
  getGithubInfo: function(username){
    return axios.all([getRepos(username), getUserInfo(username), getOrgs(username)])
      .then(function(arr){
        return {
          repos: arr[0].data,
          bio: arr[1].data,
          orgs: arr[2].data
        };
    });
  }
};

module.exports = helpers;
