// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your projects title?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your projects email?',
      }, 
      {
        type: 'input',
        name: 'description',
        message: 'What is your projects description?',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}
// research fs, path and the ... spread operator 

// TODO: Create a function to initialize app
function init(fileName, data) {
    inquirer.prompt(questions).then((answers) => {
        writeToFile('NEWREADME.md', generateMarkdown({...answers}))
    })

}

// Function call to initialize app
init();
