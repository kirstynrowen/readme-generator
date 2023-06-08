//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Please enter your GitHub username.',
        name: 'github',      
    },
    {
        type: 'input',
        message: 'Please enter your email address.',
        name: 'email'
    },
    {
        type: 'input',
        message: 'Please enter a short description of your application.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What is the title of your application?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please provide intstallation instrctions.',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Please provide usage information.',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Please provide contribution guidelines.',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'Please provide application testing instructions.',
        name: 'test'
    },
    {
        type: 'list',
        message: 'What license should this application have?',
        name: 'license',
        choices: ['MIT', 'Apache 2.0', 'BSD 3', 'GPL 3.0', 'Unlicense', 'None']
    }
];

// Function to write README file and handle errors
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Success! Your README.md file has been generated.');
        }
    });
}

// Function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((userInput) => {
        const markdown = generateMarkdown(userInput);
        writeToFile('README.md', markdown);
    })
}

// Function call to initialize app
init();

