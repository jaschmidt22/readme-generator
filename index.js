//packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// questions for user input
inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message:
        "Provide a short description of the what, why, and how of your project.",
      name: "description",
    },
    {
      type: "input",
      message: "What are the steps required to install your project?",
      name: "installation",
    },
    {
      type: "input",
      message: "Provide instructions and some examples for use.",
      name: "usage",
    },
    {
      type: "list",
      message: "Choose a license for your project:",
      name: "license",
      choices: [
        "MIT License",
        "GNU General Public License v3.0",
        "Apache License 2.0",
        "None",
      ],
    },
    {
      type: "input",
      message: "How may the project be contributed to?",
      name: "contributing",
    },
    {
      type: "input",
      message: "Have you created any tests for your project?",
      name: "tests",
    },
    {
      type: "input",
      message: "How may you be contacted for questions?",
      name: "contact",
    },

    //write markdown file, log if successful or unsuccessful
  ])
  .then((response) => {
    const readmeContent = generateMarkdown(response);
    fs.writeFile("readMe.md", readmeContent, (err) => {
      if (err) {
        console.error("error writing README:", err);
      } else {
        console.log("Saved File");
      }
    });
  });
