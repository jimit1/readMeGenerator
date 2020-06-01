const inquirer = require("inquirer");
const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");
let userEmail;
const questions = [
  "1. What is your Github username?",
  "2. What is the title of your project?",
  "3. Provide a brief description of your project?",
  "4. Would you like to list anything in the table of contents?",
  "5. Provide a description on how to install your project?",
  "6. Provide a breif description on how you use your project?",
  "7. What licenses are needed for your project?",
  "8. List all people who have contributed to the project",
  "9. What will one need to test the project?",
  "10. Any additional questions or comments about the project?",
];
inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: `${questions[0]}`,
    },
  ])
  .then((res) => api(res.data))
  .then((res) => {
    userEmail = res.data.email;
    if (userEmail === null) {
      userEmail = "Not public";
    }
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
        name: "table",
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
    ])
  )
  .then((res) => generateMarkdown(res, userEmail));
