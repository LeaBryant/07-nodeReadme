// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "n/a"){
    return ""
  }
  return badge= "![![GitHub](https://badgen.net/badge/icon/github?icon=github&label)](https://github.com)";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
 if (license === "n/a"){
  return ""
 }
}
return "[lincense]{#license}"

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "n/a"){
   return ""
  }
  return "[lincense]{#license}"
 }

// TODO: Create a function to generate markdown for README
// text or template literals are what they call the backticks
function generateMarkdown(data) {
  return `# ${data.title}

  # Description
  ${data.description}
  # Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributions](#contributions)
    * [Tests](#tests)
    * [Questions](#questions)

  # Installation
    - ${data.instal}
  # Usage
    - ${data.usage}
  # Screenshot
    - ${data.screenshot}
  # License
    - ${data.license}
  # Contributions
    - ${data.contributions}
  # Tests
    - ${data.tests}
  # Github
    - ${data.username}
    - email ${data.email}
  
`;
}

module.exports = generateMarkdown;
