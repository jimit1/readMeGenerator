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
  - [Motivation](#Motivation)
  - [How to install](#how-to-install)
  - [How to use](#how-to-use)
  - [Contributors](#contributors)
  - [How to test](#how-to-test)
  - [Additional questions or comments](#additional-questions-or-comments)
  - [Licenses](#licenses)
  - [Email to contact me](#email-to-contact-me)
  ***
  ## Motivation
  ${res.motivation}
  ***
  ## How to install
  ${res.install}
  ***
  ## How to use
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
  ## Email to contact me
  ${userEmail}
  `,
    (err) => {
      if (err) throw err;
    }
  );
};
