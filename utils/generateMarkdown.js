// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'NONE') {
    return `![Github license](https://img.shields.io/badge/License-${license}-yellow.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'NONE'){
    return `\n* [license](#license)\n`
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== 'NONE'){
  return `<h2>License</h2>

  This project is protexted under the ${license} license`
}
return '';}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

<img>${renderLicenseBadge(data.license)}<img>



<h1>Description</h1>

<h2>${data.description}</h2>


<h1>Table of Contents</h1>

<h2>${renderLicenseLink(data.license)}</h2>
<h2> <a href=#install>Installation</a> </h2>
<h2> <a href=#usage>Usage</a> </h2>
<h2> <a href=#test>Tests</a> </h2>
<h2> <a href=#question>Contact me</a> </h2>

<h1>Installation</h1>

<h2 id="install">${data.install}</h2>


<h1>Usage</h1>

<h2 id="usage">${data.usage}</h2>


<h1>Contributing</h1>

<h2>${data.contributers}</h2>


<h1>Test</h1>

<h2 id="test">${data.commandTest}</h2>

<h2>${renderLicenseSection(data.license)}</h2>


<h1 id="question">Questions</h1>

If you have any questions you can contact me at my GitHub (1) or by email (2)

<h2>(1) [${data.github}] (https://github.com/${data.github})</h2>

<h2>(2) ${data.email}</h2>
`;
}

module.exports = generateMarkdown;
