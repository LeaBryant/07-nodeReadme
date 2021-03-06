// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'Enter the project title:'
  },
  {
    type: 'list',
    name: 'licenses',
    message: 'Include licenses:',
    choices: ['MIT','MOZILLA_PUBLIC_LICENSE_2.0','APACHE','N/A']
},
{
    type: 'input',
    name: 'description',
    message: 'Enter a description of your project:'
},
{
    type: "input",
    message: "Instructions on usage:",
    name: "usage",
},
{
    type: "input",
    message: "Test instructions:",
    name: "testing",
    validate: (input) => {
        if (input !== '') {
            return true;
        }
        return 'Please enter a response'
    }
},
  {
    type: "input",
    message: "Include step-by-step installation instructions:",
    name: "installation",
},
{
    type: "input",
    message: "Link to deployed application:",
    name: "deployed",
},
{
    type: "input",
    message: "Describe how users can contribute:",
    name: "contribution",
},
  {
    type: "input",
    message: "Github Username:",
    name: "username",
},
{
    type: "input",
    message: "Email:",
    name: "email",
},

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}
// research fs, path and the ... spread operator 

// TODO: Create a function to initialize app

function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile('NEWREADME.md', generateMarkdown({...answers}))
    })
}
// Function call to initialize app
init();
