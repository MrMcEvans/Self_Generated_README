//collects url for license badge
function renderLicenseBadge(license) {
  if (license !== 'NONE') {
    return `![Github license](https://img.shields.io/badge/License-${license}-yellow.svg)`;
  }
  return '';
}
//creates the license link
function renderLicenseLink(license) {
  if (license !== 'NONE'){
    return `\n* [license](#license)\n`
  }
  return "";
}
//saves licencse input to be properly displayed in the README
function renderLicenseSection(license) {
    if (license !== 'NONE'){
  return `<h2>License</h2>

  This project is protexted under the ${license} license`
}
return '';}

//Builds README
function generateMarkdown(data) {
  return `<h1># ${data.title}</h1>


${renderLicenseBadge(data.license)}



<h2>Description</h2>

<h3>${data.description}</h3>


<h2>Table of Contents</h2>

<h3> <a href=#license>License</a> </h3>
<h3> <a href=#install>Installation</a> </h3>
<h3> <a href=#usage>Usage</a> </h3>
<h3> <a href=#test>Tests</a> </h3>
<h3> <a href=#question>Contact me</a> </h3>

<h2 id="install">Installation</h2>

<h3>${data.install}</h3>


<h2 id="usage">Usage</h2>

<h3>${data.usage}</h3>


<h2>Contributing</h2>

<h3>${data.contributers}</h3>


<h2 id="test">Test</h2>

<h3>${data.commandTest}</h3>

<h2 id="license">${renderLicenseSection(data.license)}   ${renderLicenseLink(data.license)}</h2>


<h2 id="question">Questions</h2>

If you have any questions you can contact me at my GitHub (1) or by email (2)

(1) [${data.github}] (https://github.com/${data.github})

(2) ${data.email}




<p>
`;
}
//exports to index.js file
module.exports = generateMarkdown;
