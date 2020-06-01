const axios = require("axios");

module.exports = (username) =>
  axios.get(`https://api.github.com/users/${username}`).then((res) => res);
