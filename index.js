// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project name?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please tell us a description of your project.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license would you like to use for your project?',
        choices: ['APACHE 2.0', 'MIT', 'BSD 3', 'GPL 3.0', 'NONE'],
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please tell the user what they need to know about using your project.'
    },
    {
        type: 'input',
        name: 'install',
        message: 'What command should be run to install dependencies?'
    },
    {
        type: 'input',
        name: 'commandTest',
        message: 'What command should be run initiate a test?'
    },
    {
        type: 'input',
        name: 'contributers',
        message: 'What does the user need to know about contributing to your repository?'
    }
];

// TODO: Create a function to write README file
function writeToFile(README, data) {
    return fs.writeFileSync(path.join(process.cwd(), README), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log('Here are your responses', inquirerResponses)
        console.log("Generating README...");
        writeToFile("README.md", generateMarkdown({ ...inquirerResponses }));
    });
}

// Function call to initialize app
init();
