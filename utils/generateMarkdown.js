// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT License":
      return "https://img.shields.io/badge/License-MIT-green.svg";
    case "GNU General Public License v3.0":
      return "Https://img.shields.io/badge/License-GPLv3-blue.svg";
    case "Apache License 2.0":
      return "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
    default:
      return "";
  }
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT License":
      return "https://opensource.org/licenses/MIT";
    case "GNU General Public License v3.0":
      return "https://www.gnu.org/licenses/LICENSE-2.0";
    case "Apache License 2.0":
      return "https://www.apache.org/licenses/LICENSE-2.0";
    default:
      return "";
  }
}
// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `This application is covered under the ${license} license. See the [license file](${renderLicenseLink(
    license
  )}) for details.`;
}

//function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadgeURL = renderLicenseBadge(data.license);

  return `# ${data.title}

## Description
${data.description}

## Table of Contents

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license} - [![License](${licenseBadgeURL})](${renderLicenseLink(
    data.license
  )})

${renderLicenseSection(data.license)}


## Contributing
${data.contributing}

## Tests
${data.tests}

## Contact Info
${data.contact}

`;
}

module.exports = generateMarkdown;
