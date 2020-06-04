const inquirer = require("inquirer");
const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");
const axios = require("axios");
let profileUrl;
const questions = [
  "1. What is your Github username?",
  "2. What is the title of your project?",
  "3. Provide a brief description of your project?",
  "4. What is your motivation for this project?",
  "5. Provide a description on how to install your project?",
  "6. Provide a breif description on how you use your project?",
  "7. What licenses are needed for your project?",
  "8. List all people who have contributed to the project",
  "9. What will one need to test the project?",
  "10. Any additional questions or comments about the project?",
  "11. What is your email id?",
];
inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: `${questions[0]}`,
    },
  ])
  .then((res) => {
    return api(res.name);
  })
  .then((res) => {
    profileUrl = res.data.html_url;
  })
  .then(() =>
    inquirer.prompt([
      {
        type: "input",
        name: "title",
        message: `${questions[1]}`,
      },
      {
        type: "input",
        name: "description",
        message: `${questions[2]}`,
      },
      {
        type: "input",
        name: "motivation",
        message: `${questions[3]}`,
      },
      {
        type: "input",
        name: "install",
        message: `${questions[4]}`,
      },
      {
        type: "input",
        name: "use",
        message: `${questions[5]}`,
      },
      {
        type: "list",
        name: "licenses",
        message: `${questions[6]}`,
        choices: [
          "MIT",
          "Apache 2.0",
          "ISC",
          "GNY GPL v3",
          "Mozilla Publis License 2.0",
          "None",
        ],
      },
      {
        type: "input",
        name: "people",
        message: `${questions[7]}`,
      },
      {
        type: "input",
        name: "test",
        message: `${questions[8]}`,
      },
      {
        type: "input",
        name: "questions",
        message: `${questions[9]}`,
      },
      {
        type: "input",
        name: "email",
        message: `${questions[10]}`,
      },
    ])
  )
  .then((res) => generateMarkdown(res, profileUrl))
  .catch((err) => {
    if (err) throw err;
  });
