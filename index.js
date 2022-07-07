// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const Choices = require('inquirer/lib/objects/choices');

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
    type: 'input',
    name: 'motavation',
    message: 'What was your motivation?',
  },
  {
    type: 'input',
    name: 'motavation',
    message: 'What was your motivation?',
  },
  {
      type: 'input',
      name: 'install',
      message: 'How to install:',
  },
  {
      type: 'input',
      name: 'usage',
      message: 'Enter the information on how to use this project:'
  },
  {
      type: 'input',
      name: 'guidelines',
      message: 'Enter the contribution guidelines:'
  },
  {
      type: 'input',
      name: 'test',
      message: 'Enter the test instructions:',
  },
  {
      type: 'input',
      message: 'Enter your github username:',
      name: 'username'
  },
  {
      type: 'input',
      message: 'Enter your email address:',
      name: 'email',
  }
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
