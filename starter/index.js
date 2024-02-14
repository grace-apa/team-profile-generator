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

function promptIntern() {
  console.log("Please enter the intern's information:");
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
        name: "school",
        message: "School:",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      team.push(intern);
      promptMenu();
    });
}

function promptMenu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "Would you like to:",
        choices: [
          "Add an engineer",
          "Add an intern",
          "Finish building the team",
        ],
      },
    ])
    .then((answer) => {
      switch (answer.choice) {
        case "Add an engineer":
          promptEngineer();
          break;
        case "Add an intern":
          promptIntern();
          break;
        case "Finish building the team":
          renderTeam();
          break;
      }
    });
}
