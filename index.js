// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
//const questions = [
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
        "Provide a short description of the what, why, and how of your prjoect.",
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
      name: "instructions",
    },
    {
      type: "input",
      message:
        "List any collaborators and include links to their GitHub profiles.",
      name: "collaborators",
    },

    //"Table of Contents", //titles will link to section

    //"Provide the license information that you are using.",
    //"How may the project be contributed to?",
    // "How may you be contacted for questions?", //link to github/e-mail
  ])
  .then(
    (response) => {
      console.log(response);
      fs.writeFile("readMe.md", JSON.stringify(response), () =>
        console.log("Saved File")
      );
    }

    // ? console.log("Success!")
    // : console.log("You forgot your password already?!")
  );

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
