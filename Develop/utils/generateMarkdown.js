//Returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
  if (license === 'Apache 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  }
  if (license === 'BSD 3') {
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  }
  if (license === 'GPL 3.0') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  }
  if (license === 'Unlicense') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  }
  return '';
}

// Returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '[MIT](https://opensource.org/licenses/MIT)';
  }
  if (license === 'Apache 2.0') {
    return '[Apache 2.0](https://opensource.org/licenses/Apache-2.0)';
  }
  if (license === 'BSD 3') {
    return '[BSD 3-Clause](https://opensource.org/licenses/BSD-3-Clause)';
  }
  if (license === 'GPL 3.0') {
    return '[GPL 3.0](https://www.gnu.org/licenses/gpl-3.0)';
  }
  if (license === 'Unlicense') {
    return '[The Unlicense](http://unlicense.org/)';
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }
  return `##License
  
  This application is licensed under the ${renderLicenseLink(license)} license.`;
}

// Generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

   ## Description

  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  To install the necessary dependencies, run the command: ${data.installation}

  ## Usage
  ${renderLicenseBadge(data.license)}
  ${data.usage}

  ## Contributing

  ${data.contributing}

  ## Tests

  To run the proper tests, run the command: ${data.test}

  ## Questions

  If you have any questions, please contact feel free to contact me here:

  - Email: ${data.email}
  - GitHub: [${data.github}](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
