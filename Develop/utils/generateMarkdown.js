// function generateMarkdown(data) {
//   return `
// # ${data.title}

// `;
// }

const fs = require("fs");

module.exports = (res, userEmail) => {
  return fs.writeFile(
    "README.md",
    `
  # ${res.title}
  ${res.description}
  ***
  ## Contents
  - How to install 
  - How to use
  - Contributors (if applicable)
  - How to test
  - Additional questions or comments
  - Licenses
  - Email to contact me
  ***
  ## How to install
  ${res.install}
  ***
  ## Intended Usage
  ${res.use}
  ***
  ## Contributors
  ${res.people}
  ***
  ## How to test
  ${res.test}
  ***
  ## Additional questions or comments
  ${res.questions}
  ****
  ## Licenses
  ![license type](https://img.shields.io/badge/Licenses-${res.licenses}-red)
  ****
  ##Email to contact me
  ${userEmail}
  `,
    (err) => {
      if (err) throw err;
    }
  );
};
