// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "n/a"){
    return ""
  }
  return "![license Badge](https://img.shields.io/badge/license-"+`${license}`+"-blueviolet.svg)"
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
 if (license === "n/a"){
  return ""
 }
}
return "- [License](#license)"

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "n/a"){
   return ""
  }
  return `## License
 }

// TODO: Create a function to generate markdown for README
// text or template literals are what they call the backticks
function generateMarkdown(data) {
  return #${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - ${renderLicenseLink(data.license)}
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
    - [Visuals](#visuals)

  ## Installation
    ${data.installation}
  
  ## Visuals

  ### Deployed
  Link to deployed application:[${data.title}](${data.deployed})

  ## Usage
    ${data.usage}
    ${renderLicenseSection(data.license)}
    
  ## Contributing
    ${data.contribution}
    
  ## Tests
    ${data.testing}
  
  ## Questions
  
Checkout my other projects on github: [${data.username}](https://www.github.com/${data.username})

`;
}

module.exports = generateMarkdown;
