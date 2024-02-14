const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const team = [];

// TODO: Write Code to gather information about the development team members, and render the HTML file.

function promptManager() {
  console.log("Please enter the team manager's information:");
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Name:",
      },
      {
        type: "input",
        name: "id",
        message: "ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Email:",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Office Number:",
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      team.push(manager);
      promptMenu();
    });
}
